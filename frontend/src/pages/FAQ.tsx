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
        <div className="container mx-auto px-4 py-12 max-w-7xl">
       {faqData.map((section, index) => (
          <FAQSection
            key={index}
            title={section.title}
            questions={section.questions}
          />
        ))}
       </div>
       <div className="mx-auto max-w-7xl text-center mt-16 p-8 bg-gray-800/50 backdrop-blur rounded-lg border border-yellow-400/10">
       <h2 className="text-2xl font-bold text-yellow-400 mb-4">Need Personalized Help?</h2>
      <p className="text-gray-300 mb-6">
        Our expert nursing tutors are available 24/7 to assist with your personalized questions
      </p>
      <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full transition-colors">
        Submit Your question
      </button>
       </div>
      </div>
    </div>
  );
};

export default FAQ;
