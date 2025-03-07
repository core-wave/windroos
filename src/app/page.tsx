import AccommodationSection from "@/components/accommodation-section";
import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import Navigation from "@/components/navigation";
import { TestimonialSection } from "@/components/testimonial-section";
import { Button, Link } from "@heroui/react";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSection />

      <div className="w-full text-center py-16 px-4 flex flex-col gap-4 items-center">
        <h2 className="text-3xl font-bold max-w-2xl">Onze Appartementen</h2>
        <p className="text-default-500 max-w-2xl">
          Ervaar de rust van het Nederlandse platteland in onze prachtig
          ontworpen appartementen, elk met unieke uitzichten en voorzieningen
          voor een perfect uitje.
        </p>
      </div>

      <AccommodationSection />

      <FeatureSection />

      <TestimonialSection />

      <section className="py-16 px-4 bg-gradient-to-r from-primary-100 to-primary-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Klaar voor een Nederlandse Plattelandservaring?
          </h2>
          <p className="text-default-600 mb-8 max-w-2xl mx-auto">
            Boek nu uw verblijf en profiteer van speciale tarieven voor vroege
            reserveringen. Ervaar de schoonheid van het Nederlandse platteland
            met ons.
          </p>
          <Button
            as={Link}
            href="https://www.airbnb.com/s/Tollebeek--Netherlands/homes?host_id=499981093"
            target="_blank"
            color="primary"
            size="lg"
            className="font-semibold"
          >
            Beschikbaarheid Bekijken
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}
