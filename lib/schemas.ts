"use server";

import { getTranslations } from "next-intl/server";
import z from "zod";

export async function contactFormSchema() {
  //   const t = await getTranslations("errors.formErrors");
  return z.object({
    email: z.email({ message: `t("emailRequired")` }),
    name: z.string().min(1, "name is required"),
  });
}

export type ContactFormData = z.infer<
  Awaited<ReturnType<typeof contactFormSchema>>
>;
