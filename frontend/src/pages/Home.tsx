import { Helmet } from "react-helmet";
import heroImg from "../assets/hero-img.jpeg";
import { Link } from "react-router-dom";
import { Award, BookOpen, Users } from "lucide-react";
import { CheckCircle } from 'lucide-react';
import { TestimonialCard } from "../components/card/TestimonialCard";

const reasons = [
  'Expert-led instruction and mentorship',
  'Comprehensive study materials and resources',
  'Interactive learning environment',
  'Flexible learning schedule',
  'Proven success track record',
  'Supportive community of learners'
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <div className="relative h-screen" id="home">
        <Helmet>
          <meta
            name="description"
            content="Professional assistance for nursing exams, online tutoring, and academic excellence. Start your journey to becoming a successful healthcare professional today."
          />
          <meta
            name="keywords"
            content="nursing education, nursing exams, online tutoring, academic success, healthcare professional"
          />
          <meta name="author" content="Your Name or Organization" />
          <title>Expert Nursing Education Support</title>
        </Helmet>
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Expert Nursing Education Support. <br />
              <span className="text-yellow-400">Achieve Your Goals</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Professional assistance for nursing exams, online tutoring, and
              academic excellence. Start your journey towards becoming a
              successful healthcare professional today.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/register">
                <button className="w-full sm:w-auto px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
                  Get Started
                </button>
              </Link>
              <Link to="/services">
                <button className="w-full sm:w-auto px-8 py-3 bg-black text-white font-bold rounded-lg border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors">
                  View Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Us */}
      <div className="py-20 bg-black" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              {/* Image */}
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Nursing students"
                className="rounded-lg shadow-2xl"
              />

              {/* Positioned Text Block */}
              <div className="absolute bottom-6 left-6 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
                <div className="text-4xl font-bold">500+</div>
                <div className="text-sm">Students Helped</div>
              </div>
            </div>

            <div className="text-white bg-gray-900 py-10 px-6 sm:px-12 lg:px-24">
              {/* Section Heading */}
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                Empowering Future Healthcare Leaders
              </h3>

              {/* Description Text */}
              <p className="mb-6 text-gray-300 text-center lg:text-left">
                We are dedicated to supporting nursing students throughout their
                educational journey. Our platform provides comprehensive
                resources, expert guidance, and a supportive community to help
                you achieve your goals in healthcare.
              </p>

              {/* Key Features List */}
              <div className="space-y-6 max-w-lg mx-auto lg:mx-0">
                {[
                  { icon: Award, text: "5+ Years of Excellence" },
                  { icon: Users, text: "500+ Students Helped" },
                  { icon: BookOpen, text: "Comprehensive Study Materials" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="h-6 w-6 text-yellow-400" />
                    <span className="text-gray-100">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service section */}
      <div className="py-20 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Expert-led exam preparation and personalized tutoring services
              designed to help nursing students excel in their studies and pass
              their exams with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
            <div className="w-24 h-1 bg-yellow-400 mb-8"></div>
            
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
                  <span className="text-gray-300">{reason}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-colors">
              Join Now
            </button>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Nursing education"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
     
     {/* projects */}
     <div className="py-20 bg-gray-50" id="projects">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-4">Our Projects</h2>
            <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Expert-led exam preparation and personalized tutoring services
              designed to help nursing students excel in their studies and pass
              their exams with confidence.
            </p>
          </div>
        </div>
      </div>

     {/* Testimonials */}
     <TestimonialCard />
    </>
  );
}
