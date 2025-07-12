"use client";
import React from "react";

import {
  Menu,
  Star,
  Clock,
  Bell,
  PanelLeftDashed,
  Search,
  X,
  Cloudy,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import WeatherWidget from "@/components/WeatherWidget";

interface HeaderProps {
  onNotificationClick?: () => void;
  onMenuClick?: () => void;
}

const Header = ({ onNotificationClick, onMenuClick }: HeaderProps) => {
  const isMobile = useIsMobile();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWeatherOpen, setIsWeatherOpen] = useState(false);

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
          <div className="w-full max-w-sm">
            {isSearchOpen ? (
              <div className="flex items-center bg-gray-100 rounded-md px-3 py-2 animate-in slide-in-from-top-2 duration-300 ease-out">
                <Search className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="İnek Ara"
                  className="flex-1 bg-transparent text-base outline-none placeholder:text-gray-400 min-w-0"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="ml-2 p-1.5 hover:bg-gray-200 rounded flex-shrink-0 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="w-full flex items-center justify-center bg-gray-100 rounded-md px-3 py-2 text-gray-400 hover:bg-gray-200 transition-colors animate-in fade-in duration-200"
              >
                <Search className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="text-base">Ara</span>
              </button>
            )}
          </div>
        ) : (
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-400" />
            <input
              type="text"
              placeholder="İnek Ara"
              className="bg-gray-100 rounded-md pl-10 pr-3 py-2 text-sm outline-none placeholder:text-gray-400 w-full focus:bg-white border border-transparent focus:border-gray-300 transition-all duration-200 ease-out"
            />
          </div>
        )}
      </div>

      {/* Sağ kısım - Sadece ikonlar */}
      <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
        {/* Hava Durumu Widget'ı */}
        <div className="relative">
          <button
            onClick={() => setIsWeatherOpen(!isWeatherOpen)}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            <Cloudy className="w-5 h-5 text-gray-500" />
          </button>
          {isWeatherOpen && (
            <div
              className="absolute top-full right-0 mt-2 z-50 animate-in fade-in-0 zoom-in-95 duration-200 ease-out"
              style={{
                animation: "fadeInScale 0.2s ease-out",
              }}
            >
              <WeatherWidget />
            </div>
          )}
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-md transition-colors hidden sm:inline-flex">
          <Clock className="w-5 h-5 text-gray-500" />
        </button>
        {/* Bildirimler - her zaman görünür */}
        <button
          onClick={onNotificationClick}
          className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
        >
          <Bell className="w-5 h-5 text-gray-500" />
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
