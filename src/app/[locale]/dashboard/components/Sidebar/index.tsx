"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link as IntlLink } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { navItems } from "@/app/[locale]/constants/sidebar.menu";
import clsx from "clsx";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Sidebar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("sidebar");

  // Mevcut locale'e göre seçili dili belirle
  const getCurrentLanguage = () => {
    return locale === "tr" ? "TR" : "EN";
  };

  const languages = [
    { code: "TR", name: t("languages.tr"), locale: "tr" },
    { code: "EN", name: t("languages.en"), locale: "en" },
  ];

  const toggleLanguageMenu = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  // Mobil cihazlarda sadece ikonların göründüğü sidebar
  if (isMobile) {
    return (
      <aside className="fixed top-0 left-0 bg-white border-r z-50 w-16  flex flex-col h-screen">
        {/* Logo */}
        <div className="flex items-center justify-center h-16 border-b border-gray-200 flex-shrink-0">
          <span className="text-lg font-bold">DS</span>
        </div>

        {/* Menü - Sadece İkonlar */}
        <nav className="flex-1 px-2 py-2 overflow-auto">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={clsx(
                      "flex items-center justify-center p-3 rounded-lg transition-colors",
                      pathname === item.path
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-50 text-gray-700"
                    )}
                  >
                    <Icon
                      className={clsx(
                        "w-5 h-5 transition-colors",
                        pathname === item.path
                          ? "text-blue-600"
                          : "text-gray-500 hover:text-blue-600"
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Dil Değiştirici - Mobil */}
        <div className="flex items-center justify-center p-2  border-gray-200">
          <button
            onClick={toggleLanguageMenu}
            className="flex items-center justify-center p-2 rounded-lg hover:bg-gray-50 transition-colors relative"
          >
            <ReactCountryFlag
              countryCode={locale === "tr" ? "TR" : "US"}
              svg
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "2px",
              }}
            />
            {isLanguageOpen && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
                {languages.map((language) => (
                  <IntlLink
                    key={language.code}
                    href="/dashboard"
                    locale={language.locale}
                    onClick={() => setIsLanguageOpen(false)}
                    className={`flex items-center justify-center gap-1 w-full px-3 py-1 text-xs hover:bg-blue-50 transition ${
                      getCurrentLanguage() === language.code
                        ? "bg-blue-100 text-blue-700 font-medium"
                        : "text-gray-700"
                    }`}
                  >
                    <ReactCountryFlag
                      countryCode={language.locale === "tr" ? "TR" : "US"}
                      svg
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "1px",
                      }}
                    />
                    {language.code}
                  </IntlLink>
                ))}
              </div>
            )}
          </button>
        </div>

        {/* Kullanıcı - Sadece İkon */}

        <div className="flex items-center justify-center p-4  bg-white flex-shrink-0">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>FA</AvatarFallback>
          </Avatar>
        </div>
      </aside>
    );
  }

  // Desktop sidebar - responsive genişlik
  return (
    <aside className="flex flex-col h-screen bg-white border-r w-40 lg:w-48 xl:w-52  flex-shrink-0">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-gray-200 flex-shrink-0">
        <Link href="/">
          <span className="text-2xl lg:text-3xl font-bold">DairySense</span>
        </Link>
      </div>

      {/* Menü */}
      <nav className="flex-1 px-2 py-2 overflow-auto">
        <ul className="space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
                    pathname === item.path
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "hover:bg-blue-50 text-gray-700 "
                  )}
                >
                  <Icon
                    className={clsx(
                      "w-5 h-5 transition-all duration-200",
                      pathname === item.path
                        ? "text-blue-600"
                        : "text-gray-500 group-hover:text-blue-600"
                    )}
                  />
                  <span className="text-sm font-medium">{t(item.nameKey)}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Dil Değiştirici - Desktop */}
      <div className="px-3 py-2 border-gray-200">
        <button
          onClick={toggleLanguageMenu}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors group relative"
        >
          <ReactCountryFlag
            countryCode={locale === "tr" ? "TR" : "US"}
            svg
            style={{
              width: "16px",
              height: "16px",
              borderRadius: "2px",
            }}
          />
          <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700">
            {getCurrentLanguage()}
          </span>
          <ChevronDown
            className={clsx(
              "w-3 h-3 text-gray-400 transition-transform",
              isLanguageOpen ? "rotate-180" : ""
            )}
          />
          {isLanguageOpen && (
            <div className="absolute bottom-full left-0 w-full mb-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
              {languages.map((language) => (
                <IntlLink
                  key={language.code}
                  href="/dashboard"
                  locale={language.locale}
                  onClick={() => setIsLanguageOpen(false)}
                  className={`flex items-center gap-2 w-full text-left px-3 py-2 text-sm hover:bg-blue-50 transition ${
                    getCurrentLanguage() === language.code
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  <ReactCountryFlag
                    countryCode={language.locale === "tr" ? "TR" : "US"}
                    svg
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "2px",
                    }}
                  />
                  {language.name}
                </IntlLink>
              ))}
            </div>
          )}
        </button>
      </div>

      {/* Kullanıcı */}
      <div className="flex items-center gap-3 p-4 hover:bg-blue-50 transition-colors group flex-shrink-0">
        <Avatar className="w-8 h-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>FA</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-gray-900">
            Vet. Furkan Acar
          </span>
        </div>
      </div>
    </aside>
  );
}
