import { NavItem } from "./nav-item";
import { MdHome, MdSchool, MdPeople } from "react-icons/md";

export const AdminNavItems: NavItem[] = [
  {
    href: "/",
    name: "Home",
    root: true,
    icon: MdHome,
  },
  {
    href: "/courses",
    name: "Courses",
    icon: MdSchool,
    subRoutes: [
      {
        href: "/courses",
        name: "Courses",
      },
      {
        href: "/courses/periods",
        name: "Periods",
      },
      {
        href: "/courses/classes",
        name: "Classes",
      },
    ],
  },
  {
    href: "/users",
    name: "Users",
    icon: MdPeople,
  },
];
