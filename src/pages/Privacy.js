import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Privacy = () => {
  return (
    <div>
      <Navigation />
      <section id="privacy">
        <p>
          This website respects your privacy and are committed to protecting
          your personal information. This Privacy Policy explains how we
          collect, use, and disclose your personal information when you use our
          website.
          <h3>What information do we collect?</h3>
          We collect information from you when you use our website.
          <h3>How do we use your information? </h3>
          We don't use your information.
          <h3>How do we protect your information?</h3> For security reasons and
          to protect the transmission of confidential content, this website uses
          either an SSL encryption programme. You can recognise an encrypted
          connection by checking whether the address line of the browser
          switches from “http://” to “https://” and also by the appearance of
          the lock icon in the browser line. If the SSL encryption is activated,
          data you transmit to us cannot be read by third parties.
          <h3>Do we use cookies?</h3> We don't use cookies.
          <h3>Do we disclose any information to outside parties?</h3> We do not
          sell, trade, or otherwise transfer to outside parties your personally
          identifiable information. This does not include trusted third parties
          who assist us in operating our website, conducting our business, or
          servicing you, so long as those parties agree to keep this information
          confidential. We may also release your information when we believe
          release is appropriate to comply with the law, enforce our site
          policies, or protect ours or others' rights, property, or safety.
          <h3>Third-party links</h3>
          We use redirections to third-party services on our website. These
          third-party sites have separate and independent privacy policies. We,
          therefore, have no responsibility or liability for the content and
          activities of these linked sites. Nonetheless, we seek to protect the
          integrity of our site and welcome any feedback about these sites.{" "}
          <h3>Your consent</h3>
          By using our site, you consent to our website's Privacy Policy.
          <h3>Changes to our Privacy Policy</h3>
          If we decide to change our privacy policy, we will post those changes
          on this page and update the Privacy Policy modification date below.
          This policy was last modified on 23/02/2023
          <h3>Contacting us</h3>
          If there are any questions regarding this privacy policy, you may
          contact us at info@eileenbaum.de
        </p>
      </section>
      <Footer />
    </div>
  );
};

export default Privacy;
