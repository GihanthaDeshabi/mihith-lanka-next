"use client";
import { Compass, Users, Award, Globe } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: <Compass size={32} />, value: "100+", label: "Destinations" },
    { icon: <Users size={32} />, value: "100+", label: "Happy Travelers" },
    { icon: <Award size={32} />, value: "5+", label: "Years Experience" },
    { icon: <Globe size={32} />, value: "10+", label: "Islands You Can Visit" }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <img
                src="./44.webp"
                alt="About Us"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl w-64">
              <p className="text-4xl font-bold text-black mb-2">5+</p>
              <p className="text-[#4A4A4A]">Years of Experience in Tourism</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-12 md:pl-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 text-center mb-10 ">
            Every Travel Gives a Story
            </h2>
            <p className="text-[#4A4A4A] mb-8 content-justify text-sm">
            Welcome to Mihith Lanka Tours & Travels, your trusted partner in discovering the breathtaking beauty and rich culture of Sri Lanka. We specialize in helping travelers from around the world experience the best of the island with our reliable taxi services, expert tour guides, and personalized travel packages. Whether you're seeking thrilling adventures, cultural explorations, or serene getaways, we offer tailored solutions to meet your needs. Our commitment to friendly and professional service ensures that every journey with Mihith Lanka is seamless, enjoyable, and truly unforgettable. Let us make your Sri Lankan adventure extraordinary!
            </p>
            
            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-1 h-6 bg-black mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Expert Guides</h3>
                  <p className="text-[#4A4A4A]">Professional local guides with deep knowledge</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-1 h-6 bg-black mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-black">Amazing Experiences</h3>
                  <p className="text-[#4A4A4A]">Customized itineraries for every traveler</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-1 h-6 bg-black mt-1"></div>
                <div>
                  <h3 className="text-xl font-semibold text-black">24/7 Support</h3>
                  <p className="text-[#4A4A4A]">Round-the-clock assistance throughout your journey</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-[#f3f3f3] rounded-full mb-4">
                <span className="text-black">{stat.icon}</span>
              </div>
              <p className="text-3xl font-bold text-black mb-2">{stat.value}</p>
              <p className="text-[#4A4A4A]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;