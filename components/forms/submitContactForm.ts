"use server";

import { ContactFormData, contactFormSchema } from "@/lib/schemas";
import { FormResult } from "@/lib/types";
import z from "zod";

export async function submitContactForm(
  prevState: FormResult<ContactFormData>,
  formData: FormData
): Promise<FormResult<ContactFormData>> {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
  };

  console.log(rawData);

  const schema = await contactFormSchema();

  const parsed = schema.safeParse(rawData);

  console.log(JSON.stringify(parsed));

  if (!parsed.success) {
    console.log(z.treeifyError(parsed.error).properties);
    return {
      success: false,
      errors: z.treeifyError(parsed.error).properties,
      fieldValues: rawData,
    };
  }

  //   const supabase = await createClient();

  //   const headersList = await headers();
  //   const origin = headersList.get("origin") || "";

  //   const { error } = await supabase.auth.signUp({
  //     email: parsed.data.email,
  //     password: parsed.data.password,
  //     options: {
  //       data: {
  //         first_name: parsed.data.first_name,
  //         last_name: parsed.data.last_name,
  //       },
  //       emailRedirectTo: origin,
  //     },
  //   });

  //   if (error) {
  //     console.error(error);

  //     return {
  //       success: false,
  //       fieldValues: rawData,
  //     };
  //   }

  return {
    success: true,
    fieldValues: rawData,
  };
}
