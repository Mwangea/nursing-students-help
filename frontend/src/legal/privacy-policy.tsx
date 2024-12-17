import React from 'react';

export default function PrivacyPolicy() {
  const PolicyLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
      <div className="max-w-[100rem] mx-auto bg-gray-100 rounded-lg shadow-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold text-black mb-6 pb-4 border-b-2 border-yellow-400">
          {title}
        </h2>
        <div className="prose max-w-none text-gray-800">{children}</div>
      </div>
    </main>
  );

  const PolicySection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-black mb-4 pb-2 border-b border-yellow-400">
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );

  const LastUpdated = ({ date }: { date: string }) => (
    <div className="text-sm text-gray-600 mb-6">Last Updated: {date}</div>
  );

  return (
    <PolicyLayout title="Privacy Policy">
      <LastUpdated date="March 15, 2024" />

      <div className="space-y-8">
        <PolicySection title="Introduction">
          <p>
            At NursingStudentsHelp.us, we take your privacy seriously. This Privacy Policy explains how
            we collect, use, disclose, and safeguard your information when you visit our website or use
            our services. Please read this privacy policy carefully.
          </p>
        </PolicySection>

        <PolicySection title="Information We Collect">
          <h4 className="font-semibold mb-2">Personal Information</h4>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Name and contact details (email address, phone number)</li>
            <li>Academic information and educational background</li>
            <li>Payment and billing information</li>
            <li>Account credentials</li>
          </ul>

          <h4 className="font-semibold mb-2">Automatically Collected Information</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address and browser information</li>
            <li>Device information and operating system</li>
            <li>Usage patterns and preferences</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </PolicySection>

        <PolicySection title="How We Use Your Information">
          <p className="mb-4">We use your information for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Process payments and prevent fraud</li>
            <li>Send administrative information and updates</li>
            <li>Respond to customer service requests</li>
            <li>Send marketing communications (with consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </PolicySection>

        <PolicySection title="Information Sharing">
          <p className="mb-4">We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers and business partners</li>
            <li>Payment processors</li>
            <li>Legal authorities when required by law</li>
            <li>Professional advisors and insurers</li>
          </ul>
        </PolicySection>

        <PolicySection title="Your Rights">
          <p className="mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Withdraw consent</li>
            <li>Data portability</li>
          </ul>
        </PolicySection>

        <PolicySection title="Contact Us">
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <div className="mt-4">
            <p>Email: privacy@nursingstudentshelp.us</p>
            <p>Phone: 1-800-NURSING</p>
            <p>Address: 123 Education St, Academic City, AC 12345</p>
          </div>
        </PolicySection>
      </div>
    </PolicyLayout>
  );
}
