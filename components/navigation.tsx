import { Locale } from "next-intl";
import LocaleSwitcher from "./locale-switcher";
import { Button } from "./ui/button";
import { Calendar } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function Navigation({ locale }: { locale: Locale }) {
  const t = await getTranslations("navigation");
  return (
    <div className="sticky flex h-16 w-full bg-background rounded-b-2xl top-0 justify-between items-center p-4 z-10 shadow-sm">
      <img src="dewindroos.svg" className="h-8 ml-1" />
      <div className="flex gap-2">
        <Button variant={"secondary"}>
          <span className="hidden xs:inline">{t("book")}</span>
          <Calendar />
        </Button>
        <LocaleSwitcher locale={locale} />
      </div>
    </div>
  );
}
