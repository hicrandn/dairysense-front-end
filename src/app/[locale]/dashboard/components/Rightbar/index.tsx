import Link from "next/link";
import { User2, X } from "lucide-react";
import { notifications, actions, doctors } from "@/app/constants/rightbar-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsMobile } from "@/hooks/use-mobile";
import clsx from "clsx";

interface RightbarProps {
  isVisible?: boolean;
  onClose?: () => void;
}

// Ortak içerik bileşeni
const RightbarContent = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex-1 overflow-y-auto hide-scrollbar h-[calc(100vh-64px)]">
      {/* Bildirimler Container */}
      <div className="px-4 py-1 border-gray-200">
        <ul className="space-y-1">
          {notifications.map((n, i) => {
            const IconComponent = n.icon;
            return (
              <li key={i}>
                {isMobile ? (
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 text-sm hover:bg-blue-50 dark:hover:bg-blue-950/20 w-full group"
                  >
                    <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    <div className="flex-1">
                      <div className="font-medium">{n.text}</div>
                      <div className="text-xs text-muted-foreground">
                        {n.time}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 text-sm hover:bg-blue-50 dark:hover:bg-blue-950/20 w-full group"
                      >
                        <IconComponent className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                        <div className="flex-1">
                          <div className="font-medium">{n.text}</div>
                          <div className="text-xs text-muted-foreground">
                            {n.time}
                          </div>
                        </div>
                      </Link>
                    </PopoverTrigger>
                    <PopoverContent
                      side="left"
                      align="start"
                      className="w-80 p-4 space-y-2 border-border/50 shadow-lg"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <IconComponent className="w-4 h-4 text-primary" />
                          <h4 className="font-semibold text-sm">
                            Bildirim Detayı
                          </h4>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-foreground leading-relaxed">
                            {n.text}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {n.time}
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                              Yeni
                            </span>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Son İşlemler Container */}
      <div className="px-4 py-1">
        <h3 className="text-base font-semibold mb-3 text-foreground">
          Son İşlemler
        </h3>
        <ul className="space-y-1">
          {actions.map((a, i) => {
            return (
              <li key={i}>
                {isMobile ? (
                  <Link
                    href="#"
                    className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 text-sm hover:bg-blue-50 dark:hover:bg-blue-950/20 w-full group"
                  >
                    <Avatar className="w-8 h-8 ring-2 ring-background">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback className="bg-secondary text-secondary-foreground group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 transition-colors"></AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-medium">{a.text}</div>
                      <div className="text-xs text-muted-foreground">
                        {a.time}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <Popover>
                    <PopoverTrigger asChild>
                      <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 text-sm hover:bg-blue-50 dark:hover:bg-blue-950/20 w-full group"
                      >
                        <Avatar className="w-8 h-8 ring-2 ring-background">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback className="bg-secondary text-secondary-foreground group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 transition-colors"></AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="font-medium">{a.text}</div>
                          <div className="text-xs text-muted-foreground">
                            {a.time}
                          </div>
                        </div>
                      </Link>
                    </PopoverTrigger>
                    <PopoverContent
                      side="left"
                      align="start"
                      className="w-80 p-4 space-y-2 border-border/50 shadow-lg"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-secondary text-secondary-foreground"></AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-sm">
                              İşlem Detayı
                            </h4>
                            <p className="text-xs text-muted-foreground">
                              Kullanıcı işlemi
                            </p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm text-foreground leading-relaxed">
                            {a.text}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {a.time}
                            </span>
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400">
                              Tamamlandı
                            </span>
                          </div>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Hekimler Container */}
      <div className="px-4 py-1">
        <h3 className="text-base font-semibold mb-3 text-foreground">
          Hekimler
        </h3>
        <ul className="space-y-1">
          {doctors.map((d, i) => (
            <li key={i}>
              {isMobile ? (
                <Link
                  href="#"
                  className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 text-sm hover:bg-blue-50 dark:hover:bg-blue-950/20 w-full group"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 transition-colors">
                    <User2 className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <span className="font-medium text-foreground">
                      {d.name}
                    </span>
                  </div>
                </Link>
              ) : (
                <Popover>
                  <PopoverTrigger asChild>
                    <Link
                      href="#"
                      className="flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 text-sm hover:bg-blue-50 dark:hover:bg-blue-950/20 w-full group"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary group-hover:bg-blue-100 dark:group-hover:bg-blue-900/20 transition-colors">
                        <User2 className="w-4 h-4 text-muted-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <span className="font-medium text-foreground">
                          {d.name}
                        </span>
                      </div>
                    </Link>
                  </PopoverTrigger>
                  <PopoverContent
                    side="left"
                    align="start"
                    className="w-80 p-4 space-y-2 border-border/50 shadow-lg"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                          <User2 className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">
                            Hekim Bilgileri
                          </h4>
                          <p className="text-xs text-muted-foreground">
                            Veteriner hekimi
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">
                          {d.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          <span className="text-xs text-muted-foreground">
                            Aktif
                          </span>
                        </div>
                        <div className="pt-2 border-t border-border/50">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">
                              Son aktivite
                            </span>
                            <span className="text-foreground">2 saat önce</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Header bileşeni
const RightbarHeader = ({
  onClose,
  isMobile = false,
}: {
  onClose?: () => void;
  isMobile?: boolean;
}) => (
  <div
    className={clsx(
      "flex items-center justify-between px-4 py-3",
      isMobile ? "border-b border-border" : "pt-4 border-border"
    )}
  >
    <h2
      className={clsx(
        "font-semibold text-foreground",
        isMobile ? "text-lg" : "text-base mb-2"
      )}
    >
      Bildirimler
    </h2>
    {isMobile && onClose && (
      <button
        onClick={onClose}
        className="p-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
      >
        <X className="w-5 h-5" />
      </button>
    )}
  </div>
);

export default function Rightbar({ isVisible = true, onClose }: RightbarProps) {
  return (
    <>
      {/* Desktop Rightbar */}
      <aside
        className={clsx(
          "hidden lg:block fixed right-0 top-0 h-screen bg-background border-l w-64 z-30 transform transition-transform duration-300 ease-in-out",
          isVisible ? "translate-x-0" : "translate-x-full"
        )}
      >
        <RightbarHeader />
        <RightbarContent />
      </aside>

      {/* Mobil/Tablet Rightbar */}
      {isVisible && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 z-40 lg:hidden " onClick={onClose} />
          {/* Mobil Rightbar */}
          <aside className="fixed right-0 top-0 h-full w-64 bg-background border-l border-border z-50 lg:hidden shadow-lg animate-in slide-in-from-right duration-500">
            <RightbarHeader onClose={onClose} isMobile />
            <RightbarContent />
          </aside>
        </>
      )}
    </>
  );
}
