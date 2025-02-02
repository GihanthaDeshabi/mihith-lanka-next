"use client";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      image: "/9.jpg",
      subtitle: "Sacred & Serene",
      title: "Journey into the Heart of Buddhist Heritage",
      text: "Explore ancient temples and immerse yourself in the tranquility of Sri Lanka's Buddhist culture.",
      buttonText: "Discover the Sacred",
    },
    {
      image: "/1.webp",
      subtitle: "Adventure Awaits",
      title: "Beauty of Sri Lanka's Hidden Gems",
      text: "From scenic beaches to misty mountains, your next adventure begins here.",
      buttonText: "Plan Your Journey",
    },
    {
      image: "/10.jpg",
      subtitle: "Flavors & Journeys",
      title: "Explore Sri Lanka Through Its Food & Traditions",
      text: "Embark on a journey where every bite tells a story, and every destination reveals the heart of Sri Lankan culture.",
      buttonText: "Travel & Taste",
    },
    {
      image: "/46.webp",
      subtitle: "Vibrant & Lively",
      title: "Savor the Essence of Sri Lankan Spices & Tea",
      text: "Indulge in the rich aromas of world-famous Ceylon tea and spices grown in Sri Lanka’s lush landscapes.",
      buttonText: "Taste the Tradition",
    },
    {
      image: "/12.jpg",
      subtitle: "Exotic Flavors",
      title: "Embrace Sri Lanka’s Rich Cultural Tapestry",
      text: "From ancient dance forms to local crafts, Sri Lanka’s traditions will captivate your heart.",
      buttonText: "Experience Culture",
    },
  ];

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [isAnimating, slides.length]);

  const prevSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }, [isAnimating, slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden font-dm-sans">
      <ul className="h-full w-full">
        {slides.map((slide, index) => (
          <li
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out
              ${currentSlide === index ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}
          >
            <div className="relative w-full h-full">
              {/* Image with Smooth Zoom Effect */}
              <img
                src={slide.image}
                alt=""
                className={`w-full h-full object-cover transition-transform duration-[3000ms] ease-in-out ${
                  currentSlide === index ? "scale-105" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-black/40 flex items-center text-xs justify-center">
                <div className="text-center text-white px-4 max-w-6xl mx-auto">
                  <p
                    style={{ letterSpacing: "0.5em" }}
                    className={`lg:text-sm mb-4 transform transition-all duration-400 delay-100
                    ${currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  >
                    {slide.subtitle}
                  </p>
                  <h1
                    className={`lg:text-5xl md:text-6xl mb-8 font-meduim transform transition-all duration-400 delay-100
                    ${currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  >
                    {slide.title}
                  </h1>

                  <p
                    style={{ letterSpacing: "0.2em" }}
                    className={`lg:text-xl mb-8 transform transition-all duration-400 delay-100
                    ${currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
                  >
                    {slide.text}
                  </p>
                  <button
                    className={`relative overflow-hidden group bg-transparent text-white border border-white px-8 py-2 uppercase  
                    transform transition-all duration-700 delay-900 text-xl
                    ${currentSlide === index ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  >
                    <span className="relative z-10 block group-hover:-translate-y-full transition-transform duration-300">
                      {slide.buttonText}
                    </span>
                    <span className="absolute inset-0 z-0 block -translate-y-full group-hover:translate-y-0 
                                      bg-white text-black transition-transform duration-300 flex items-center justify-center">
                      {slide.buttonText}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center
          bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300"
        disabled={isAnimating}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center
          bg-white/20 hover:bg-white/40 rounded-full transition-all duration-300"
        disabled={isAnimating}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
};

export default HeroSlider;
