import { Resend } from "resend";
import type { RegistrationPayload } from "./registrations";
import {
  renderAdminNotificationEmail,
  renderBusinessConfirmationEmail,
  renderContactAcknowledgmentEmail,
  renderPartnerAcknowledgmentEmail,
  renderResidentWelcomeEmail,
} from "./email-templates";

/**
 * Sends transactional email notifications via Resend when a user registers or submits an enquiry.
 * - Admin Alert: Notifies the team inbox about every new lead or enquiry.
 * - User Confirmation: Sends a branded confirmation email to the user.
 */
export async function sendRegistrationNotificationEmails(payload: RegistrationPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[registrations] RESEND_API_KEY is missing. Skipping email notification dispatch.");
    return;
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Hello Linden <onboarding@resend.dev>";
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || "hello@hellohyperlocal.co.za";

  const email = payload.contact?.email?.trim();
  if (!email) return;

  const firstName = payload.contact.firstName?.trim() || payload.contact.fullName?.split(" ")[0] || "Neighbour";
  const contactName = [payload.contact.firstName, payload.contact.lastName].filter(Boolean).join(" ") || payload.contact.fullName || "Neighbour";

  // 1. Send Admin Alert Email
  try {
    const adminSubject = `[Hello Linden Lead] New Registration: ${contactName} (${payload.roles.join(", ")})`;
    const adminHtml = renderAdminNotificationEmail(payload);

    await resend.emails.send({
      from: fromEmail,
      to: [adminEmail],
      subject: adminSubject,
      html: adminHtml,
    });
  } catch (adminErr) {
    console.error("[registrations] Failed to send admin alert email via Resend:", adminErr);
  }

  // 2. Send User Welcome / Confirmation Email
  try {
    let userSubject = "Welcome to Hello Linden!";
    let userHtml = renderResidentWelcomeEmail({ firstName });

    if (payload.roles.includes("business") || payload.roles.includes("founding_business")) {
      userSubject = `Hello Linden - Business Registration Received for ${payload.business?.name || "your business"}`;
      userHtml = renderBusinessConfirmationEmail({
        contactName,
        businessName: payload.business?.name,
        wantsWindowSticker: payload.business?.wantsWindowSticker,
      });
    } else if (payload.partner) {
      userSubject = `Hello Linden Partnership Enquiry - ${payload.partner.organisation}`;
      userHtml = renderPartnerAcknowledgmentEmail({
        contactName,
        organisation: payload.partner.organisation,
        inquiryType: payload.partner.inquiryType,
      });
    } else if (payload.enquiry || payload.roles.includes("general_enquiry")) {
      userSubject = "We received your message - Hello Linden";
      userHtml = renderContactAcknowledgmentEmail({
        name: firstName,
        topic: payload.enquiry?.topic || "General Enquiry",
        message: payload.enquiry?.message || "",
      });
    }

    await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: userSubject,
      html: userHtml,
    });
  } catch (userErr) {
    console.error("[registrations] Failed to send user confirmation email via Resend:", userErr);
  }
}

/**
 * Sends a preview copy of all 5 email templates to a specified test email address.
 */
export async function sendTestEmailTemplatesToAddress(targetEmail: string): Promise<{ ok: boolean; results: string[]; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, results: [], error: "RESEND_API_KEY environment variable is not configured." };
  }

  const resend = new Resend(apiKey);
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Hello Linden <onboarding@resend.dev>";
  const results: string[] = [];

  const templates = [
    {
      subject: "[PREVIEW 1/5] Welcome to Hello Linden (Founding Neighbour)",
      html: renderResidentWelcomeEmail({ firstName: "Sarah" }),
    },
    {
      subject: "[PREVIEW 2/5] Hello Linden - Business Registration Received",
      html: renderBusinessConfirmationEmail({
        contactName: "David Miller",
        businessName: "Linden Coffee Roasters",
        wantsWindowSticker: true,
      }),
    },
    {
      subject: "[PREVIEW 3/5] We received your message - Hello Linden",
      html: renderContactAcknowledgmentEmail({
        name: "Jessica",
        topic: "Suburb Launch Event",
        message: "Hi Hello Linden team! I'm a local resident in 4th Avenue and wanted to know if there's a launch event scheduled for neighbours in Linden?",
      }),
    },
    {
      subject: "[PREVIEW 4/5] Hello Linden Partnership Enquiry - Linden Primary School",
      html: renderPartnerAcknowledgmentEmail({
        contactName: "Principal Naidoo",
        organisation: "Linden Primary School",
        inquiryType: "School & Community Announcements",
      }),
    },
    {
      subject: "[PREVIEW 5/5] [Hello Linden Lead] New Registration Alert (Admin)",
      html: renderAdminNotificationEmail({
        roles: ["business", "founding_business"],
        contact: {
          firstName: "David",
          lastName: "Miller",
          email: "david@lindencoffee.co.za",
          mobile: "082 555 1234",
        },
        suburb: "Linden",
        business: {
          name: "Linden Coffee Roasters",
          address: "4th Avenue, Linden, Johannesburg",
          wantsWindowSticker: true,
        },
        consentAt: new Date().toISOString(),
      }),
    },
  ];

  for (const t of templates) {
    try {
      const res = await resend.emails.send({
        from: fromEmail,
        to: [targetEmail],
        subject: t.subject,
        html: t.html,
      });
      if (res.error) {
        results.push(`❌ ${t.subject}: ${res.error.message}`);
      } else {
        results.push(`✅ ${t.subject} (ID: ${res.data?.id})`);
      }
    } catch (err: any) {
      results.push(`❌ ${t.subject}: ${err?.message || "Send failed"}`);
    }
  }

  return { ok: true, results };
}
