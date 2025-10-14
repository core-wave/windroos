import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Navigation, Camera, Mountain } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function LocationSection() {
  const t = await getTranslations("location");

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-700">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <MapPin className="h-5 w-5" />
                  {t("address.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  {t("address.street")}
                  <br />
                  {t("address.postal")}
                  <br />
                  {t("address.country")}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <Camera className="h-5 w-5" />
                  {t("attractions.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  <div
                    key={1}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Navigation className="h-3 w-3 text-green-500" />
                    {t("attractions.items.1")}
                  </div>
                  <div
                    key={2}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Navigation className="h-3 w-3 text-green-500" />
                    {t("attractions.items.2")}
                  </div>
                  <div
                    key={3}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Navigation className="h-3 w-3 text-green-500" />
                    {t("attractions.items.3")}
                  </div>
                  <div
                    key={4}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Navigation className="h-3 w-3 text-green-500" />
                    {t("attractions.items.4")}
                  </div>
                  <div
                    key={5}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Navigation className="h-3 w-3 text-green-500" />
                    {t("attractions.items.5")}
                  </div>
                  <div
                    key={6}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <Navigation className="h-3 w-3 text-green-500" />
                    {t("attractions.items.6")}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <img
              src="/land.JPG?height=600&width=600"
              alt="Polderlandschap rondom Tollebeek"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <div className="flex items-center gap-2 text-sm font-medium text-green-800">
                <Mountain className="h-4 w-4" />
                {t("views")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
