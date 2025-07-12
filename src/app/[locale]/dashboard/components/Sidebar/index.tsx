"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/constants";
import clsx from "clsx";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Sidebar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  // Mobil cihazlarda sadece ikonların göründüğü sidebar
  if (isMobile) {
    return (
      <aside className=" h-screen fixed top-0 left-0  bg-white border-r z-50 w-20 flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-center h-16 border-b border-gray-200">
          <span className="text-lg font-bold">DS</span>
        </div>

        {/* Menü - Sadece İkonlar */}
        <nav className="flex-1 px-2 py-2">
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

        {/* Kullanıcı - Sadece İkon */}
        <div className="flex items-center justify-center p-4 border-t bg-white">
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
    <aside className="flex flex-col h-screen bg-white border-r w-48 lg:w-56 xl:w-64">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <Link href="/">
          <span className="text-2xl lg:text-3xl font-bold">DairySense</span>
        </Link>
      </div>

      {/* Menü */}
      <nav className="flex-1 px-2 py-2">
        <ul className="space-y-2">
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
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Kullanıcı */}
      <div className="flex items-center gap-3 p-4 hover:bg-blue-50 transition-colors group mt-auto">
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
