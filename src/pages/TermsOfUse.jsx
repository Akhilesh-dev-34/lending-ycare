import ContentPage from '../components/LegalPage';

export default function TermsOfUse() {
  return (
    <ContentPage title="Terms of Use" lastUpdated="25/06/2026">
      <p>By accessing or using YCare, you agree to these Terms of Use.</p>

      <section>
        <h2>Platform Purpose</h2>
        <p>YCare is a platform that helps connect nursing professionals, families, and healthcare organizations.</p>
        <p>YCare does not provide medical, nursing, or healthcare services directly.</p>
      </section>

      <section>
        <h2>User Responsibilities</h2>
        <p>Users agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Use the platform lawfully</li>
          <li>Respect other users</li>
          <li>Maintain the confidentiality of account credentials</li>
        </ul>
      </section>

      <section>
        <h2>Professional Information</h2>
        <p>
          Nursing professionals are responsible for ensuring that qualifications, certifications, licenses, and experience
          information are accurate and current.
        </p>
      </section>

      <section>
        <h2>Platform Fees</h2>
        <p>YCare may charge platform fees for certain services. Any applicable fees will be disclosed before use.</p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          YCare facilitates connections between users and does not guarantee outcomes, employment, engagements, or
          healthcare results.
        </p>
      </section>

      <section>
        <h2>Account Suspension</h2>
        <p>YCare reserves the right to suspend or terminate accounts that violate these terms.</p>
      </section>

      <section>
        <h2>Changes</h2>
        <p>We may modify these Terms at any time. Continued use of the platform constitutes acceptance of the updated Terms.</p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          <a href="mailto:support@yachii.com">support@yachii.com</a>
        </p>
      </section>
    </ContentPage>
  );
}
