
import { Clock, Check } from 'lucide-react';

export function PricingInfo() {
  const features = [
    'Expert nursing tutors',
    'Plagiarism-free content',
    'Unlimited revisions',
    '24/7 support',
    'Confidential service',
    'Money-back guarantee'
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h2 className="text-2xl font-bold mb-6">Pricing Information</h2>
      
      <div className="space-y-6">
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Turnaround Time</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <span>Standard: 48-72 hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <span>Express: 24 hours</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <span>Urgent: 8-12 hours</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">What You Get</h3>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li key={feature} className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Starting From</h3>
          <div className="text-3xl font-bold text-yellow-600">$25/page</div>
          <p className="text-sm text-gray-600 mt-1">
            Final price depends on deadline and complexity
          </p>
        </div>
      </div>
    </div>
  );
}