import React from "react";
import { LegalLayout } from "@/components/legal/LegalLayout";
import { type TocItem } from "@/components/ui/toc";

export const metadata = {
  title: "Privacy Policy | Hello Hyperlocal",
  description: "Official Privacy Policy for Hello Hyperlocal (Pty) Ltd in compliance with POPIA and ECTA.",
};

const TOC_ITEMS: TocItem[] = [
  { id: "preamble", text: "Notice & Application", level: 2 },
  { id: "welcome", text: "1. Welcome", level: 2 },
  { id: "general", text: "2. General", level: 2 },
  { id: "protection-of-personal-info", text: "3. Protection of Personal Information", level: 2 },
  { id: "privacy-statement", text: "4. Privacy Statement", level: 2 },
  { id: "technical-info", text: "5. Collection of Technical Information", level: 2 },
  { id: "log-files", text: "6. Log Files", level: 2 },
  { id: "cookies", text: "7. Cookies", level: 2 },
  { id: "external-links", text: "8. External Links", level: 2 },
  { id: "security", text: "9. Security", level: 2 },
  { id: "rights-preferences", text: "10. Your Rights and Preferences", level: 2 },
  { id: "zero-tolerance", text: "11. Zero Tolerance", level: 2 },
  { id: "contact-us", text: "12. Contact Us", level: 2 },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="Hello Hyperlocal (Pty) Ltd - For publication on Website and Application."
      lastUpdated="October 13, 2026"
      tocItems={TOC_ITEMS}
    >
      {/* Notice / Preamble */}
      <section id="preamble" className="scroll-mt-24 space-y-3">
        <div className="rounded-card border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] p-4 text-[13.5px] leading-relaxed text-[#0e0f0c] dark:text-[#FCFAF7] space-y-2">
          <p className="font-bold text-[13px] uppercase tracking-wide text-[#1C472A] dark:text-[#7ED957] m-0">
            For Publication on Website and Application
          </p>
          <p className="m-0 text-[13px] leading-relaxed font-semibold uppercase text-[#454745] dark:text-[#D1D5DB]">
            Please read this policy carefully before browsing this website or using this application or any of the services. Your continued use of this website or application indicates that you have both read and agreed to this Privacy Policy. Please do not continue to use this website, application or any related services if you do not accept this policy.
          </p>
        </div>
      </section>

      {/* Section 1 */}
      <section id="welcome" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          1. Welcome
        </h2>
        <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
          <li><strong>1.1.</strong> Welcome to our Website and Application and thank you for reading this Privacy Policy.</li>
          <li><strong>1.2.</strong> We are Hello Hyperlocal (Pty) Ltd with Registration No. 2026/524071/07 (the &ldquo;Company&rdquo;).</li>
          <li><strong>1.3.</strong> This Privacy Policy applies to all the web pages and portals related to our website and application (&ldquo;Privacy Policy&rdquo;) and should be read together with our general Terms and Conditions.</li>
          <li><strong>1.4.</strong> Please take note that access to and use of our website and application (&ldquo;the/our/this Website/Application&rdquo;) is subject to our Terms and Conditions and this Privacy Policy. Essentially, this Privacy Policy aims to inform you of our business strategy regarding privacy and data security.</li>
          <li><strong>1.5.</strong> By accessing our Website/Application and using our online facilities you confirm that you have read, understand and agree to be bound by this Privacy Policy (read with our Terms and Conditions), as may be updated by us from time to time. If you do not agree to our Privacy Policy, please do not access or use our Website further.</li>
          <li><strong>1.6.</strong> Access to our Website/Application is governed exclusively by South Africa law. Although we acknowledge access may be gained by non-South African residents and entities, such access shall be construed as a waiver of all foreign rights and acceptance of South African jurisdiction and legislation.</li>
        </ol>
      </section>

      {/* Section 2 */}
      <section id="general" className="scroll-mt-24 space-y-4">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          2. General
        </h2>
        
        <div className="space-y-2">
          <h3 className="text-[16px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
            2.1. Validity and binding nature of this Privacy Policy
          </h3>
          <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
            <li><strong>2.1.1.</strong> This Privacy Policy governs your relationship with us and constitutes a valid and binding agreement between you, the user, and the Company.</li>
            <li><strong>2.1.2.</strong> The Electronic Communications and Transactions Act 25 of 2002 (&ldquo;ECTA&rdquo;) provides for valid and binding contracts to be concluded in electronic format and to be established over the internet. Contracts concluded electronically are thus the functional equivalent of contracts concluded on paper.</li>
          </ol>
        </div>

        <div className="space-y-2">
          <h3 className="text-[16px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
            2.2. Amended or updated terms
          </h3>
          <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
            <li><strong>2.2.1.</strong> We reserve the right, and may in our sole discretion choose to amend our Privacy Policy at any time and in any manner that we deem appropriate. This includes the right to change, modify, add or remove portions or the whole of our Privacy Policy from time to time.</li>
            <li><strong>2.2.2.</strong> It is your responsibility to check our Website/Application regularly to take notice of any changes we may have made to this Privacy Policy and ensure that you remain aware of and agree with the provisions of our Privacy Policy. Any amendments hereto shall be effective immediately as of the posting thereof and shall automatically bind you without further notice. Your continued use of our Website/Application following the posting of any amendments to this Privacy Policy shall signify your acceptance of such amendments and your agreement to be bound thereby.</li>
          </ol>
        </div>

        <div className="space-y-2">
          <h3 className="text-[16px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
            2.3. Legal Age and Capacity
          </h3>
          <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
            <li><strong>2.3.1.</strong> We do not accept any users, or representatives of users, under 18 (EIGHTEEN) years of age or who otherwise do not have the relevant capacity to be bound by this Privacy Policy.</li>
            <li><strong>2.3.2.</strong> No one may access our Website/Application, use our facilities and/or accept this Privacy Policy if they lack the necessary legal capacity to enter into a valid and binding contract with the Company. If they are so lacking and continue to use our Website/Application, such use is at own risk and the Company accepts no responsibility for such use.</li>
            <li><strong>2.3.3.</strong> By accessing our Website/Application and/or using our online facilities, you warrant that you have attained majority status (18 years of age or older), are emancipated or have your parents/legal guardian&apos;s consent to be bound by this Privacy Policy. You further warrant that your legal capacity is not diminished due to mental incapacity.</li>
          </ol>
        </div>
      </section>

      {/* Section 3 */}
      <section id="protection-of-personal-info" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          3. Protection of Personal Information
        </h2>
        <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
          <li><strong>3.1.</strong> We respect your right to privacy, as contained in section 14 of the Constitution of the Republic of South Africa 108 of 1996, and which forms the cornerstone of the Protection of Personal Information Act 4 of 2013 (&ldquo;POPIA&rdquo;).</li>
          <li><strong>3.2.</strong> In order for us to assist you, it may be necessary for you to share some of your personal information with us from time to time.</li>
          <li><strong>3.3.</strong> We will take all reasonable steps to protect the personal information of users on our Website/Application. For the purposes of this section, &ldquo;Personal Information&rdquo; will be understood in accordance with the definition provided in POPIA. Any such Personal Information that you may share with us, and the reasons why such information is required, will depend on the nature and scope of your relationship with us.</li>
          <li><strong>3.4.</strong> We subscribe to the principles for electronically collecting Personal Information outlined in POPIA, and the further legislation referred to therein, and are committed to maintaining the integrity and confidentiality of Personal Information in our possession.</li>
          <li><strong>3.5.</strong> We use suppliers and service providers who we trust to provide services to us and sometimes that may involve sharing your information with them. They operate under strict requirements aimed at keeping your Personal Information secure and confidential and they will only use such information for the purpose for which we have sent it to them.</li>
          <li><strong>3.6.</strong> While we may transfer and outsource your Personal Information for operational reasons and to execute our services, all Personal Information submitted or provided by you will be treated confidentially and we will not sell, rent, lease or disclose your Personal Information to unauthorised third parties.</li>
          <li><strong>3.7.</strong> In the event that we are or become legally obliged to do so, we may of course also have to provide your Personal information to appropriate authorities or regulatory bodies.</li>
        </ol>
      </section>

      {/* Section 4 */}
      <section id="privacy-statement" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          4. Privacy Statement
        </h2>
        <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
          <li><strong>4.1.</strong> Your information will not be used for any other purpose than that which is stated in this Privacy Policy, as well as our Terms and Conditions. Other than in terms of clauses 3.5, 3.6 and 3.7 above, none of your information held by us will be sold or made available to any third parties not stated herein without your prior written consent, and which shall be in line with the provisions related to the protection of Personal Information as set out in POPIA.</li>
          <li>
            <strong>4.2.</strong> By agreeing to the terms and conditions contained in this Privacy Policy, you consent to the use of your Personal Information in relation to:
            <ul className="list-none ps-5 pt-2 space-y-1.5 text-[14px]">
              <li><strong>4.2.1.</strong> The provision and performance of any services obtained from us.</li>
              <li><strong>4.2.2.</strong> Informing you of changes made to our services offered.</li>
              <li><strong>4.2.3.</strong> The provision of marketing related services to you by us.</li>
              <li><strong>4.2.4.</strong> Responding to any queries or requests you may have.</li>
              <li><strong>4.2.5.</strong> Developing a more direct and substantial relationship with users for the purposes described in this clause.</li>
              <li><strong>4.2.6.</strong> Understanding general user trends and patterns so that we can develop and support existing and ongoing marketing strategies.</li>
              <li><strong>4.2.7.</strong> For security, administrative and/or legal purposes.</li>
              <li><strong>4.2.8.</strong> The creation and development of market data profiles which may provide insight into market norms, practices and trends to help us improve our offering to you. Such information will be compiled and retained in aggregated form but shall not be used in any manner that may comprise the identity of a user.</li>
              <li><strong>4.2.9.</strong> For any other purpose relating to providing products and services, and when we have a legal duty to use or disclose your information.</li>
            </ul>
          </li>
          <li><strong>4.3.</strong> Other than in terms of clauses 3.5, 3.6 and 3.7 above, the Personal Information that we collect from our users will only be accessed by our employees, representatives, service providers and consultants on a need-to-know basis, and subject to reasonable confidentiality obligations binding such persons.</li>
          <li><strong>4.4.</strong> We store your Personal Information directly, or alternatively, store your Personal Information on, and transfer your Personal Information to, a central database. If the location of the central database is located in a country that does not have substantially similar laws which provide for the protection of Personal Information, we will take the necessary steps to ensure that your Personal Information is adequately protected in that jurisdiction.</li>
          <li><strong>4.5.</strong> Your information will not be stored for longer than is necessary for the purposes described in this Privacy Policy or as required by applicable law.</li>
        </ol>
      </section>

      {/* Section 5 */}
      <section id="technical-info" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          5. Collection of Technical Information
        </h2>
        <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
          <li><strong>5.1.</strong> Technical information refers to all information that does not by itself identify a specific individual user.</li>
          <li><strong>5.2.</strong> As you navigate our Website/Application, certain technical information may be passively collected by our web server through the use of &apos;cookies&apos; and/or &apos;server logs&apos; and by proceeding to use the Website/Application you accordingly acknowledge and agree to this.</li>
        </ol>
      </section>

      {/* Section 6 */}
      <section id="log-files" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          6. Log Files
        </h2>
        <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
          <li><strong>6.1.</strong> When you visit our Website/Application, even if you do not request any services, we may collect information, such as your IP (Internet Protocol) address through which you access the Internet, the name of your ISP (Internet Service Provider), your browser, the website from which you visit us, the pages on our Website/Application that you visit and in what sequence, the date and length of your access to our Website/Application, and other information concerning your computer&apos;s operating system, language settings, and broad demographic information. This information is used to help improve our Website/Application, analyse trends, and to administer/run our Website/Application effectively.</li>
          <li><strong>6.2.</strong> This information is aggregated as anonymous data and does not identify you specifically. However, you acknowledge that this data may be able to be used to identify you if it is aggregated with other Personal Information that you supply to us. This information is not shared with third parties and is used only by us on a need-to-know basis. Any individually identifiable information related to this data will never be used in any way different to that stated above, without your explicit permission.</li>
        </ol>
      </section>

      {/* Section 7 */}
      <section id="cookies" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          7. Cookies
        </h2>
        <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
          <li><strong>7.1.</strong> The Website/Application may use cookies and tracking technology depending on the features offered and as may be necessary from time to time.</li>
          <li><strong>7.2.</strong> A &lsquo;cookie&rsquo; in this context refers to a file that is stored on your hard drive and which contains information about the preferences that you may have expressed during previous visits to the Website/Application.</li>
          <li><strong>7.3.</strong> Cookies and tracking technology are useful for gathering information such as browser types, operating systems, tracking the number of visitors and/or users on the Website/Application, and understanding how visitors and/or users use the Website/Application.</li>
          <li><strong>7.4.</strong> Cookies help us personalise your online experience. Most web browsers automatically accept cookies, but you should be able to refuse cookies, or selectively accept certain cookies by adjusting the preferences in your browser settings.</li>
          <li><strong>7.5.</strong> Usage of a cookie is in no way linked to any Personal Information while you are browsing the Website/Application and in general, Personal Information cannot be collected via cookies and other tracking technology. However, if you have previously provided or exposed personally identifiable information, cookies may be tied to such information.</li>
        </ol>
      </section>

      {/* Section 8 */}
      <section id="external-links" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          8. External Links
        </h2>
        <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
          <li><strong>8.1.</strong> The Website/Application, including but not limited to the services made available via the Website/Application (if any), may contain links to other third-party websites (including without limitation, social media platforms, payment gateways, appointment scheduling and/or live chat platforms) operated by parties other than us (&ldquo;Third-Party Websites&rdquo;), and over which we have no control. You are advised to use caution and discretion when searching or accessing such Third-Party Websites or clicking on third-party website links.</li>
          <li><strong>8.2.</strong> Kindly take note that if you select a link to any Third-Party Website, you may be subject to such Third-Party Website&rsquo;s terms and conditions and/or other policies, which are not under our control or responsibility.</li>
          <li><strong>8.3.</strong> Users should evaluate the security and trustworthiness of any Third-Party Website before disclosing any personal Information to them. We do not accept any responsibility for any loss or damage in whatever manner, howsoever caused, resulting from your disclosure to third parties of Personal Information.</li>
          <li><strong>8.4.</strong> Kindly be aware that Hello Hyperlocal are not responsible for the privacy practices or content of Third-Party Websites or Applications in any manner whatsoever.</li>
        </ol>
      </section>

      {/* Section 9 */}
      <section id="security" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          9. Security
        </h2>
        <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
          <li><strong>9.1.</strong> We take your privacy and the security of your Personal Information seriously.</li>
          <li>
            <strong>9.2.</strong> For this purpose, we:
            <ul className="list-none ps-5 pt-2 space-y-1.5 text-[14px]">
              <li><strong>9.2.1.</strong> have implemented reasonable and up-to-date security safeguards;</li>
              <li><strong>9.2.2.</strong> have in place reasonable technical (electronic) and organisational (non-electronic) security measures to protect your Personal Information against accidental or intentional manipulation, loss, misuse, destruction or against unauthorised disclosure or access to the information we process; and</li>
              <li><strong>9.2.3.</strong> regularly monitor our systems for possible vulnerabilities and attacks.</li>
            </ul>
          </li>
          <li><strong>9.3.</strong> However, no data transmission over the internet can be guaranteed to be one hundred percent secure at all times. Thus, although we use reasonably endeavours to ensure the integrity, security and confidentiality of Personal Information submitted and/or obtained from you, we cannot be held responsible for security breaches occurring in relation to the personal technology devices of users, such as, but not limited to, personal computers, tablets and mobile phones due to the lack of adequate virus protection software and/or spyware.</li>
          <li><strong>9.4.</strong> In addition to the above, subject to the provisions of POPIA and related legislation, the Company will not be held liable under any circumstances if Personal Information shared by yourself, in the manner as contemplated herein but which takes place at your own risk, is compromised, disseminated or otherwise disclosed through conduct outside our reasonable control, for example by means of hacking, infection by viruses, trojan horses or any other computer programming routines or software that are intended to damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or Personal Information.</li>
          <li><strong>9.5.</strong> While we cannot prevent all security threats, or ensure and/or warrant the security of any Personal Information you provide us, we will continue to maintain and improve these security measures over time in line with legal and technological developments and will let you know of any breaches which affect your Personal Information.</li>
        </ol>
      </section>

      {/* Section 10 */}
      <section id="rights-preferences" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          10. Your Rights and Preferences
        </h2>
        <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
          <li><strong>10.1.</strong> You have the right to know what Personal Information we have about you, to correct it and to opt-out of any direct marketing.</li>
          <li>
            <strong>10.2.</strong> In addition to the above, you have the right to:
            <ul className="list-none ps-5 pt-2 space-y-1.5 text-[14px]">
              <li><strong>10.2.1.</strong> ask what Personal Information we hold about you;</li>
              <li><strong>10.2.2.</strong> ask what information was sent to our suppliers, service providers or any other third party;</li>
              <li><strong>10.2.3.</strong> ask us to update, correct or delete any out-of-date or incorrect Personal Information we hold about you;</li>
              <li><strong>10.2.4.</strong> unsubscribe from any direct marketing communications we may send you; and/or</li>
              <li><strong>10.2.5.</strong> object to the processing of your Personal Information.</li>
            </ul>
          </li>
          <li><strong>10.3.</strong> Please take note that it can take us up to 21 days to respond to your request in terms of this clause.</li>
          <li><strong>10.4.</strong> If you want us to delete all Personal Information we have about you, you will probably have to terminate all agreements you have with us. We cannot maintain our relationship with you without having some of your Personal Information.</li>
          <li><strong>10.5.</strong> We can refuse to delete your information if we are required by law to retain it or if we need it to protect our rights.</li>
        </ol>
      </section>

      {/* Section 11 */}
      <section id="zero-tolerance" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          11. Zero Tolerance
        </h2>
        <ol className="list-none p-0 space-y-2 m-0 text-[14.5px]">
          <li><strong>11.1.</strong> Hello Hyperlocal has a zero-tolerance policy on demeaning, belligerent, offending, aggressive and predatory behaviour of any kind. This includes any promoting or advocating violence, hate speech, bullying, belittling, human trafficking or other non-consensual sexual acts, or any other inappropriate content, acts or dealings.</li>
          <li><strong>11.2.</strong> Any content that promotes, advocates or condones racism, bigotry, hatred, violence against individuals or groups, or any other form of hate speech based on factors including, but not limited to, race, ethnicity, religious affiliation, disability, gender, age, nationality, sexual orientation, gender identity or political affiliation is not allowed.</li>
          <li><strong>11.3.</strong> Hello Hyperlocal does not tolerate violent, demeaning, graphic or gory content on Hello Hyperlocal, nor do we allow any actions or content that advocate or threaten violence of any kind. Physical assault, coercion and any acts of violence are prohibited.</li>
          <li><strong>11.4.</strong> Any behaviour deemed inappropriate to our sole discretion, which include but is not limited to the above, will result in an account being blocked and the user banned immediately.</li>
        </ol>
      </section>

      {/* Section 12 */}
      <section id="contact-us" className="scroll-mt-24 space-y-3">
        <h2 className="text-[18px] sm:text-[20px] font-bold text-brand-onyx dark:text-[#FCFAF7] tracking-tight m-0">
          12. Contact Us
        </h2>
        <p className="m-0 text-[14.5px]">
          We welcome your comments and questions regarding this Privacy Policy. Kindly direct any comments and questions to us via email to our official company email as provided on our Website/Application.
        </p>
        <div className="rounded-card border border-black/10 dark:border-white/10 p-4 text-[13.5px] leading-relaxed space-y-1">
          <p className="font-bold text-[#0e0f0c] dark:text-[#FCFAF7] m-0">Hello Hyperlocal (Pty) Ltd</p>
          <p className="text-[#454745] dark:text-[#99A893] m-0">Registration No. 2026/524071/07</p>
          <p className="text-[#454745] dark:text-[#99A893] m-0">Johannesburg, South Africa</p>
          <p className="text-[#454745] dark:text-[#99A893] m-0">
            Email: <a href="mailto:privacy@hellohyperlocal.co.za" className="text-[#1C472A] dark:text-[#7ED957] font-semibold underline">privacy@hellohyperlocal.co.za</a>
          </p>
        </div>
        <p className="text-[12px] text-[#868685] dark:text-[#99A893] pt-4 border-t border-black/5 dark:border-white/5 m-0">
          Privacy Policy, 2026 &bull; &copy; STEYN IP [M00005441_LC/CS/lm]
        </p>
      </section>
    </LegalLayout>
  );
}
