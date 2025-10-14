import { Locale } from "next-intl";
import LocaleSwitcher from "./locale-switcher";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function Navigation({ locale }: { locale: Locale }) {
  const t = await getTranslations("navigation");
  return (
    <div className="sticky flex h-16 w-full bg-background rounded-b-2xl top-0 justify-between items-center p-4 z-20 shadow-sm">
      <img src="dewindroos.svg" className="h-8 ml-1" />
      <div className="flex gap-2">
        <Button asChild variant="secondary">
          <Link href="#contact">
            <span className="hidden xs:inline">{t("book")}</span>
            <Calendar />
          </Link>
        </Button>
        <LocaleSwitcher locale={locale} />
      </div>
    </div>
  );
}
