import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  MapPin, 
  PhoneCall, 
  Mail, 
  CheckCircle, 
  XCircle, 
  User, 
  Send,
  Shield,
  Clock,
  HelpCircle
} from 'lucide-react';

// Predefined support messages to prevent undefined issues
const SUPPORT_MESSAGES = [
  "Need help with your nursing studies?",
  "We're here 24/7 to support you!",
  "Expert guidance is just a message away."
];

// Validation function
const validateForm = (formData: {
  firstName: string, 
  lastName: string, 
  email: string, 
  message: string
}) => {
  const errors: {[key: string]: string} = {};
  
  // Name validations
  if (formData.firstName.trim().length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }
  
  if (formData.lastName.trim().length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Message validation
  if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters long';
  }
  
  return errors;
};

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(SUPPORT_MESSAGES[0]);

  const formRef = useRef<HTMLFormElement>(null);

  // Dynamic support message typing effect
  useEffect(() => {
    let typingTimer: NodeJS.Timeout;
    let currentChar = 0;

    const typeMessage = () => {
      if (currentChar < SUPPORT_MESSAGES[currentMessageIndex].length) {
        setDisplayMessage(prev => 
          SUPPORT_MESSAGES[currentMessageIndex].slice(0, currentChar + 1)
        );
        currentChar++;
        typingTimer = setTimeout(typeMessage, 50);
      } else {
        // Reset after displaying full message
        typingTimer = setTimeout(() => {
          currentChar = 0;
          const nextIndex = (currentMessageIndex + 1) % SUPPORT_MESSAGES.length;
          setCurrentMessageIndex(nextIndex);
        }, 3000);
      }
    };

    typingTimer = setTimeout(typeMessage, 50);

    return () => clearTimeout(typingTimer);
  }, [currentMessageIndex]);

  // Character count and error tracking
  useEffect(() => {
    setCharacterCount(formData.message.length);
  }, [formData.message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
    
    // Clear specific error when user starts typing
    if (formErrors[name]) {
      const newErrors = {...formErrors};
      delete newErrors[name];
      setFormErrors(newErrors);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Simulated API call (replace with actual implementation)
      await new Promise(resolve => setTimeout(resolve, 1500));

      setSubmitStatus('Message sent successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
      
      // Scroll to top of form
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      setSubmitStatus('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Quick support options
  const quickSupports = [
    {
      icon: <HelpCircle className="w-6 h-6 text-yellow-500" />,
      title: "Study Guidance",
      description: "Get instant help with nursing study materials"
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-500" />,
      title: "Exam Prep",
      description: "Comprehensive exam preparation support"
    },
    {
      icon: <Mail className="w-6 h-6 text-yellow-500" />,
      title: "Career Counseling",
      description: "Professional advice for nursing careers"
    }
  ];

  return (
    <div 
      className="relative w-full"
      itemScope 
      itemType="http://schema.org/ContactPage"
    >
      <div className="bg-black text-white py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-500 p-4 rounded-full animate-pulse">
              <MessageSquare className="w-8 h-8 text-black" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-center text-base md:text-lg">
            {displayMessage}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>

      <div className="relative bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 max-w-lg mt-10 lg:mt-0">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              
              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="space-y-6"
                itemScope 
                itemType="http://schema.org/ContactForm"
              >
                {/* Name Inputs */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className={`w-full bg-gray-100/50 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        formErrors.firstName ? 'ring-2 ring-red-500' : ''
                      }`}
                      required
                    />
                    {formErrors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className={`w-full bg-gray-100/50 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        formErrors.lastName ? 'ring-2 ring-red-500' : ''
                      }`}
                      required
                    />
                    {formErrors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.lastName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="JohnDoe214@gmail.com"
                    className={`w-full bg-gray-100/50 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      formErrors.email ? 'ring-2 ring-red-500' : ''
                    }`}
                    required
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What can we help you with?"
                    className={`w-full bg-gray-100/50 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32 ${
                      formErrors.message ? 'ring-2 ring-red-500' : ''
                    }`}
                    maxLength={500}
                    required
                  ></textarea>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{characterCount}/500 characters</span>
                    {formErrors.message && (
                      <p className="text-red-500">
                        {formErrors.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Submit Status */}
                {submitStatus && (
                  <div className={`text-center py-2 rounded-md ${
                    submitStatus.includes('successfully') 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {submitStatus}
                  </div>
                )}
              </form>
            </div>

            {/* Image and Support Info */}
            <div className="w-full lg:w-1/2 flex flex-col items-center lg:pl-12">
              <img
                src="call-center.png"
                alt="Call Center Illustration"
                className="w-full max-w-md h-auto object-contain"
              />
              
              {/* Quick Support Options */}
              <div className="w-full max-w-lg mt-6 space-y-4">
                {quickSupports.map((support, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-lg shadow-md flex items-center hover:shadow-lg transition-all duration-300"
                  >
                    {support.icon}
                    <div className="ml-4">
                      <h3 className="font-bold text-lg">{support.title}</h3>
                      <p className="text-gray-600 text-sm">{support.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;