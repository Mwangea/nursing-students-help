import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQItem } from '../../constants/faq';

interface FAQSectionProps {
  title: string;
  questions: FAQItem[];
}

export function FAQSection({ title, questions }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mb-12  lg:mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400 border-b border-yellow-400/20 pb-2">
        {title}
      </h2>
      <div className="space-y-4">
        {questions.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur rounded-lg border border-yellow-400/10 hover:border-yellow-400/20 transition-all duration-300"
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full text-left p-6 flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3 flex-1">
                <span className="text-2xl font-bold text-yellow-400">Q.</span>
                <h3 className="text-lg font-semibold text-yellow-400">
                  {item.question}
                </h3>
              </div>
              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              ) : (
                <ChevronDown className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-gray-300 ml-8">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
