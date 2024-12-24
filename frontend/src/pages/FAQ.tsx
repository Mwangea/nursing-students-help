import { FAQSection } from "../components/card/FAQSection";
import { faqData } from "../data/faqData";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="bg-gradient-to-b from-gray-900 to-black pt-10 pb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Everything you need to know about our nursing services
          </p>
        </div>
        <div className="container mx-auto px-4 py-12 max-w-4xl">
       {faqData.map((section, index) => (
          <FAQSection
            key={index}
            title={section.title}
            questions={section.questions}
          />
        ))}
       </div>
      </div>
    </div>
  );
};

export default FAQ;
