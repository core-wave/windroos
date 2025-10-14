import AboutSection from "@/components/sections/about";
import AmenitiesSection from "@/components/sections/amenities";
import ApartmentsSection from "@/components/sections/apartments";
import ContactSection from "@/components/sections/contact";
import FooterSection from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";
import LocationSection from "@/components/sections/location";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ApartmentsSection />
      <AmenitiesSection />
      <LocationSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
