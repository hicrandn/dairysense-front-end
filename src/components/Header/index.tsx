import React from "react";
import { Menu, Star, Sun, Clock, Bell, Layout } from "lucide-react";

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-white border-b shadow-sm w-64">
      {/* Sol kısım */}
      <div className="flex items-center gap-3">
        <Menu className="w-5 h-5 text-gray-500" />
        <Star className="w-5 h-5 text-gray-500" />
        <span className="text-gray-400 mx-2">Kontrol Paneli</span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-700 font-medium">Varsayılan</span>
      </div>
      {/* Sağ kısım */}
      <div className="flex items-center gap-4">
        {/* Arama kutusu */}
        <input
          type="text"
          placeholder="İnek Ara"
          className="bg-gray-100 rounded-md px-3 py-1 text-sm outline-none placeholder:text-gray-400 w-32 focus:bg-white border border-transparent focus:border-gray-300 transition"
          disabled
        />
        <Sun className="w-5 h-5 text-gray-500 cursor-pointer" />
        <Clock className="w-5 h-5 text-gray-500 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
        <Layout className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
