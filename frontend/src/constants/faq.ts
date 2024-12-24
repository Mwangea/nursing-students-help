export interface FAQItem {
    question: string;
    answer: string;
  }
  
  export interface FAQSection {
    title: string;
    questions: FAQItem[];
  }