"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      image: "/9.jpg",
      text: "The most amazing travel experience of my life! The attention to detail and personalized service was outstanding.",
      trip: "Bali Adventure Tour"
    },
    {
      name: "David Chen",
      location: "London, UK",
      rating: 5,
      image: "/9.jpg",
      text: "Exceeded all expectations. The local guides were knowledgeable and the accommodations were perfect.",
      trip: "Japanese Culture Tour"
    },
    {
      name: "Maria Garcia",
      location: "Madrid, Spain",
      rating: 5,
      image: "/9.jpg",
      text: "A perfectly organized trip with the perfect balance of activities and relaxation. Will definitely book again!",
      trip: "Swiss Alps Explorer"
    }
  ];

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">What Our Travelers Say</h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto">
            Read genuine reviews from our satisfied travelers
          </p>
        </div>

        <div className="relative">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 md:px-8"
                >
                  <div className="bg-white rounded-lg p-8 shadow-lg">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="font-bold text-black">{testimonial.name}</h3>
                          <p className="text-[#4A4A4A] text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-[#4A4A4A] mb-4">{testimonial.text}</p>
                    <p className="text-black font-semibold">Trip: {testimonial.trip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white p-2 rounded-full shadow-lg hover:bg-[#f3f3f3] transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white p-2 rounded-full shadow-lg hover:bg-[#f3f3f3] transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setAutoplay(false);
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                currentSlide === index ? 'bg-black' : 'bg-[#4A4A4A]'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;