import Header from "@/components/Header";
import Footer from "@/components/footer/footer";
import "./privacy.style.css";

const PrivacyPage = () => {
  return (
    <>
      <Header />
      <section className="container privacy-page">
        <h1>Privacy Policy</h1>
        At Brushed, we are committed to protecting your privacy and ensuring the
        security of your personal information. This Privacy Policy outlines how
        we collect, use, disclose, and protect the information you provide to
        us.
        <h3>1. Information We Collect:</h3>
        <p>
          We may collect personal information from you when you use our website,
          mobile app, or contact our customer service team. This information may
          include your name, contact details, address, payment information, and
          any other information you voluntarily provide to us.
        </p>
        <h3>2. Use of Information:</h3>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ul>
          <li>To provide and maintain our services</li>
          <li>To process bookings and appointments</li>
          <li>
            To communicate with you regarding your appointments, inquiries, or
            feedback
          </li>
          <li>To personalize your experience and improve our services</li>
          <li>To comply with legal and regulatory requirements</li>
        </ul>
        <h3>3. Disclosure of Information:</h3>
        <p>
          We may share your personal information with third-party service
          providers who assist us in delivering our services, processing
          payments, or managing our business operations. We do not sell or rent
          your personal information to third parties for marketing purposes.
        </p>
        <h3>4. Data Security:</h3>
        <p>
          We take appropriate measures to safeguard your personal information
          and protect it from unauthorized access, disclosure, alteration, or
          destruction. We use industry-standard security technologies and
          procedures to ensure the security of your data.
        </p>
        <h3>5. Cookies:</h3>
        <p>
          We may use cookies and similar tracking technologies to enhance your
          browsing experience, analyze website traffic, and personalize content.
          You have the option to accept or decline cookies through your browser
          settings.
        </p>
        <h3>6. Third-Party Links:</h3>
        <p>
          Our website or mobile app may contain links to third-party websites or
          services. We are not responsible for the privacy practices or content
          of these third-party sites. We encourage you to review the privacy
          policies of any third-party sites you visit.
        </p>
        <h3>7. Children's Privacy:</h3>
        <p>
          Our services are not intended for individuals under the age of 18. We
          do not knowingly collect personal information from children. If you
          believe that we have inadvertently collected personal information from
          a child, please contact us immediately.
        </p>
        <h3>8. Changes to Privacy Policy:</h3>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time without prior notice. Any changes to this policy will be
          effective immediately upon posting on our website or mobile app. It is
          your responsibility to review this Privacy Policy periodically for any
          changes.
        </p>
        <h3>9. Contact Us:</h3>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at{" "}
          <a href="mailto:hello@brushed.ae">hello@brushed.ae</a>
        </p>
        Thank you for trusting Brushed with your personal information. Your
        privacy is important to us.
      </section>

      <Footer />
    </>
  );
};

export default PrivacyPage;
