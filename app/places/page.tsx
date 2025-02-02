"use client";
import Image from "next/image";
import featuredPlaces from "@/constants/TravelPLaces";

const PlacesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Cover Image */}
      <div className="relative w-full h-96 mb-12">
        <Image
          src="/places/cover.jpg"
          alt="Explore Sri Lanka"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Explore Sri Lanka</h1>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Top 25 Destinations in Sri Lanka
      </h2>

      {/* Destination Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPlaces.map((place) => (
          <div key={place.id} className="bg-white rounded-xl shadow-lg overflow-hidden h-[350px] hover:shadow-2xl transition-shadow">
            <div className="relative h-56">
              <Image
                src={place.image}
                alt={place.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{place.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{place.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesPage;