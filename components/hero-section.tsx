import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default async function HeroSection() {
  const t = await getTranslations("hero");
  return (
    <section className="relative h-[500px] w-full md:h-[600px] lg:h-[700px] -mt-4 pt-4 text-white rounded-b-2xl overflow-hidden">
      <Image alt="farm" fill src={"/land.JPG"} className="object-cover" />
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/60 flex items-center justify-center px-4 text-center">
        <div className="max-w-3xl flex flex-col gap-4 md:gap-6 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl">{t("description")}</p>
          <Link href="#">
            <Button className="h-12 px-8 text-lg font-semibold">
              {t("cta")}
              <ArrowRight className="size-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
