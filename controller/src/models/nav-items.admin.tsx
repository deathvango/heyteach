import { NavItem } from "./nav-item";
import SchoolIcon from "@material-ui/icons/School";
import PeopleIcon from "@material-ui/icons/People";
import HomeIcon from "@material-ui/icons/Home";

export const AdminNavItems: NavItem[] = [
  {
    href: "/",
    name: "Home",
    root: true,
    icon: <HomeIcon />,
  },
  {
    href: "/courses",
    name: "Courses",
    icon: <SchoolIcon />,
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
    icon: <PeopleIcon />,
  },
];
