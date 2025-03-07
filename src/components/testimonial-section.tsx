import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import TablerStar from "./icons/tabler-star";
import TablerStarFilled from "./icons/tabler-star-filled";

interface TestimonialProps {
  quote: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
}

function Testimonial({
  quote,
  author,
  location,
  avatar,
  rating,
}: TestimonialProps) {
  return (
    <Card className="bg-content1">
      <CardBody className="p-6">
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) =>
            i < rating ? (
              <TablerStarFilled key={i} className="text-warning" width={18} />
            ) : (
              <TablerStar key={i} className="text-default-300" width={18} />
            )
          )}
        </div>
        <p className="italic mb-6">&quot;{quote}&quot;</p>
        <div className="flex items-center gap-3">
          <Avatar src={avatar} alt={author} size="sm" />
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-small text-default-500">{location}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default async function TestimonialSection() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Wat Onze Gasten Zeggen</h2>
        <p className="text-default-500 max-w-2xl mx-auto">
          Neem het niet alleen van ons aan. Dit is wat onze gasten zeggen over
          hun verblijf bij ons.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Testimonial
          quote="De perfecte ontsnapping naar het platteland! We genoten van de rustige omgeving en het appartement was prachtig ingericht met alle voorzieningen die we nodig hadden."
          author="Emma Johnson"
          location="Londen, VK"
          avatar="https://i.pravatar.cc/150?u=emma"
          rating={5}
        />
        <Testimonial
          quote="Fietsen door de tulpenvelden en daarna terugkeren naar zo’n gezellig appartement was het hoogtepunt van onze vakantie in Nederland. Absoluut een aanrader!"
          author="Michael Schmidt"
          location="Berlijn, Duitsland"
          avatar="https://i.pravatar.cc/150?u=michael"
          rating={5}
        />
        <Testimonial
          quote="De gastheren waren ongelooflijk gastvrij en de locatie is perfect om het Nederlandse platteland te verkennen. We komen zeker terug!"
          author="Sophie Dubois"
          location="Parijs, Frankrijk"
          avatar="https://i.pravatar.cc/150?u=sophie"
          rating={4}
        />
      </div>
    </section>
  );
}
