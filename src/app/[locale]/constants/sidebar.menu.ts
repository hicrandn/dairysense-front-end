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
    nameKey: "dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    nameKey: "reports",
    path: "/reports",
    icon: FileText,
  },
  {
    nameKey: "protocols",
    path: "/protocols",
    icon: Folder,
  },
  {
    nameKey: "definedEvents",
    path: "/defined-events",
    icon: IdCard,
  },
  {
    nameKey: "settings",
    path: "/settings",
    icon: Settings,
  },
  {
    nameKey: "definedIncidents",
    path: "/defined-incidents",
    icon: Users,
  },
  {
    nameKey: "treatments",
    path: "/treatments",
    icon: BookOpen,
  },
  {
    nameKey: "agenda",
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
