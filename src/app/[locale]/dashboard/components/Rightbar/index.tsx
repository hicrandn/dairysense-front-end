import Link from "next/link";
import { User2, X } from "lucide-react";
import {
  notifications,
  actions,
  doctors,
} from "@/app/[locale]/constants/rightbar-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface RightbarProps {
  isVisible?: boolean;
  onClose?: () => void;
}

export default function Rightbar({ isVisible = true, onClose }: RightbarProps) {
  return (
    <>
      {/* Desktop Rightbar */}
      <aside
        className={`hidden lg:block fixed right-0 top-0 h-screen bg-white border-l w-64 z-30 transform transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 pt-4 border-gray-200 ">
          <h2 className="text-base font-semibold mb-2">Bildirimler</h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto hide-scrollbar h-[calc(100vh-64px)]">
          {/* Bildirimler Container */}
          <div className="px-4 py-2  border-gray-200">
            <ul className="space-y-1">
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
          <div className="px-4 py-2  ">
            <h3 className="text-base font-semibold mb-2">Son İşlemler</h3>
            <ul className="space-y-1">
              {actions.map((a, i) => {
                return (
                  <li key={i}>
                    <Link
                      href="#"
                      className="flex items-center gap-3 px-2 py-3 rounded-lg transition-colors text-sm hover:bg-blue-50 w-full group"
                    >
                      <Avatar className="w-6 h-6">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-gray-200 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors"></AvatarFallback>
                      </Avatar>
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
          <div className="px-4 py-2">
            <h3 className="text-base font-semibold mb-2">Hekimler</h3>
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

      {/* Mobil/Tablet Rightbar Overlay */}
      {isVisible && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0  z-40 lg:hidden" onClick={onClose} />
          {/* Mobil Rightbar */}
          <aside className="fixed right-0 top-0 h-full w-64 bg-white border-l z-50 lg:hidden shadow-lg transform transition-transform duration-300 ease-in-out">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Bildirimler</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)]">
              {/* Bildirimler Container */}
              <div className="px-4 py-2 border-b border-gray-200">
                <ul className="space-y-1">
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
                            <div className="text-xs text-gray-400">
                              {n.time}
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Son İşlemler Container */}
              <div className="px-4 py-2 border-b border-gray-200">
                <h3 className="text-base font-semibold mb-2">Son İşlemler</h3>
                <ul className="space-y-1">
                  {actions.map((a, i) => {
                    const IconComponent = a.icon;
                    return (
                      <li key={i}>
                        <Link
                          href="#"
                          className="flex items-center gap-3 px-2 py-3 rounded-lg transition-colors text-sm hover:bg-blue-50 w-full group"
                        >
                          <Avatar className="w-6 h-6">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-gray-200 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">
                              <IconComponent className="w-3 h-3" />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div>{a.text}</div>
                            <div className="text-xs text-gray-400">
                              {a.time}
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Hekimler Container */}
              <div className="px-4 py-2">
                <h3 className="text-base font-semibold mb-2">Hekimler</h3>
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
        </>
      )}
    </>
  );
}
