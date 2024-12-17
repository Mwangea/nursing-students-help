
import { Star } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "NCLEX Graduate",
    content: "The support I received was invaluable. I passed my NCLEX on the first try thanks to their guidance!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Michael Chen",
    role: "Nursing Student",
    content: "Their ATI TEAS prep program helped me score in the 95th percentile. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "BSN Student",
    content: "The tutoring services are exceptional. They've helped me maintain a 4.0 GPA in my nursing program.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: 'Sarah Johnson',
    role: 'BSN Student',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'This platform has been a lifesaver during my clinical rotations. The answers are detailed and easy to understand.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'RN Student',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'The quality of explanations here is outstanding. It helped me ace my NCLEX preparation.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'DNP Student',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    content: 'Incredible resource for advanced nursing concepts. The community here is supportive and knowledgeable.',
    rating: 5,
  },
];

export function TestimonialCard() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Student Testimonials</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Hear from our successful students about their experience with our services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}