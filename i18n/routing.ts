import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "de", "nl"],

  // Used when no locale matches
  defaultLocale: "nl",
});
