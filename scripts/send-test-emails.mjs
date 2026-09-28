import fs from "fs";
import { Resend } from "resend";

if (!process.env.RESEND_API_KEY && fs.existsSync(".env.local")) {
  const envContent = fs.readFileSync(".env.local", "utf8");
  for (const line of envContent.split("\n")) {
    const match = line.match(/^\s*RESEND_API_KEY\s*=\s*(.*)\s*$/);
    if (match) {
      process.env.RESEND_API_KEY = match[1].trim();
      break;
    }
  }
}

const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
  console.error("Error: RESEND_API_KEY environment variable is missing.");
  process.exit(1);
}
const TARGET_EMAIL = "hellohyperlocal.dev@gmail.com";
const FROM_EMAIL = "Hello Linden <onboarding@resend.dev>";

const resend = new Resend(RESEND_API_KEY);

const BRAND = {
  forest: "#1C472A",
  lime: "#7ED957",
  mint: "#e2f6d5",
  onyx: "#0e0f0c",
  muted: "#454745",
  panel: "#F5F5F5",
  bg: "#F9FAF8",
};

function emailWrapper(contentHtml) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hello Linden</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
</head>
<body style="margin: 0; padding: 0; background-color: ${BRAND.bg}; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
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
                    <span style="display: inline-block; font-size: 22px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px; font-family: 'Inter', sans-serif;">
                      Hello Linden
                    </span>
                    <span style="display: inline-block; margin-left: 8px; font-size: 11px; font-weight: 600; text-transform: uppercase; background-color: ${BRAND.lime}; color: ${BRAND.onyx}; padding: 3px 8px; border-radius: 12px; letter-spacing: 0.5px; font-family: 'Inter', sans-serif;">
                      Linden, JHB
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Main Content Body -->
          <tr>
            <td style="padding: 36px 32px; color: ${BRAND.onyx}; font-size: 16px; line-height: 1.6; font-family: 'Inter', sans-serif;">
              ${contentHtml}
            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="background-color: ${BRAND.panel}; padding: 24px 32px; border-top: 1px solid rgba(14,15,12,0.06); text-align: left; font-family: 'Inter', sans-serif;">
              <!-- Social Media Icons -->
              <table role="presentation" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 16px;">
                <tr>
                  <td style="padding-right: 12px; vertical-align: middle;">
                    <a href="https://www.instagram.com/hellohyperlocal" target="_blank" rel="noopener noreferrer" style="display: inline-block; text-decoration: none;">
                      <img src="https://cdn.simpleicons.org/instagram/1C472A" alt="Instagram" width="20" height="20" style="display: block; border: 0;" />
                    </a>
                  </td>
                  <td style="padding-right: 12px; vertical-align: middle;">
                    <a href="https://www.facebook.com/hellohyperlocal" target="_blank" rel="noopener noreferrer" style="display: inline-block; text-decoration: none;">
                      <img src="https://cdn.simpleicons.org/facebook/1C472A" alt="Facebook" width="20" height="20" style="display: block; border: 0;" />
                    </a>
                  </td>
                  <td style="vertical-align: middle;">
                    <span style="font-size: 12px; font-weight: 600; color: ${BRAND.forest}; font-family: 'Inter', sans-serif;">Follow Hello Hyperlocal</span>
                  </td>
                </tr>
              </table>

              <p style="margin: 0 0 6px 0; font-size: 14px; font-weight: 700; color: ${BRAND.forest}; font-family: 'Inter', sans-serif;">
                Love Where You Live.
              </p>
              <p style="margin: 0 0 12px 0; font-size: 13px; color: ${BRAND.muted}; font-family: 'Inter', sans-serif;">
                Hello Linden is part of the Hello Hyperlocal network. Connecting neighbours, supporting local businesses, and celebrating community.
              </p>
              <p style="margin: 0 0 12px 0; font-size: 11px; color: #868685; line-height: 1.4; font-family: 'Inter', sans-serif;">
                Protected in terms of South Africa's POPIA Act. You received this email because you registered on hellohyperlocal.co.za.
              </p>
              <p style="margin: 0; font-size: 10px; color: #999998; line-height: 1.4; font-family: 'Inter', sans-serif;">
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

