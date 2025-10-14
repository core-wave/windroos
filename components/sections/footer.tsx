import { getTranslations } from "next-intl/server";

export default async function FooterSection() {
  const t = await getTranslations("footer");

  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">{t("title")}</h3>
            <p className="text-green-100 mb-2">
              {t("address.street")}
              <br />
              {t("address.postal")}
              <br />
              {t("address.country")}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("contact.title")}</h4>
            <p className="text-green-100 mb-1">{t("contact.name")}</p>
            <p className="text-green-100 mb-1">{t("contact.phone")}</p>
            <p className="text-green-100">{t("contact.email")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("business.title")}</h4>
            <p className="text-green-100 mb-1">{t("business.owner")}</p>
            <p className="text-green-100">{t("business.kvk")}</p>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-100">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
