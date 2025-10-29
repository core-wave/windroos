"use server";

import { getTranslations } from "next-intl/server";
import z from "zod";

const apartmentEnum = z.enum(["east", "west", "both"]);
const childBedEnum = z.enum(["east", "west", "both", "yes", "no"]);

export async function contactFormSchema() {
  const t = await getTranslations("contact.form.errors");
  return z.object({
    email: z.email({ message: t("emailRequired") }),
    name: z.string().min(1, t("nameRequired")),
    phone: z.string().optional(),
    date_from: z.string().min(1, t("dateRequired")),
    date_to: z.string().min(1, t("dateRequired")),
    apartment: apartmentEnum,
    childBed: childBedEnum,
    guests: z.number(),
    message: z.string().optional(),
  });
}

export type ContactFormData = z.infer<
  Awaited<ReturnType<typeof contactFormSchema>>
>;

export type Apartment = z.infer<typeof apartmentEnum>;
export type ChildBed = z.infer<typeof childBedEnum>;
