import Link from "next/link";
import clsx from "clsx";
import { User2 } from "lucide-react";
import { notifications, actions, doctors } from "@/constants/rightbar-data";

export default function Rightbar() {
  return (
    <aside
      className={clsx(
        "hidden lg:flex flex-col h-screen bg-white border-l  w-64 p-0 right-0 top-0 z-30 "
      )}
    >
      {/* Ana Container */}
      <div className="flex flex-col h-full">
        {/* Bildirimler Container */}
        <div className="flex-1 px-4 mt-2">
          <h2 className="text-base font-semibold h-12 border-b border-gray-200 flex items-center justify-start">
            Bildirimler
          </h2>
          <ul className="space-y-1 ">
            {notifications.map((n, i) => {
              const IconComponent = n.icon;
              return (
                <li key={i}>
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-2 py-3 rounded-lg transition-colors text-sm hover:bg-blue-50 w-full group"
                  >
                    <IconComponent className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    <div>
                      <div>{n.text}</div>
                      <div className="text-xs text-gray-400">{n.time}</div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Son İşlemler Container */}
        <div className="flex-1 px-4 pt-2">
          <h2 className="text-base font-semibold mb-2">Son İşlemler</h2>
          <ul className="space-y-1 ">
            {actions.map((a, i) => {
              const IconComponent = a.icon;
              return (
                <li key={i}>
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-2 py-3 rounded-lg transition-colors text-sm hover:bg-blue-50 w-full group"
                  >
                    <IconComponent className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    <div>
                      <div>{a.text}</div>
                      <div className="text-xs text-gray-400">{a.time}</div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Hekimler Container */}
        <div className="flex-1 px-4 mt-auto">
          <h2 className="text-base font-semibold mb-2">Hekimler</h2>
          <ul className="space-y-1">
            {doctors.map((d, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="flex items-center gap-3 px-2 py-3 rounded-lg transition-colors text-base hover:bg-blue-50 w-full group"
                >
                  <span className="bg-gray-200 rounded-full p-1 group-hover:bg-blue-100 transition-colors">
                    <User2 className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                  </span>
                  <span className="text-sm font-medium">{d.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
