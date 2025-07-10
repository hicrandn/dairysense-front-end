import {
  LayoutDashboard,
  FileText,
  Folder,
  IdCard,
  Settings,
  Users,
  BookOpen,
  Calendar,
} from "lucide-react";

export const sidebarMenu = [
  {
    label: "Kontrol Paneli",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Raporlar",
    href: "/reports",
    icon: FileText,
  },
  {
    label: "Protokoller",
    href: "/protocols",
    icon: Folder,
  },
  {
    label: "Tanımlı Olaylar",
    href: "/defined-events",
    icon: IdCard,
  },
  {
    label: "Ayarlar",
    href: "/settings",
    icon: Settings,
  },
  {
    label: "Tanımlanmış Olaylar",
    href: "/defined-incidents",
    icon: Users,
  },
  {
    label: "Tedaviler",
    href: "/treatments",
    icon: BookOpen,
  },
  {
    label: "Ajanda",
    href: "/agenda",
    icon: Calendar,
  },
];
