export interface NavItem {
  href: string;
  name?: string;
  icon?: JSX.Element;
  root?: boolean;
  subRoutes?: NavItem[];
}
