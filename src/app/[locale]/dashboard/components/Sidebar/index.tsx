"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { User2, ChevronLeft, ChevronRight, Menu, X } from "lucide-react";
import { navItems } from "@/constants";
import clsx from "clsx";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Sidebar() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleMobileToggle = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsMobileOpen(false);
    }
  };

  // Mobil cihazlarda overlay sidebar
  if (isMobile) {
    return (
      <>
        {/* Hamburger Menü Butonu */}
        <button
          onClick={handleMobileToggle}
          className="fixed top-4 left-4 z-50 p-2 bg-white border border-gray-200 rounded-lg shadow-lg hover:bg-gray-50 transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Overlay */}
        {isMobileOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={handleMobileToggle}
          />
        )}

        {/* Mobil Sidebar */}
        <aside
          className={clsx(
            "fixed top-0 left-0 h-full bg-white border-r z-50 transition-transform duration-300 ease-in-out flex flex-col",
            isMobileOpen ? "translate-x-0" : "-translate-x-full",
            "w-64"
          )}
        >
          {/* Header */}
          <div className="relative flex flex-col items-center justify-center flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="DairySense"
              width={100}
              height={100}
              className="object-contain "
            />
            <button
              onClick={handleMobileToggle}
              className="absolute top-2 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Kapat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menü - Scrollable */}
          <nav className="flex-1 px-4 py-2 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      onClick={handleLinkClick}
                      className={clsx(
                        "flex items-center gap-3 px-2 py-3 rounded-lg transition-colors text-base",
                        pathname === item.path
                          ? "bg-gray-100 font-semibold"
                          : "hover:bg-gray-50"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Kullanıcı - Sabit Alt */}
          <div className="flex items-center gap-3 p-4 border-t bg-white flex-shrink-0">
            <div className="bg-gray-200 rounded-full p-1">
              <User2 className="w-6 h-6 text-gray-500" />
            </div>
            <span className="text-sm font-medium">Vet. Furkan Acar</span>
          </div>
        </aside>
      </>
    );
  }

  // Desktop sidebar (mevcut kod)
  return (
    <aside
      className={clsx(
        "flex flex-col h-screen bg-white border-r rounded-tr-2xl rounded-br-2xl transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-gray-200 relative">
        {!isCollapsed && (
          <Link href="/">
            <span className="text-3xl font-bold">DairySense</span>
          </Link>
        )}

        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 rounded-full p-1.5 hover:bg-gray-50 transition-colors shadow-sm"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Menü */}
      <nav className="flex-1 px-3 py-2">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={clsx(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    pathname === item.path
                      ? "bg-blue-50 text-blue-700 font-medium"
                      : "hover:bg-gray-50 text-gray-700",
                    isCollapsed && "justify-center px-2"
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <Icon
                    className={clsx(
                      "transition-all duration-200",
                      isCollapsed ? "w-6 h-6" : "w-5 h-5",
                      pathname === item.path ? "text-blue-600" : "text-gray-500"
                    )}
                  />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.name}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Kullanıcı */}
      <div
        className={clsx(
          "flex items-center gap-3 p-4  ",
          isCollapsed && "justify-center"
        )}
      >
        <div className="bg-white rounded-full p-1.5 shadow-sm">
          <User2 className="w-5 h-5 text-gray-600" />
        </div>
        {!isCollapsed && (
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-900">
              Vet. Furkan Acar
            </span>
          </div>
        )}
      </div>
    </aside>
  );
}
