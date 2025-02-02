import AboutSection from "@/components/AboutSection";
import BookingForm from "@/components/BookingSection";
import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Getapp from "@/components/Getapp";
// import Guide from "@/components/Guide";
import HeroSection from "@/components/Hero";
import TravelPackages from "@/components/Packages";
import TravelCards from "@/components/PlaceToVisit";
import FeaturesSection from "@/components/WhyChooseus";
// import Hero from "@/components/Hero";


export default function Home() {
  return (
    <>
    <HeroSection />
    <Camp />
    <TravelCards />
    {/* <Guide /> */}
    <AboutSection />
    <TravelPackages />
    <BookingForm  />
    <Features />
    
    <FeaturesSection />
    {/* <Getapp /> */}
    </>
  );
}
