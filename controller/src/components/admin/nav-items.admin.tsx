import { NavItem } from "../../models/nav-item";
import SchoolIcon from "@material-ui/icons/School";
import PeopleIcon from "@material-ui/icons/People";

export const AdminNavItems: NavItem[] = [
  {
    href: "/index",
    name: "Home",
    root: true,
    icon: <SchoolIcon />,
    subRoutes: [
      {
        href: "/index/courses",
        name: "Courses",
      },
      {
        href: "/index/periods",
        name: "Periods",
      },
      {
        href: "/index/classes",
        name: "Classes",
      },
    ],
  },
  {
    href: "/users",
    name: "Users",
    icon: <PeopleIcon />,
  },
];
