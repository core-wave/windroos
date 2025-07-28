import AboutUsSection from "@/components/about-us-section";
import ApartmentsSection from "@/components/apartments-section";
import HeroSection from "@/components/hero-section";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ApartmentsSection />
    </>
  );
}
