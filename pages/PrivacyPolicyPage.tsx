import React, { useEffect } from 'react';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
      document.title = "Privacy Policy | Dr. Ashutosh Mishra - Supreme Court Advocate | Professor of Management & Law | Author | NLP Master Practitioner | Psychologist | PhD Guide | PMP | IIM Ahmedabad Alumnus";
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', " Dr. Ashutosh Mishra is a distinguished Supreme Court Advocate, Corporate Legal Strategist, and Professor of Management & Law with over two decades of leadership excellence in legal, academic, and corporate domains. An IIM Ahmedabad alumnus, he brings together the rare blend of legal acumen, managerial insight, and psychological depth that defines next-generation leadershipp. As a PhD Guide and academic mentor, Dr.Mishra has guided research scholars across India and Europe in Corporate Law, Organizational Behavior, and Strategic Management.He is also a Certified Project Management Professional(PMP) and an NLP Master Practitioner, applying behavioral science and neuro - linguistic techniques to leadership, negotiation, and conflict resolution. Beyond the courtroom, Dr.Mishra is an Author, Psychologist, and Motivational Speaker known for his transformative sessions on Human Resource Development, Corporate Ethics, and Emotional Intelligence in Leadership.As the President of Atal Foundation, and Director of JBLC INDIA, one of the top 10 law firms in India, he has led numerous national initiatives in education, entrepreneurship, and social reform. His work unites law, psychology, and management science—empowering individuals and institutions to lead with integrity, innovation, and purpose. ");
      }
    }, []);

  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12" aria-labelledby="page-heading-privacy">
          <h1 id="page-heading-privacy" className="text-4xl font-extrabold font-heading text-primary">Privacy Policy</h1>
          <p className="mt-2 text-gray-500">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <article className="prose prose-lg max-w-none text-gray-700">
          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy describes how we collect, use, and handle your personal information when you use the website of Dr. Ashutosh Mishra (the "Service"). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
          </p>

          <h2>2. Information We Collect</h2>
          <p>
            We collect information that you voluntarily provide to us when you use our appointment booking form. This information may include:
          </p>
          <ul>
            <li><strong>Name:</strong> To identify you.</li>
            <li><strong>Email Address:</strong> To communicate with you regarding your appointment request and for other correspondence.</li>
            <li><strong>Phone Number:</strong> As an alternative method of communication to confirm your appointment.</li>
            <li><strong>Appointment Details:</strong> The selected date, time, service, and any points you provide about your case.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>
            The information we collect is used solely for the following purposes:
          </p>
          <ul>
            <li>To schedule and manage your appointment request.</li>
            <li>To communicate with you to confirm or reschedule your appointment.</li>
            <li>To respond to your inquiries or provide you with information you have requested.</li>
            <li>To maintain our records for administrative purposes.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We take reasonable measures to protect the personal information we collect from unauthorized access, use, or disclosure. However, no internet or email transmission is ever fully secure or error-free. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
          </p>

          <h2>5. Third-Party Disclosure</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
          </p>
          
          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, correct, or request the deletion of your personal information that we hold. If you wish to exercise any of these rights, please contact us at the email address provided below.
          </p>

          <h2>7. Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:write2me@dramishra.in" className="text-primary hover:underline">write2me@dramishra.in</a>.
          </p>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;