import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bed, Users, Home } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default async function ApartmentsSection() {
  const t = await getTranslations("apartments");

  const apartments = [
    {
      name: t("east.name"),
      description: t("east.description"),
      image: "/oost.JPG?height=300&width=400",
      images: [
        "/oost/1.JPG?height=300&width=400",
        "/oost/2.JPG?height=300&width=400",
        "/oost/3.JPG?height=300&width=400",
        "/oost/4.JPG?height=300&width=400",
        "/oost/5.JPG?height=300&width=400",
      ],
      features: [
        t("features.beds"),
        t("features.kitchen"),
        t("features.terrace"),
        t("features.size"),
      ],
      airBnbLink: "https://www.airbnb.com/rooms/841165679056770234",
      bookingLink: "",
    },
    {
      name: t("west.name"),
      description: t("west.description"),
      image: "/west.JPG?height=300&width=400",
      images: [
        "/west/1.JPG?height=300&width=400",
        "/west/2.JPG?height=300&width=400",
        "/west/3.JPG?height=300&width=400",
        "/west/4.JPG?height=300&width=400",
      ],
      features: [
        t("features.beds"),
        t("features.kitchen"),
        t("features.terrace"),
        t("features.size"),
      ],
      airBnbLink: "https://www.airbnb.com/rooms/821576617184843619",
      bookingLink: "",
    },
  ];

  return (
    <section id="apartments" className="py-16 bg-green-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {apartments.map((apartment, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow pt-0"
            >
              <Carousel className="w-full">
                <CarouselContent>
                  {apartment.images.map((image) => (
                    <CarouselItem key={image}>
                      <div className="relative aspect-3/2">
                        <Image
                          fill
                          src={image || "/placeholder.svg"}
                          alt={image}
                          className="object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 translate-x-0 z-20" />
                <CarouselNext className="right-3 top-1/2 -translate-y-1/2 -translate-x-0 z-20" />
              </Carousel>
              <CardHeader>
                <CardTitle className="text-green-800">
                  {apartment.name}
                </CardTitle>
                <CardDescription>{apartment.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {apartment.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{t("capacity.adults")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span>{t("capacity.baby")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    <span>45m²</span>
                  </div>
                </div>
                <Button
                  className="w-full bg-green-700 hover:bg-green-800"
                  asChild
                >
                  <Link href="#contact">{t("checkAvailability")}</Link>
                </Button>
                <div className="w-full grid grid-cols-2 gap-2 pt-2">
                  <Button variant={"outline"} asChild>
                    <Link href={apartment.airBnbLink} target="_blank">
                      <img src={"/airbnb.svg"} className="h-3.5" />
                    </Link>
                  </Button>
                  <Button variant={"outline"} asChild>
                    <Link href={apartment.bookingLink} target="_blank">
                      <img src={"/booking.svg"} className="h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
