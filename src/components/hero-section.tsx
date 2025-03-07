import React from "react";
import { Button, Link } from "@heroui/react";
import TablerArrowRight from "./icons/tabler-arrow-right";

export default async function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Image */}
      <div className="h-[600px] w-full relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{
            backgroundImage: "url('/img/hero.jpeg')",

            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Ervaar de Rust van de Polder
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8">
            Authentieke appartementen omringd door een pittoresk polderlandschap
          </p>
          <Button
            as={Link}
            href="https://www.airbnb.com/s/Tollebeek--Netherlands/homes?host_id=499981093"
            target="_blank"
            color="primary"
            size="lg"
            className="font-semibold"
            endContent={<TablerArrowRight width={20} />}
          >
            Check Beschikbaarheid
          </Button>
        </div>
      </div>
    </section>
  );
}
