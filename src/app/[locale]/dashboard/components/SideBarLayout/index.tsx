"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link as IntlLink } from "@/i18n/navigation";
import { ChevronDown } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { navItems } from "@/app/[locale]/constants/sidebar.menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import clsx from "clsx";

interface SidebarLayoutProps {
  children: React.ReactNode;
  rightbar?: React.ReactNode;
  isRightbarVisible?: boolean;
}

export default function SidebarLayout({
  children,
  rightbar,
  isRightbarVisible = true,
}: SidebarLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("sidebar");

  const handleNavigation = (path: string) => {
    router.push(path);
  };

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

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full ">
        <Sidebar collapsible="icon">
          {/* Header - Logo */}
          <SidebarHeader className="data-[collapsed=true]:hidden">
            <div className="flex items-center gap-3 px-2 py-4">
              <Image
                src="/images/logo.png"
                alt="DairySense Logo"
                className="h-10 w-10 rounded-lg "
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-gray-900">DairySense</h1>
                <p className="text-xs text-gray-500">Çiftlik Yönetimi</p>
              </div>
            </div>
          </SidebarHeader>

          {/* Content - Navigation Menu */}
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu className="space-y-3">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.path;

                    return (
                      <SidebarMenuItem key={item.nameKey} className="px-2">
                        <SidebarMenuButton
                          onClick={() => handleNavigation(item.path)}
                          isActive={isActive}
                          tooltip={t(item.nameKey)}
                          className={clsx(
                            "w-full justify-start gap-3 px-3 py-4 rounded-lg transition-all duration-200",
                            isActive
                              ? "bg-blue-50 text-gray-900 font-medium"
                              : "text-gray-700 hover:bg-blue-50"
                          )}
                        >
                          <Icon
                            className={clsx(
                              "h-10 w-10 transition-colors",
                              isActive
                                ? " text-gray-900"
                                : "text-gray-500 group-hover:text-blue-500"
                            )}
                          />
                          <span className="text-sm font-medium">
                            {t(item.nameKey)}
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          {/* Footer - User and Language Selection */}
          <SidebarFooter>
            <div className="space-y-3 ">
              {/* Language Selector */}
              <div className="relative ">
                <button
                  onClick={toggleLanguageMenu}
                  className="flex items-center gap-2 w-full px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
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
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 hidden md:inline">
                    {getCurrentLanguage()}
                  </span>
                  <ChevronDown
                    className={clsx(
                      "w-3 h-3 text-gray-400 transition-transform ml-auto hidden md:inline",
                      isLanguageOpen ? "rotate-180" : ""
                    )}
                  />
                </button>

                {isLanguageOpen && (
                  <div className="absolute bottom-full left-0 w-full mb-2 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50">
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
              </div>

              {/* User Profile */}
              <div className="flex items-center gap-3 pb-3 rounded-lg hover:bg-gray-50 transition-colors">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>FA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="text-sm font-medium text-gray-900 truncate hidden md:inline">
                    Vet. Furkan Acar
                  </span>
                  <span className="text-xs text-gray-500 hidden md:inline">
                    Veteriner Hekim
                  </span>
                </div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        <SidebarInset
          className={clsx(
            "relative transition-all duration-300 ease-in-out",
            isRightbarVisible ? "lg:mr-64" : "lg:mr-0"
          )}
        >
          {children}
        </SidebarInset>

        {/* Rightbar */}
        {rightbar}
      </div>
    </SidebarProvider>
  );
}
