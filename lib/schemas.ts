"use server";

import { getTranslations } from "next-intl/server";
import z from "zod";

export async function contactFormSchema() {
  const t = await getTranslations("contact.form.errors");
  return z.object({
    email: z.email({ message: t("emailRequired") }),
    name: z.string().min(1, t("nameRequired")),
    date_from: z.string().min(1, t("dateRequired")),
    date_to: z.string().min(1, t("dateRequired")),
  });
}

export type ContactFormData = z.infer<
  Awaited<ReturnType<typeof contactFormSchema>>
>;
