import { getTranslations } from "next-intl/server";

export default async function AboutSection() {
  const t = await getTranslations("about");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-green-800 mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-700 mb-6">{t("description1")}</p>
            <p className="text-lg text-gray-700 mb-6">{t("description2")}</p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-700">2</div>
                <div className="text-sm text-gray-600">{t("apartments")}</div>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-green-700">45m²</div>
                <div className="text-sm text-gray-600">{t("size")}</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/huis.JPG?height=400&width=600"
              alt="Boerderij de Windroos"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
