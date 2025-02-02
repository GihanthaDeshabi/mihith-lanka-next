"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import featuredPlaces from "@/constants/TravelPLaces"; 
import Link from "next/link";

const TravelCards = () => {
  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 text-center mb-6 mt-12">
        Place to Visit Sri Lanka
      </h1>
      <p className="text-[#4A4A4A] max-w-2xl mx-auto text-center mb-10">The main destinations of domestic tourists are Anuradhapura, Kataragama, Nuwara Eliya, Kandy, Sri Pada, Polonnaruwa, Sigiriya and Dambulla.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPlaces.slice(0, 3).map((place) => (  
          <div
            key={place.id}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden h-[400px] transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image Container */}
            <div className="absolute inset-0">
              <Image
                src={place.image}
                alt={place.title}
                width={700}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content Section */}
            <div className="relative h-full p-6 flex flex-col justify-end text-white">
              <h3 className="text-xl font-bold mb-2">{place.title}</h3>
              <p className="text-sm mb-4 text-gray-200">{place.description}</p>
              <Link
                href={`/places/${place.id}`}
                className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white w-fit"
              >
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View More Places Button */}
      <div className="text-center mt-12">
        <Link href="/places">
          <button className="bg-transparent border-2 border-black text-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition-colors duration-300">
            View All Places
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TravelCards;