import { IconType } from "react-icons/lib/cjs";

export interface NavItem {
  href: string;
  name?: string;
  icon?: IconType;
  root?: boolean;
  subRoutes?: NavItem[];
}
