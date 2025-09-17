import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bed, Users, Home } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export default async function ApartmentsSection() {
  const t = await getTranslations("apartments");

  const apartments = [
    {
      name: t("east.name"),
      description: t("east.description"),
      image: "/oost.JPG?height=300&width=400",
      features: [
        t("features.beds"),
        t("features.kitchen"),
        t("features.terrace"),
        t("features.size"),
      ],
    },
    {
      name: t("west.name"),
      description: t("west.description"),
      image: "/west.JPG?height=300&width=400",
      features: [
        t("features.beds"),
        t("features.kitchen"),
        t("features.terrace"),
        t("features.size"),
      ],
    },
  ];

  return (
    <section className="py-16 bg-green-50">
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
              <div className="relative aspect-video">
                <Image
                  fill
                  src={apartment.image || "/placeholder.svg"}
                  alt={apartment.name}
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-700">
                  {t("available")}
                </Badge>
              </div>
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
                <Button className="w-full bg-green-700 hover:bg-green-800">
                  {t("checkAvailability")}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
