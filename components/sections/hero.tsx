import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HeroSection() {
  const t = await getTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center -mt-16 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px]"
        style={{ backgroundImage: `url('/schapen.JPG')` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      <div className="z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">{t("title")}</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          {t("subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span>{t("location")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5" />
            <span>{t("phone")}</span>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href={"#apartments"}>{t("viewApartments")}</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-foreground"
            asChild
          >
            <Link href={"#contact"}>{t("contact")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
