"use client";
import React from "react";

import { Menu, Star, Sun, Clock, Bell, Layout, Search, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

const Header = () => {
  const isMobile = useIsMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="h-16 flex items-center justify-between px-4 lg:px-6 bg-white border-b shadow-sm relative z-40">
      {/* Sol kısım - Flex ile esnek */}
      <div className="flex items-center gap-2 lg:gap-3 flex-1 min-w-0">
        {/* Mobil menü butonu - sadece mobilde görünür */}
        {isMobile && (
          <button className="p-1 hover:bg-gray-100 rounded-md transition-colors">
            <Menu className="w-5 h-5 text-gray-500" />
          </button>
        )}

        {/* Desktop breadcrumb */}
        {!isMobile && (
          <>
            <Star className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <span className="text-gray-400 mx-2 text-sm lg:text-base">
              Kontrol Paneli
            </span>
            <span className="text-gray-300 text-sm lg:text-base">/</span>
            <span className="text-gray-700 font-medium text-sm lg:text-base">
              Varsayılan
            </span>
          </>
        )}
      </div>

      {/* Orta kısım - Arama (mobilde tam genişlik) */}
      <div className={`flex items-center ${isMobile ? "flex-1 mx-2" : "mx-4"}`}>
        {isMobile ? (
          // Mobil arama - toggle ile açılır
          <div className="flex-1 relative">
            {isSearchOpen ? (
              <div className="flex items-center bg-gray-100 rounded-md px-3 py-1">
                <Search className="w-4 h-4 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="İnek Ara"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 p-1 hover:bg-gray-200 rounded"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center justify-center bg-gray-100 rounded-md px-3 py-2 text-gray-400 hover:bg-gray-200 transition-colors"
              >
                <Search className="w-4 h-4 mr-2" />
                <span className="text-sm">Ara</span>
              </button>
            )}
          </div>
        ) : (
          // Desktop arama
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="İnek Ara"
              className="bg-gray-100 rounded-md pl-10 pr-3 py-1.5 text-sm outline-none placeholder:text-gray-400 w-48 lg:w-64 focus:bg-white border border-transparent focus:border-gray-300 transition-all"
            />
          </div>
        )}
      </div>

      {/* Sağ kısım - Responsive icon grubu */}
      <div className="flex items-center gap-2 lg:gap-4 flex-shrink-0">
        {/* Desktop'ta tüm ikonlar, mobilde sadece önemli olanlar */}
        {!isMobile && (
          <>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Sun className="w-5 h-5 text-gray-500" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
              <Clock className="w-5 h-5 text-gray-500" />
            </button>
          </>
        )}

        {/* Bildirimler - her zaman görünür */}
        <button className="relative p-2 hover:bg-gray-100 rounded-md transition-colors">
          <Bell className="w-5 h-5 text-gray-500" />
          {/* Bildirim badge'i */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Layout - her zaman görünür */}
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
          <Layout className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </header>
  );
};

export default Header;
