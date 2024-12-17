export function TermsOfService() {
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
        <PolicyLayout title="Terms of Service">
      <LastUpdated date="March 15, 2024" />
      
      <div className="space-y-8">
        <PolicySection title="Agreement to Terms">
          <p>
            These Terms of Service constitute a legally binding agreement between you and 
            NursingStudentsHelp.us. By accessing or using our service, you agree to be bound 
            by these terms.
          </p>
        </PolicySection>

        <PolicySection title="Service Description">
          <p className="mb-4">NursingStudentsHelp.us provides:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access to nursing-related questions and answers</li>
            <li>Educational support and resources</li>
            <li>Premium content through subscription</li>
            <li>Assignment and exam help services</li>
            <li>Study materials and guides</li>
            <li>Practice questions and assessments</li>
          </ul>
        </PolicySection>

        <PolicySection title="User Accounts">
          <p className="mb-4">When creating an account, you must:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate and complete information</li>
            <li>Maintain the security of your account credentials</li>
            <li>Notify us immediately of any unauthorized access</li>
            <li>Be at least 18 years old or have parental consent</li>
          </ul>
        </PolicySection>

        <PolicySection title="Acceptable Use">
          <p className="mb-4">Users must NOT:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Share account credentials</li>
            <li>Distribute or reproduce content without permission</li>
            <li>Use the service for cheating or plagiarism</li>
            <li>Engage in any illegal or unauthorized activities</li>
            <li>Attempt to breach security measures</li>
            <li>Harass or harm other users</li>
          </ul>
        </PolicySection>

        <PolicySection title="Intellectual Property">
          <p className="mb-4">
            All content on NursingStudentsHelp.us is protected by copyright and other intellectual 
            property laws. Users may not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Copy or reproduce any content without permission</li>
            <li>Distribute or sell our materials</li>
            <li>Create derivative works</li>
            <li>Remove copyright notices or watermarks</li>
          </ul>
        </PolicySection>

        <PolicySection title="Termination">
          <p>
            We reserve the right to suspend or terminate your account for any violation of these 
            terms, without prior notice. Upon termination:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Access to premium content will be revoked</li>
            <li>Unused subscription time may be forfeited</li>
            <li>You must cease using our services</li>
            <li>Certain provisions of these terms will survive termination</li>
          </ul>
        </PolicySection>

        <PolicySection title="Contact Information">
          <p>
            For questions about these Terms of Service, please contact us at:
          </p>
          <div className="mt-4">
            <p>Email: legal@nursingstudentshelp.us</p>
            <p>Phone: 1-800-NURSING</p>
            <p>Address: 123 Education St, Academic City, AC 12345</p>
          </div>
        </PolicySection>
      </div>
    </PolicyLayout>
  );
}