import {
  FiMonitor,
  FiGrid,
  FiUsers,
  FiEdit,
  FiTerminal,
  FiSettings,
  FiBook,
  FiMail,
} from "react-icons/fi";

export const SidebarMainData = [
  {
    title: "Dashboard",
    path: "/root/dashboard",
    icon: <FiGrid size={24} />,
  },
  {
    title: "Campaign",
    path: "/root/campaign",
    icon: <FiMonitor size={24} />,
  },
  {
    title: "Email Template",
    path: "/root/email-template",
    icon: <FiEdit size={24} />,
  },
  {
    title: "Users & Groups",
    path: "/root/user-groups",
    icon: <FiUsers size={24} />,
  },
  {
    title: "Landing Page",
    path: "/root/landing-page",
    icon: <FiTerminal size={24} />,
  },
  {
    title: "Sending Profile",
    path: "/root/sending-profile",
    icon: <FiMail size={24} />,
  },
];

export const SidebarSettingsData = [
  {
    title: "Help & Support",
    path: "/root/help",
    icon: <FiBook size={24} />,
  },
  {
    title: "Settings",
    path: "/root/settings",
    icon: <FiSettings size={24} />,
  },
];
