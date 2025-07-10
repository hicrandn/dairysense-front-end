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

export const navItems = [
  {
    name: "Kontrol Paneli",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Raporlar",
    path: "/reports",
    icon: FileText,
  },
  {
    name: "Protokoller",
    path: "/protocols",
    icon: Folder,
  },
  {
    name: "Tanımlı Olaylar",
    path: "/defined-events",
    icon: IdCard,
  },
  {
    name: "Ayarlar",
    path: "/settings",
    icon: Settings,
  },
  {
    name: "Tanımlanmış Olaylar",
    path: "/defined-incidents",
    icon: Users,
  },
  {
    name: "Tedaviler",
    path: "/treatments",
    icon: BookOpen,
  },
  {
    name: "Ajanda",
    path: "/agenda",
    icon: Calendar,
  },
];

export const logoConfig = {
  src: "/images/logo.png",
  alt: "DairySense Logo",
  width: 150,
  height: 150,
};