function renderResidentWelcomeEmail({ firstName }) {
  const name = firstName || "Neighbour";
  return emailWrapper(`
    <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: ${BRAND.forest}; font-family: 'Inter', sans-serif;">
      Welcome to the neighbourhood, ${name}!
    </h1>
    <p style="margin: 0 0 18px 0; color: ${BRAND.muted}; font-size: 16px; line-height: 1.6; font-family: 'Inter', sans-serif;">
      Thank you for joining as a <strong>Founding Neighbour</strong> for Hello Linden. You are officially registered as one of our first 1,000 founding residents ahead of our 2026 launch.
    </p>

    <div style="background-color: ${BRAND.mint}; border-radius: 12px; padding: 20px 24px; margin: 24px 0; font-family: 'Inter', sans-serif;">
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

    <p style="margin: 0; color: ${BRAND.muted}; font-size: 15px; font-family: 'Inter', sans-serif;">
      We will reach out with progress updates and early preview invites as launch approaches.
    </p>
  `);
}

function renderBusinessConfirmationEmail({ contactName, businessName, wantsWindowSticker }) {
  const name = contactName || "Local Merchant";
  const business = businessName ? `"${businessName}"` : "your local business";
  return emailWrapper(`
    <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: ${BRAND.forest}; font-family: 'Inter', sans-serif;">
      Welcome aboard, ${name}!
    </h1>
    <p style="margin: 0 0 18px 0; color: ${BRAND.muted}; font-size: 16px; font-family: 'Inter', sans-serif;">
      Thank you for registering <strong>${business}</strong> as a Founding Business with Hello Linden!
    </p>

    <p style="margin: 0 0 20px 0; color: ${BRAND.muted}; font-size: 15px; font-family: 'Inter', sans-serif;">
      We are building Hello Linden to give independent local spots direct, daily visibility to the people living right around your shop - without algorithm barriers or expensive ad fees.
    </p>

    <div style="background-color: ${BRAND.panel}; border-left: 4px solid ${BRAND.forest}; border-radius: 4px; padding: 18px 20px; margin: 24px 0; font-family: 'Inter', sans-serif;">
      <p style="margin: 0 0 10px 0; font-size: 15px; font-weight: 700; color: ${BRAND.forest};">
        What Happens Next?
      </p>
      <ul style="margin: 0; padding-left: 18px; color: ${BRAND.onyx}; font-size: 14px; line-height: 1.7;">
        <li><strong>Founding Business Status:</strong> Your registration is locked in to help shape Hello Linden before launch.</li>
        ${wantsWindowSticker ? `<li><strong>Founding Window Sticker:</strong> We have noted your request for an official Hello Linden window sticker!</li>` : ""}
        <li><strong>Priority Onboarding:</strong> Early access to set up your business profile, announce local deals, and test merchant tools.</li>
        <li><strong>Merchant Spotlight:</strong> Opportunities to feature in our early neighbourhood launch previews.</li>
      </ul>
    </div>

    <p style="margin: 0; color: ${BRAND.muted}; font-size: 15px; font-family: 'Inter', sans-serif;">
      Our merchant support team will reach out directly as we prepare launch materials for Linden.
    </p>
  `);
}

function renderContactAcknowledgmentEmail({ name, topic, message }) {
  return emailWrapper(`
    <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: ${BRAND.forest}; font-family: 'Inter', sans-serif;">
      Hi ${name || "Neighbour"},
    </h1>
    <p style="margin: 0 0 18px 0; color: ${BRAND.muted}; font-size: 16px; font-family: 'Inter', sans-serif;">
      Thank you for getting in touch with the Hello Linden team regarding <strong>"${topic || "General Enquiry"}"</strong>.
    </p>

    <div style="background-color: ${BRAND.bg}; border: 1px solid rgba(14,15,12,0.1); border-radius: 8px; padding: 16px 20px; margin: 20px 0; font-style: italic; color: ${BRAND.muted}; font-size: 14px; font-family: 'Inter', sans-serif;">
      "${message || "No message content provided."}"
    </div>

    <p style="margin: 0; color: ${BRAND.muted}; font-size: 15px; font-family: 'Inter', sans-serif;">
      A member of our local team will review your message and get back to you within 1 to 2 business days.
    </p>
  `);
}

