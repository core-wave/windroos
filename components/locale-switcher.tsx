"use client";

import { Locale, useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { NL, DE, US } from "country-flag-icons/react/1x1";
import { ComponentType } from "react";
import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";

const localeToFlag: Record<Locale, ComponentType<{ className?: string }>> = {
  nl: NL,
  de: DE,
  en: US,
};

export default function LocaleSwitcher({ locale }: { locale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();
  const FlagIcon = localeToFlag[locale];
  const t = useTranslations("languages");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size={"icon"} variant={"secondary"}>
          <FlagIcon className="rounded-xs size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4">
        {routing.locales.map((loc) => {
          const ItemFlag = localeToFlag[loc];
          return (
            <DropdownMenuItem
              key={loc}
              onClick={() => router.replace(pathname, { locale: loc })}
            >
              <ItemFlag className="rounded-xs size-4" />
              {t(loc)}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
