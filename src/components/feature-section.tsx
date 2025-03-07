import React, { ReactNode } from "react";
import { Card, CardBody } from "@heroui/react";
import TablerMap2 from "./icons/tabler-map-2";
import TablerWifi from "./icons/tabler-wifi";
import TablerBike from "./icons/tabler-bike";
import TablerCoffee from "./icons/tabler-coffee";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <Card className="border-none bg-transparent shadow-none">
      <CardBody className="flex flex-col items-center text-center p-4">
        <div className="bg-primary/10 p-4 rounded-full mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-default-500">{description}</p>
      </CardBody>
    </Card>
  );
}

export default async function FeatureSection() {
  return (
    <section className="py-16 px-4 bg-default-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Waarom Kiezen Voor Ons</h2>
          <p className="text-default-500 max-w-2xl mx-auto">
            Onze accommodaties bieden meer dan alleen een plek om te verblijven.
            Ervaar het beste van Nederlandse gastvrijheid met deze
            voorzieningen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Feature
            icon={<TablerMap2 width={32} />}
            title="Super Locatie"
            description="Gelegen in het hart van de polder, dicht bij charmante dorpjes en prachtige fietsroutes."
          />
          <Feature
            icon={<TablerWifi width={32} />}
            title="Gratis Wi-Fi"
            description="Blijf verbonden met razendsnel internet dat beschikbaar is in al onze accommodaties."
          />
          <Feature
            icon={<TablerBike width={32} />}
            title="Fietsverhuur"
            description="Ontdek het Nederlandse platteland op twee wielen met onze gratis fietsverhuurservice."
          />
          <Feature
            icon={<TablerCoffee width={32} />}
            title="Lokaal Ontbijt"
            description="Begin uw dag met een heerlijk ontbijt met verse lokale Nederlandse producten."
          />
        </div>
      </div>
    </section>
  );
}
