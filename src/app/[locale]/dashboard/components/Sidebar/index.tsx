"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { User2 } from "lucide-react";
import { sidebarMenu } from "./sidebarMenuData";
import clsx from "clsx";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex flex-col h-screen w-64 bg-white border-r rounded-tr-2xl rounded-br-2xl">
      {/* Logo */}
      <div className="flex items-center justify-center h-24">
        <Image
          src="/dairysense-logo.svg"
          alt="DairySense"
          width={120}
          height={48}
          className="h-12 w-auto"
        />
      </div>
      {/* Menü */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {sidebarMenu.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={clsx(
                    "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                    pathname === item.href
                      ? "bg-gray-100 font-semibold"
                      : "hover:bg-gray-50"
                  )}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Kullanıcı */}
      <div className="flex items-center gap-2 p-4 border-t mt-4">
        <div className="bg-gray-200 rounded-full p-1">
          <User2 className="w-6 h-6 text-gray-500" />
        </div>
        <span className="text-sm font-medium">Vet. Furkan Acar</span>
      </div>
    </aside>
  );
}
