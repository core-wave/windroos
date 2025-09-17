import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "../forms/contact";

export default async function ContactSection() {
  const t = await getTranslations("contact");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-700">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-green-800">
                  {t("info.title")}
                </CardTitle>
                <CardDescription>{t("info.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">{t("info.phone")}</p>
                    <p className="text-sm text-gray-600">
                      {t("info.phoneNote")}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">{t("info.email")}</p>
                    <p className="text-sm text-gray-600">{t("info.contact")}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">{t("info.responseTitle")}</p>
                    <p className="text-sm text-gray-600">
                      {t("info.responseNote")}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <MessageCircle className="h-5 w-5" />
                  {t("whatsapp.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 mb-4">
                  {t("whatsapp.description")}
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  {t("whatsapp.button")}
                </Button>
              </CardContent>
            </Card>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
