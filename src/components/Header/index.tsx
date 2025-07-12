"use client";
import React from "react";

import {
  Menu,
  Star,
  Sun,
  Clock,
  Bell,
  PanelLeftDashed,
  Search,
  X,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

interface HeaderProps {
  onNotificationClick?: () => void;
  onMenuClick?: () => void;
}

const Header = ({ onNotificationClick, onMenuClick }: HeaderProps) => {
  const isMobile = useIsMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="h-16 flex items-center justify-between px-2 md:px-4 bg-white border-b relative z-40 w-full flex-shrink-0">
      {/* Sol kısım - Sadece ikon ve breadcrumb */}
      <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
        {/* Mobil menü butonu */}
        {isMobile && (
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors sm:hidden"
          >
            <Menu className="w-5 h-5 text-gray-500" />
          </button>
        )}
        {/* Sol başa Layout ikonu - sadece masaüstü */}
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors hidden sm:inline-flex">
          <PanelLeftDashed className="w-5 h-5 text-gray-500" />
        </button>
        {/* Breadcrumb */}
        <Star className="w-5 h-5 text-gray-500 flex-shrink-0" />
        <span className="text-gray-400 text-sm font-normal hidden sm:inline">
          Kontrol Paneli
        </span>
        <span className="text-gray-300 text-sm hidden sm:inline">/</span>
        <span className="text-gray-700 font-medium text-sm truncate">
          Varsayılan
        </span>
      </div>

      {/* Orta kısım - Arama */}
      <div className="flex-1 flex justify-center mx-2">
        {isMobile ? (
          <div className="w-full">
            {isSearchOpen ? (
              <div className="flex items-center bg-gray-100 rounded-md px-3 py-2">
                <Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="İnek Ara"
                  className="flex-1 bg-transparent text-base outline-none placeholder:text-gray-400 min-w-0"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 p-1.5 hover:bg-gray-200 rounded flex-shrink-0"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center justify-center bg-gray-100 rounded-md px-3 py-2 text-gray-400 hover:bg-gray-200 transition-colors"
              >
                <Search className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-base">Ara</span>
              </button>
            )}
          </div>
        ) : (
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="İnek Ara"
              className="bg-gray-100 rounded-md pl-10 pr-3 py-2 text-sm outline-none placeholder:text-gray-400 w-full focus:bg-white border border-transparent focus:border-gray-300 transition-all"
            />
          </div>
        )}
      </div>

      {/* Sağ kısım - Sadece ikonlar */}
      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        {/* Sadece masaüstünde görünür */}
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors hidden sm:inline-flex">
          <Sun className="w-5 h-5 text-gray-500" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors hidden sm:inline-flex">
          <Clock className="w-5 h-5 text-gray-500" />
        </button>
        {/* Bildirimler - her zaman görünür */}
        <button
          onClick={onNotificationClick}
          className="relative p-2 hover:bg-gray-100 rounded-md transition-colors"
        >
          <Bell className="w-5 h-5 text-gray-500" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>
        {/* Layout ikonu - sadece masaüstünde görünür */}
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors hidden sm:inline-flex">
          <PanelLeftDashed className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </header>
  );
};

export default Header;
