"use server";

import {
  Apartment,
  ChildBed,
  ContactFormData,
  contactFormSchema,
} from "@/lib/schemas";
import { FormState } from "@/lib/types";
import z from "zod";
import { Resend } from "resend";
import { EmailTemplate } from "../email-template";

export async function submitContactForm(
  prevState: FormState<ContactFormData>,
  formData: FormData
): Promise<FormState<ContactFormData>> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    date_from: formData.get("date_from") as string,
    date_to: formData.get("date_to") as string,
    apartment: formData.get("apartment") as Apartment,
    childBed: formData.get("childBed") as ChildBed,
    guests: Number(formData.get("guests")),
    message: formData.get("message") as string,
  };

  console.log(rawData);

  const schema = await contactFormSchema();

  const parsed = schema.safeParse(rawData);

  console.log(JSON.stringify(parsed));

  if (!parsed.success) {
    console.log(z.treeifyError(parsed.error).properties);
    return {
      status: "error",
      fieldErrors: z.treeifyError(parsed.error).properties,
      fieldValues: rawData,
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const result = await resend.emails.send({
    from: "website@reserveringen.boerderijdewindroos.nl",
    to: "info@boerderijdewindroos.nl",
    subject: `Reserveringsaanvraag: ${parsed.data.date_from} tot ${parsed.data.date_to}`,
    react: EmailTemplate({
      email: parsed.data.email,
      name: parsed.data.name,
      date_from: parsed.data.date_from,
      date_to: parsed.data.date_to,
      apartment: parsed.data.apartment,
      childBed: parsed.data.childBed,
      guests: parsed.data.guests,
      message: parsed.data.message,
      phone: parsed.data.phone,
    }),
  });

  console.log(result);

  return {
    status: "success",
    fieldValues: rawData,
  };
}
