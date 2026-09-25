import type { RegistrationPayload } from "./registrations";

const BRAND = {
  forest: "#1C472A",
  lime: "#7ED957",
  mint: "#e2f6d5",
  onyx: "#0e0f0c",
  muted: "#454745",
  panel: "#F5F5F5",
  bg: "#F9FAF8",
};

/**
 * Base email wrapper with responsive container, header branding, and footer.
 */
function emailWrapper(contentHtml: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello Linden</title>
</head>
<body style="margin: 0; padding: 0; background-color: ${BRAND.bg}; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: ${BRAND.bg}; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid rgba(14,15,12,0.08); box-shadow: 0 4px 20px rgba(14,15,12,0.04);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: ${BRAND.forest}; padding: 28px 32px; text-align: left;">
              <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="display: inline-block; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px;">
                      Hello Linden
                    </span>
                    <span style="display: inline-block; margin-left: 8px; font-size: 11px; font-weight: 600; text-transform: uppercase; background-color: ${BRAND.lime}; color: ${BRAND.onyx}; padding: 3px 8px; border-radius: 12px; letter-spacing: 0.5px;">
                      Linden, JHB
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td style="padding: 36px 32px; color: ${BRAND.onyx}; font-size: 16px; line-height: 1.6;">
              ${contentHtml}
            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="background-color: ${BRAND.panel}; padding: 24px 32px; border-top: 1px solid rgba(14,15,12,0.06); text-align: left;">
              <p style="margin: 0 0 6px 0; font-size: 14px; font-weight: 700; color: ${BRAND.forest};">
                Love Where You Live.
              </p>
              <p style="margin: 0 0 12px 0; font-size: 13px; color: ${BRAND.muted};">
                Hello Linden is part of the Hello Hyperlocal network. Connecting neighbours, supporting local businesses, and celebrating community.
              </p>
              <p style="margin: 0 0 12px 0; font-size: 11px; color: #868685; line-height: 1.4;">
                Protected in terms of South Africa&apos;s POPIA Act. You received this email because you registered on hellohyperlocal.co.za.
              </p>
              <p style="margin: 0; font-size: 10px; color: #999998; line-height: 1.4;">
                <strong>CONFIDENTIALITY NOTICE &amp; POPIA COMPLIANCE:</strong> The contents of this email message and any attachments are intended solely for the addressee(s) and may contain confidential, proprietary, or privileged information. If you are not the intended recipient, please notify the sender immediately, delete this email, and do not disclose, copy, distribute, or take any action in reliance on it. In compliance with the Protection of Personal Information Act (POPIA), Hello Hyperlocal processes personal information responsibly and in accordance with law.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * 1. Resident / Founding Neighbour Welcome Email
 */
export function renderResidentWelcomeEmail(data: { firstName: string }): string {
  const name = data.firstName || "Neighbour";
  const body = `
    <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: ${BRAND.forest}; tracking-[-0.5px];">
      Welcome to the neighbourhood, ${name}!
    </h1>
    <p style="margin: 0 0 18px 0; color: ${BRAND.muted}; font-size: 16px; leading-height: 1.6;">
      Thank you for joining as a <strong>Founding Neighbour</strong> for Hello Linden. You are officially registered as one of our first 1,000 founding residents ahead of our 2026 launch.
    </p>

    <div style="background-color: ${BRAND.mint}; border-radius: 12px; padding: 20px 24px; margin: 24px 0;">
      <p style="margin: 0 0 12px 0; font-size: 15px; font-weight: 700; color: ${BRAND.forest};">
        Here is what you can look forward to as a Founding Neighbour:
      </p>
      <ul style="margin: 0; padding-left: 20px; color: ${BRAND.onyx}; font-size: 14px; line-height: 1.8;">
        <li><strong>Early Access:</strong> Be the first to explore the Hello Linden app before public release.</li>
        <li><strong>Numbered Founding Badge:</strong> Special recognition inside the app as a founding member.</li>
        <li><strong>Shape What We Build:</strong> Direct input into which local tools and features we launch first.</li>
        <li><strong>Community Events:</strong> Invitations to local meetup launch events in Linden.</li>
      </ul>
    </div>

    <p style="margin: 0 0 24px 0; color: ${BRAND.muted}; font-size: 15px;">
      We will reach out with progress updates and early preview invites as launch approaches.
    </p>

    <div style="margin: 28px 0 12px 0;">
      <a href="https://hellohyperlocal.co.za/about#vision" style="display: inline-block; background-color: ${BRAND.forest}; color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 600; padding: 12px 24px; border-radius: 8px;">
        Explore Our Full Vision &rarr;
      </a>
    </div>
  `;
  return emailWrapper(body);
}

/**
 * 2. Business / Founding Business Confirmation Email
 */
export function renderBusinessConfirmationEmail(data: { contactName: string; businessName?: string; wantsWindowSticker?: boolean }): string {
  const name = data.contactName || "Local Merchant";
  const business = data.businessName ? `"${data.businessName}"` : "your local business";
  
  const body = `
    <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: ${BRAND.forest};">
      Welcome aboard, ${name}!
    </h1>
    <p style="margin: 0 0 18px 0; color: ${BRAND.muted}; font-size: 16px;">
      Thank you for registering <strong>${business}</strong> as a Founding Business with Hello Linden!
    </p>

    <p style="margin: 0 0 20px 0; color: ${BRAND.muted}; font-size: 15px;">
      We are building Hello Linden to give independent local spots direct, daily visibility to the people living right around your shop &mdash; without algorithm barriers or expensive ad fees.
    </p>

    <div style="background-color: ${BRAND.panel}; border-left: 4px solid ${BRAND.forest}; border-radius: 4px; padding: 18px 20px; margin: 24px 0;">
      <p style="margin: 0 0 10px 0; font-size: 15px; font-weight: 700; color: ${BRAND.forest};">
        What Happens Next?
      </p>
      <ul style="margin: 0; padding-left: 18px; color: ${BRAND.onyx}; font-size: 14px; line-height: 1.7;">
        <li><strong>Founding Business Status:</strong> Your registration is locked in to help shape Hello Linden before launch.</li>
        ${data.wantsWindowSticker ? `<li><strong>Founding Window Sticker:</strong> We have noted your request for an official Hello Linden window sticker!</li>` : ""}
        <li><strong>Priority Onboarding:</strong> Early access to set up your business profile, announce local deals, and test merchant tools.</li>
        <li><strong>Merchant Spotlight:</strong> Opportunities to feature in our early neighbourhood launch previews.</li>
      </ul>
    </div>

    <p style="margin: 0 0 24px 0; color: ${BRAND.muted}; font-size: 15px;">
      Our merchant support team will reach out directly as we prepare launch materials for Linden.
    </p>

    <div style="margin: 28px 0 12px 0;">
      <a href="https://hellohyperlocal.co.za/for-businesses" style="display: inline-block; background-color: ${BRAND.forest}; color: #ffffff; text-decoration: none; font-size: 15px; font-weight: 600; padding: 12px 24px; border-radius: 8px;">
        Explore All Business Benefits &rarr;
      </a>
    </div>
  `;
  return emailWrapper(body);
}

/**
 * 3. General Contact Enquiry Acknowledgment
 */
export function renderContactAcknowledgmentEmail(data: { name: string; topic: string; message: string }): string {
  const name = data.name || "Neighbour";
  const body = `
    <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: ${BRAND.forest};">
      Hi ${name},
    </h1>
    <p style="margin: 0 0 18px 0; color: ${BRAND.muted}; font-size: 16px;">
      Thank you for getting in touch with the Hello Linden team regarding <strong>"${data.topic || "General Enquiry"}"</strong>.
    </p>

    <div style="background-color: ${BRAND.bg}; border: 1px solid rgba(14,15,12,0.1); border-radius: 8px; padding: 16px 20px; margin: 20px 0; font-style: italic; color: ${BRAND.muted}; font-size: 14px;">
      &ldquo;${data.message || "No message content provided."}&rdquo;
    </div>

    <p style="margin: 0 0 20px 0; color: ${BRAND.muted}; font-size: 15px;">
      A member of our local team will review your message and get back to you within 1 to 2 business days.
    </p>
  `;
  return emailWrapper(body);
}

/**
 * 4. Partner & Civic Enquiry Acknowledgment
 */
export function renderPartnerAcknowledgmentEmail(data: { contactName: string; organisation: string; inquiryType: string }): string {
  const name = data.contactName || "Partner";
  const body = `
    <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: ${BRAND.forest};">
      Hello ${name},
    </h1>
    <p style="margin: 0 0 18px 0; color: ${BRAND.muted}; font-size: 16px;">
      Thank you for reaching out on behalf of <strong>"${data.organisation || "your organisation"}"</strong>.
    </p>

    <p style="margin: 0 0 20px 0; color: ${BRAND.muted}; font-size: 15px;">
      We are excited about opportunities to collaborate with schools, community associations, local leaders, and civic groups to support suburb initiatives across Linden.
    </p>

    <div style="background-color: ${BRAND.mint}; border-radius: 8px; padding: 16px 20px; margin: 20px 0; color: ${BRAND.forest}; font-size: 14px;">
      <strong>Inquiry Type:</strong> ${data.inquiryType || "Community Partnership"}
    </div>

    <p style="margin: 0 0 20px 0; color: ${BRAND.muted}; font-size: 15px;">
      Our community partnership team will review your details and follow up with you directly.
    </p>
  `;
  return emailWrapper(body);
}

/**
 * 5. Internal Admin Notification Alert (Team Lead Alert)
 */
export function renderAdminNotificationEmail(payload: RegistrationPayload): string {
  const firstName = payload.contact?.firstName?.trim();
  const lastName = payload.contact?.lastName?.trim();
  const fullName = payload.contact?.fullName?.trim();
  const fullContactName = [firstName, lastName].filter(Boolean).join(" ") || fullName || "Not specified";
  const email = payload.contact?.email || "Unknown";

  const roleLabels = (payload.roles || []).map((r) => r.replace("_", " ")).join(", ");

  const body = `
    <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 700; color: ${BRAND.forest}; border-bottom: 2px solid ${BRAND.lime}; padding-bottom: 8px;">
      🔔 New Website Lead Received
    </h2>
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 12px; font-size: 15px;">
      <tr>
        <td style="padding: 6px 0; font-weight: bold; width: 140px; color: ${BRAND.forest};">Name:</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};">${fullContactName}</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Email:</td>
        <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: ${BRAND.forest}; font-weight: 600;">${email}</a></td>
      </tr>
      ${payload.contact?.mobile ? `
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Mobile:</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};">${payload.contact.mobile}</td>
      </tr>` : ""}
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Role(s):</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};"><span style="background-color: ${BRAND.mint}; padding: 3px 8px; border-radius: 4px; font-weight: 600;">${roleLabels}</span></td>
      </tr>
      ${payload.suburb ? `
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Suburb:</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};">${payload.suburb}</td>
      </tr>` : ""}
      ${payload.business?.name ? `
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Business Name:</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};">${payload.business.name}</td>
      </tr>` : ""}
      ${payload.business?.address ? `
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Business Address:</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};">${payload.business.address}</td>
      </tr>` : ""}
      ${payload.business?.wantsWindowSticker ? `
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Window Sticker:</td>
        <td style="padding: 6px 0; color: ${BRAND.forest}; font-weight: bold;">Requested ✓</td>
      </tr>` : ""}
      ${payload.partner?.organisation ? `
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Organisation:</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};">${payload.partner.organisation} (${payload.partner.inquiryType})</td>
      </tr>` : ""}
      ${payload.enquiry?.message ? `
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest}; vertical-align: top;">Message:</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx}; font-style: italic;">${payload.enquiry.message}</td>
      </tr>` : ""}
    </table>
    <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid rgba(14,15,12,0.1); font-size: 12px; color: ${BRAND.muted};">
      Timestamp: ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}
    </div>
  `;
  return emailWrapper(body);
}
