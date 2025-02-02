"use client";
import { Clock, MapPin, Users, Star } from 'lucide-react';

const TravelPackages = () => {
  const packages = [
    {
      title: "Bonanza Budget Tour - Sri Lanka",
      location: "Colombo",
      duration: "5N/6D",
      groupSize: "2 - 8 People",
      rating: 4.7,
      price: 989,
      image: "/54.jpg",
      features: ["All-include Resort", "visting Temples", "Cultural Experience", "Cultural Tours"]
    },
    {
      title: "Luxury Beach Bonanza - Sri Lanka",
      location: "Down South",
      duration: "14N/15D",
      groupSize: "10 - 15 People",
      rating: 4.9,
      price: 1999,
      image: "/53.webp",
      features: ["Guided Tour", "Beach Experience", "Spa Expeerience", "Evening Party"]
    },
    {
      title: "Tropical Escape - Sri Lanka",
      location: "Kandy",
      duration: "7N/8D",
      groupSize: "8 - 12 People",
      rating: 4.8,
      price: 1499,
      image: "/43.jpg",
      features: ["Temple Visits", "Tea Ceremony", "Cooking Class", "Garden Tours"]
    }
  ];

  return (
    <section id="packages" className="py-16 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 text-center mb-6 mt-12">Popular Travel Packages</h1>
          <p className="text-[#4A4A4A] max-w-2xl mx-auto">
            Choose from our carefully curated travel packages designed to provide unforgettable experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              {/* Package Image */}
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{pkg.rating}</span>
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3">{pkg.title}</h3>
                
                {/* Info Icons */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} className="text-[#4A4A4A]" />
                    <span className="text-sm text-[#4A4A4A]">{pkg.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock size={18} className="text-[#4A4A4A]" />
                    <span className="text-sm text-[#4A4A4A]">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={18} className="text-[#4A4A4A]" />
                    <span className="text-sm text-[#4A4A4A]">{pkg.groupSize}</span>
                  </div>
                </div>

                {/* Features */}
                <ul className="mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="text-[#4A4A4A] text-sm mb-2 flex items-center">
                      <span className="w-1.5 h-1.5 bg-black rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-black">${pkg.price}</span>
                    <span className="text-[#4A4A4A] text-sm">/person</span>
                  </div>
                  <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-[#4A4A4A] transition-colors duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-300">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
};

export default TravelPackages;