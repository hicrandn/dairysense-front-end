import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
      <Link
        href="/about"
        className="text-blue-600 hover:text-blue-800 underline"
      >
        {t("about")}
      </Link>
    </div>
  );
}
