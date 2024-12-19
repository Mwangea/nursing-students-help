
import { useState, useRef, useEffect } from "react";
import {
  MessageSquare,
  Mail,
  Send,
  Shield,
  Clock,
  HelpCircle,
  MapPin,
  AlertCircle,
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  subject: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
  subject?: string;
}

const SUPPORT_MESSAGES = [
  "Need help with your nursing studies?",
  "We're here 24/7 to support you!",
  "Expert guidance is just a message away.",
  "Let us help you succeed in nursing!",
  "Professional support for nursing students",
];

const validateForm = (formData: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (formData.firstName.trim().length < 2) {
    errors.firstName = "First name must be at least 2 characters";
  }

  if (formData.lastName.trim().length < 2) {
    errors.lastName = "Last name must be at least 2 characters";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  }

  if (formData.subject.trim().length < 3) {
    errors.subject = "Please select a subject";
  }

  return errors;
};

interface QuickSupport {
  icon: JSX.Element;
  title: string;
  description: string;
}

export function Contact() {
  const initialFormData: FormData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    subject: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(SUPPORT_MESSAGES[0]);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    let typingTimer: ReturnType<typeof setTimeout>;
    let currentChar = 0;

    const typeMessage = () => {
      if (currentChar < SUPPORT_MESSAGES[currentMessageIndex].length) {
        setDisplayMessage(
          SUPPORT_MESSAGES[currentMessageIndex].slice(0, currentChar + 1)
        );
        currentChar++;
        typingTimer = setTimeout(typeMessage, 50);
      } else {
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

  useEffect(() => {
    setCharacterCount(formData.message.length);
  }, [formData.message]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (formErrors[name as keyof FormErrors]) {
      const newErrors = { ...formErrors };
      delete newErrors[name as keyof FormErrors];
      setFormErrors(newErrors);
    }
  };

  const sendEmail = async (formData: FormData): Promise<boolean> => {
    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "YOUR_SERVICE_ID",
            template_id: "YOUR_TEMPLATE_ID",
            user_id: "YOUR_USER_ID",
            template_params: {
              to_email: "support@nursingstudentshelp.us",
              from_name: `${formData.firstName} ${formData.lastName}`,
              from_email: formData.email,
              subject: formData.subject,
              message: formData.message,
            },
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to send email");
      return true;
    } catch (error) {
      console.error("Email send error:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await sendEmail(formData);
      setSubmitStatus("Message sent successfully! We'll get back to you soon.");
      setFormData(initialFormData);
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch {
      setSubmitStatus(
        "Failed to send message. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const quickSupports: QuickSupport[] = [
    {
      icon: <HelpCircle className="w-6 h-6 text-yellow-500" />,
      title: "Study Guidance",
      description: "Get instant help with nursing study materials",
    },
    {
      icon: <Shield className="w-6 h-6 text-yellow-500" />,
      title: "Exam Prep",
      description: "Comprehensive exam preparation support",
    },
    {
      icon: <Mail className="w-6 h-6 text-yellow-500" />,
      title: "Career Counseling",
      description: "Professional advice for nursing careers",
    },
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
        <div className="container mx-auto px-4 max-w-7xl py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12">
            {/* First Column: Image */}
            <div className="relative w-full max-w-2xl lg:max-w-full mx-auto">
              <img
                src="call-center.png"
                alt="Medical professionals providing support"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
            <div className="w-full lg:w-full">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6"
                itemScope
                itemType="http://schema.org/ContactForm"
              >
                <div className="flex flex-wrap gap-4 ">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className={`w-full bg-gray-100/50 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        formErrors.firstName ? "ring-2 ring-red-500" : ""
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
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className={`w-full bg-gray-100/50 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                        formErrors.lastName ? "ring-2 ring-red-500" : ""
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john.doe@example.com"
                    className={`w-full bg-gray-100/50 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      formErrors.email ? "ring-2 ring-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    aria-label="Subject"
                    className={`w-full bg-gray-100/50 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${
                      formErrors.subject ? "ring-2 ring-red-500" : ""
                    }`}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="study">Study Help</option>
                    <option value="exam">Exam Preparation</option>
                    <option value="career">Career Advice</option>
                    <option value="other">Other</option>
                  </select>
                  {formErrors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className={`w-full bg-gray-100/50 px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32 ${
                      formErrors.message ? "ring-2 ring-red-500" : ""
                    }`}
                    maxLength={500}
                    required
                  ></textarea>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{characterCount}/500 characters</span>
                    {formErrors.message && (
                      <p className="text-red-500">{formErrors.message}</p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition duration-300 flex items-center justify-center disabled:opacity-50"
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

                {submitStatus && (
                  <div
                    className={`p-4 rounded-lg border mt-4 ${
                      submitStatus.includes("successfully")
                        ? "bg-green-50 border-green-200 text-green-600"
                        : "bg-red-50 border-red-200 text-red-600"
                    }`}
                  >
                    <div className="flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      <p>{submitStatus}</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
            <div className="w-full">
              {/* Main content container */}
              <div className="w-full gap-8">
                {/* Quick Support Section */}
                <div className="w-full">
                  {quickSupports.map((support, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md flex items-center hover:shadow-lg transition-all duration-300 border border-gray-100 mb-4"
                    >
                      <div className="text-yellow-500">{support.icon}</div>
                      <div className="ml-4">
                        <h3 className="font-bold text-lg">{support.title}</h3>
                        <p className="text-gray-600 text-sm">
                          {support.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Additional Contact Information Section */}
            <div className="w-full">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-6">
                  Additional Ways to Reach Us
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center hover:bg-gray-100 p-3 rounded-md transition-colors">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Mail className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Email Support</h4>
                      <a
                        href="mailto:support@nursingstudentshelp.us"
                        className="text-yellow-600 hover:text-yellow-700"
                      >
                        support@nursingstudentshelp.us
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center hover:bg-gray-100 p-3 rounded-md transition-colors">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Response Time</h4>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center hover:bg-gray-100 p-3 rounded-md transition-colors">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <MapPin className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">Office Hours</h4>
                      <p className="text-gray-600">24/7 Online Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* FAQ Section - Full Width */}
          <div className="w-full mt-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200 w-full">
              <h4 className="font-bold text-lg mb-4">
                Frequently Asked Questions
              </h4>
              <div className="space-y-3">
                <div
                  className="cursor-pointer hover:bg-gray-50 p-2 rounded"
                  onClick={() => setShowContactInfo(!showContactInfo)}
                >
                  <div className="flex justify-between items-center">
                    <p className="font-medium">What services do you offer?</p>
                    <HelpCircle className="w-4 h-4 text-yellow-500" />
                  </div>
                  {showContactInfo && (
                    <p className="text-gray-600 text-sm mt-2 pl-2">
                      We offer comprehensive nursing study support, exam
                      preparation guidance, and career counseling services.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
