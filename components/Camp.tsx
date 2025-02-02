"use client";
import { useState } from 'react';

interface TravelCardProps {
  title: string;
  image: string;
  href: string;
}

const TravelCard = ({ title, image, href }: TravelCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative  overflow-hidden rounded-lg h-[300px] md:h-[400px] cursor-pointer transform transition-all duration-500 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={href} className="block h-full w-full">
        <div className="h-full w-full relative">
          <img
            src={image}
            alt={title}
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={`px-6 py-2 border-2 border-white text-white text-lg md:text-xl font-semibold tracking-wider transition-transform duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}>
              {title}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

const TravelExperience = () => {
  const experiences = [
    {
      title: 'CULTURE',
      image: './1.webp',
      href: '/experiences/culture'
    },
    {
      title: 'WILDLIFE',
      image: '/9.jpg',
      href: '/experiences/wildlife'
    },
    {
      title: 'BEACH',
      image: '/21.jpg',
      href: '/experiences/beach'
    },
    {
      title: 'FAMILY',
      image: './44.webp',
      href: '/experiences/family'
    },
    {
      title: 'ROMANCE',
      image: '/9.jpg',
      href: '/experiences/romance'
    },
    {
      title: 'SPECIAL',
      image: '/9.jpg',
      href: '/experiences/special'
    }
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 text-center mb-6 mt-12">
          Sri Lankan Travel Experience
        </h1>
        
        <p className="text-center text-gray-600 mb-20 max-w-2xl mx-auto px-4">
          Mihith Lanka Tours & travels offers a range of holidays according to your
          travel preference. Take a luxury travel holiday, a budget holiday or a
          tailormade, customised itinerary made to suit your requirements.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {experiences.map((experience) => (
            <TravelCard
              key={experience.title}
              title={experience.title}
              image={experience.image}
              href={experience.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelExperience;