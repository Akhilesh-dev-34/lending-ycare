import ContentPage from '../components/LegalPage';

export default function PrivacyPolicy() {
  return (
    <ContentPage title="Privacy Policy" lastUpdated="25/06/2026">
      <p>
        YCare (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information.
      </p>

      <section>
        <h2>Information We Collect</h2>
        <p>When you join the YCare waitlist or create an account, we may collect:</p>
        <ul>
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Professional information (for nursing professionals)</li>
          <li>Any information you voluntarily provide</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide access to YCare services</li>
          <li>Communicate updates and announcements</li>
          <li>Improve our platform</li>
          <li>Respond to inquiries and support requests</li>
          <li>Verify professional credentials where applicable</li>
        </ul>
      </section>

      <section>
        <h2>Information Sharing</h2>
        <p>We do not sell your personal information.</p>
        <p>
          We may share information with trusted service providers who help us operate the platform or when required by law.
        </p>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>We take reasonable measures to protect your information from unauthorized access, disclosure, or misuse.</p>
      </section>

      <section>
        <h2>Your Rights</h2>
        <p>You may request access, correction, or deletion of your personal information by contacting us.</p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. Updated versions will be posted on this page.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          For privacy-related questions, contact:{' '}
          <a href="mailto:support@yachii.com">support@yachii.com</a>
        </p>
      </section>
    </ContentPage>
  );
}
