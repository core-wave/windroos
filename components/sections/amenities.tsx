import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wifi,
  Car,
  Bike,
  WashingMachineIcon as Washing,
  Coffee,
  Bed,
  TreePine,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function AmenitiesSection() {
  const t = await getTranslations("amenities");

  const amenities = [
    {
      icon: Wifi,
      title: t("items.wifi.title"),
      description: t("items.wifi.description"),
    },
    {
      icon: Car,
      title: t("items.parking.title"),
      description: t("items.parking.description"),
    },
    {
      icon: Bike,
      title: t("items.bikeRental.title"),
      description: t("items.bikeRental.description"),
    },
    {
      icon: Bike,
      title: t("items.bikeStorage.title"),
      description: t("items.bikeStorage.description"),
    },
    {
      icon: Washing,
      title: t("items.laundry.title"),
      description: t("items.laundry.description"),
    },
    {
      icon: Coffee,
      title: t("items.kitchen.title"),
      description: t("items.kitchen.description"),
    },
    {
      icon: Bed,
      title: t("items.linens.title"),
      description: t("items.linens.description"),
    },
    {
      icon: TreePine,
      title: t("items.garden.title"),
      description: t("items.garden.description"),
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-700">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-2">
                <amenity.icon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <CardTitle className="text-sm font-semibold text-green-800">
                  {amenity.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-gray-600">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
