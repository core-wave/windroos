"use client";

import React from "react";
import { Card, CardBody, Image } from "@heroui/react";
import TablerUsers from "./icons/tabler-users";
import TablerSquare from "./icons/tabler-square";
import { Accommodation } from "@/data/accommodations";
import { useRouter } from "next/navigation";

export default function AccommodationCard({
  accommodation,
}: {
  accommodation: Accommodation;
}) {
  const router = useRouter();

  return (
    <Card
      onPress={() => router.push(accommodation.href)}
      className="overflow-hidden w-full max-w-lg"
      isHoverable
      isPressable
    >
      <div className="relative aspect-video">
        <Image
          removeWrapper
          alt={accommodation.title}
          className="z-0 w-full object-cover"
          src={accommodation.image}
        />
      </div>
      <CardBody className="p-4">
        <h3 className="text-xl font-bold">{accommodation.title}</h3>
        <div className="flex items-center gap-2 mt-2 text-default-500">
          <TablerUsers width={16} />
          <span>{accommodation.capacity} gasten</span>
          <span className="mx-2">•</span>
          <TablerSquare width={16} />
          <span>{accommodation.size} m²</span>
        </div>
        <p className="text-default-500 mt-3">{accommodation.description}</p>
      </CardBody>
    </Card>
  );
}
