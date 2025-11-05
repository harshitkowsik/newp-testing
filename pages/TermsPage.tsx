import React, { useEffect } from 'react';

const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = "Terms and Conditions | Dr. Ashutosh Mishra";
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12" aria-labelledby="page-heading-terms">
          <h1 id="page-heading-terms" className="text-4xl font-extrabold font-heading text-primary">Terms and Conditions</h1>
          <p className="mt-2 text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <article className="prose prose-lg max-w-none text-gray-700">
          <p>
            Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the website of Dr. Ashutosh Mishra (the "Service") operated by us. Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who wish to access or use the Service.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you do not have permission to access the Service.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            The Service and its original content, features, and functionality are and will remain the exclusive property of Dr. Ashutosh Mishra. The content, including text, graphics, logos, and images, is protected by copyright and other laws. Our trademarks may not be used in connection with any product or service without the prior written consent of Dr. Ashutosh Mishra.
          </p>

          <h2>3. Appointment Booking</h2>
          <p>
            Our website provides a form to request an appointment. Submitting this form does not confirm an appointment. It is a request for a consultation. We will contact you using the information provided to confirm the date and time. We reserve the right to decline or reschedule any appointment request at our discretion. You agree to provide accurate and current information when using the booking form.
          </p>

          <h2>4. User Conduct</h2>
          <p>
            You agree not to use the Service for any unlawful purpose or any purpose prohibited under this clause. You agree not to use the Service in any way that could damage the Service, the reputation of Dr. Ashutosh Mishra, or the general business.
          </p>

          <h2>5. Links To Other Web Sites</h2>
          <p>
            Our Service may contain links to third-party web sites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
          </p>

          <h2>6. Disclaimer of Warranties; Limitation of Liability</h2>
          <p>
            The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information. Any reliance you place on such information is therefore strictly at your own risk.
          </p>
          <p>
            In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>

          <h2>7. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>

          <h2>8. Changes</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide notice of any changes by posting the new Terms on this page.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at <a href="mailto:write2me@dramishra.in" className="text-primary hover:underline">write2me@dramishra.in</a>.
          </p>
        </article>
      </div>
    </div>
  );
};

export default TermsPage;