function renderPartnerAcknowledgmentEmail({ contactName, organisation, inquiryType }) {
  return emailWrapper(`
    <h1 style="margin: 0 0 16px 0; font-size: 24px; font-weight: 700; color: ${BRAND.forest}; font-family: 'Inter', sans-serif;">
      Hello ${contactName || "Partner"},
    </h1>
    <p style="margin: 0 0 18px 0; color: ${BRAND.muted}; font-size: 16px; font-family: 'Inter', sans-serif;">
      Thank you for reaching out on behalf of <strong>"${organisation || "your organisation"}"</strong>.
    </p>

    <p style="margin: 0 0 20px 0; color: ${BRAND.muted}; font-size: 15px; font-family: 'Inter', sans-serif;">
      We are excited about opportunities to collaborate with schools, community associations, local leaders, and civic groups to support suburb initiatives across Linden.
    </p>

    <div style="background-color: ${BRAND.mint}; border-radius: 8px; padding: 16px 20px; margin: 20px 0; color: ${BRAND.forest}; font-size: 14px; font-family: 'Inter', sans-serif;">
      <strong>Inquiry Type:</strong> ${inquiryType || "Community Partnership"}
    </div>

    <p style="margin: 0; color: ${BRAND.muted}; font-size: 15px; font-family: 'Inter', sans-serif;">
      Our community partnership team will review your details and follow up with you directly.
    </p>
  `);
}

function renderAdminNotificationEmail() {
  return emailWrapper(`
    <h2 style="margin: 0 0 16px 0; font-size: 20px; font-weight: 700; color: ${BRAND.forest}; border-bottom: 2px solid ${BRAND.lime}; padding-bottom: 8px; font-family: 'Inter', sans-serif;">
      🔔 New Website Lead Received
    </h2>
    <table role="presentation" width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-top: 12px; font-size: 15px; font-family: 'Inter', sans-serif;">
      <tr>
        <td style="padding: 6px 0; font-weight: bold; width: 140px; color: ${BRAND.forest};">Name:</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};">David Miller</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Email:</td>
        <td style="padding: 6px 0;"><a href="mailto:david@lindencoffee.co.za" style="color: ${BRAND.forest}; font-weight: 600;">david@lindencoffee.co.za</a></td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Mobile:</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};">082 555 1234</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Role(s):</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};"><span style="background-color: ${BRAND.mint}; padding: 3px 8px; border-radius: 4px; font-weight: 600;">business, founding business</span></td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Suburb:</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};">Linden</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Business Name:</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};">Linden Coffee Roasters</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Business Address:</td>
        <td style="padding: 6px 0; color: ${BRAND.onyx};">4th Avenue, Linden, Johannesburg</td>
      </tr>
      <tr>
        <td style="padding: 6px 0; font-weight: bold; color: ${BRAND.forest};">Window Sticker:</td>
        <td style="padding: 6px 0; color: ${BRAND.forest}; font-weight: bold;">Requested ✓</td>
      </tr>
    </table>
    <div style="margin-top: 24px; padding-top: 12px; border-top: 1px solid rgba(14,15,12,0.1); font-size: 12px; color: ${BRAND.muted}; font-family: 'Inter', sans-serif;">
      Timestamp: ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}
    </div>
  `);
}

async function main() {
  console.log(`Sending 5 test email templates to ${TARGET_EMAIL}...`);

  const templates = [
    { subject: "[TEMPLATE 1/5] Welcome to Hello Linden (Founding Neighbour)", html: renderResidentWelcomeEmail({ firstName: "Sarah" }) },
    { subject: "[TEMPLATE 2/5] Hello Linden - Business Registration Received", html: renderBusinessConfirmationEmail({ contactName: "David Miller", businessName: "Linden Coffee Roasters", wantsWindowSticker: true }) },
    { subject: "[TEMPLATE 3/5] We received your message - Hello Linden", html: renderContactAcknowledgmentEmail({ name: "Jessica", topic: "Suburb Launch Event", message: "Hi Hello Linden team! I'm a local resident in 4th Avenue and wanted to know if there's a launch event scheduled for neighbours in Linden?" }) },
    { subject: "[TEMPLATE 4/5] Hello Linden Partnership Enquiry - Linden Primary School", html: renderPartnerAcknowledgmentEmail({ contactName: "Principal Naidoo", organisation: "Linden Primary School", inquiryType: "School & Community Announcements" }) },
    { subject: "[TEMPLATE 5/5] [Lead Alert] New Registration: David Miller (business)", html: renderAdminNotificationEmail() },
  ];

  for (const t of templates) {
    try {
      const res = await resend.emails.send({
        from: FROM_EMAIL,
        to: [TARGET_EMAIL],
        subject: t.subject,
        html: t.html,
      });
      if (res.error) {
        console.error(`❌ ${t.subject}:`, res.error);
      } else {
        console.log(`✅ ${t.subject} (ID: ${res.data?.id})`);
      }
    } catch (err) {
      console.error(`❌ ${t.subject}:`, err.message || err);
    }
  }
}

main().catch(console.error);
