"use client";
import { Shield, Clock, MapPin, Compass, Heart, DollarSign } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Safe Travel",
      description: "Your safety is our top priority with comprehensive travel insurance and local support."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Flexible Booking",
      description: "Easy booking process with free cancellation up to 48 hours before your trip."
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Handpicked Hotels",
      description: "Stay in carefully selected accommodations that meet our high standards."
    },
    {
      icon: <Compass className="w-12 h-12" />,
      title: "Expert Guides",
      description: "Experience destinations with our knowledgeable local guides."
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: "Personalized Experience",
      description: "Customized itineraries tailored to your preferences and interests."
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "Best Price Guarantee",
      description: "We offer competitive prices with no hidden fees or surprises."
    }
  ];

  return (
    <section id="features" className="py-24 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Why Choose Us</h2>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto">
            Discover the unique features that make our travel experiences exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-black mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
              <p className="text-[#4A4A4A]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;