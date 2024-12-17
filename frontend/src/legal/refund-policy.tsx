export function RefundPolicy() {
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
        <PolicyLayout title="Refund Policy">
      <LastUpdated date="March 15, 2024" />
      
      <div className="space-y-8">
        <PolicySection title="Overview">
          <p>
            At NursingStudentsHelp.us, we strive to ensure complete satisfaction with our services. 
            This refund policy outlines the conditions and procedures for requesting refunds.
          </p>
        </PolicySection>

        <PolicySection title="Refund Eligibility">
          <h4 className="font-semibold mb-2">Eligible for Refund</h4>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Service not provided as described</li>
            <li>Technical issues preventing access to content</li>
            <li>Double charging or billing errors</li>
            <li>Cancellation within 24 hours of subscription</li>
            <li>Unused premium credits</li>
          </ul>

          <h4 className="font-semibold mb-2">Not Eligible for Refund</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Already accessed or downloaded content</li>
            <li>Completed assignment help services</li>
            <li>Subscriptions active for more than 24 hours</li>
            <li>Services cancelled after delivery</li>
            <li>Violation of Terms of Service</li>
          </ul>
        </PolicySection>

        <PolicySection title="Refund Process">
          <p className="mb-4">To request a refund:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Contact our support team within 24 hours of purchase</li>
            <li>Provide order number and detailed reason for refund</li>
            <li>Include any relevant screenshots or documentation</li>
            <li>Allow 5-7 business days for review and processing</li>
            <li>Refunds will be issued to the original payment method</li>
          </ol>
        </PolicySection>

        <PolicySection title="Subscription Cancellations">
          <p className="mb-4">For subscription cancellations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cancel through your account dashboard</li>
            <li>Cancellation must be done before renewal date</li>
            <li>Access continues until the end of billing period</li>
            <li>No partial refunds for unused time</li>
          </ul>
        </PolicySection>

        <PolicySection title="Special Circumstances">
          <p className="mb-4">We may consider refunds outside standard policy for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Extended service outages</li>
            <li>Documented medical emergencies</li>
            <li>Natural disasters affecting service access</li>
            <li>Account compromise or fraud</li>
          </ul>
        </PolicySection>

        <PolicySection title="Contact Information">
          <p>For refund requests or questions, contact us at:</p>
          <div className="mt-4">
            <p>Email: refunds@nursingstudentshelp.us</p>
            <p>Phone: 1-800-NURSING</p>
            <p>Support Hours: Monday-Friday, 9 AM - 5 PM EST</p>
          </div>
        </PolicySection>
      </div>
    </PolicyLayout>
  );
}