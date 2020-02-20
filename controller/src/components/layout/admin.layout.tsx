import React from "react";
import AdminHeader from "../admin/header.admin";
import StandardTheme from "../../themes/standard.theme";
import { makeUnit, ThemeGlobals } from "../../themes/globals.theme";
import AdminAppDrawer from "../admin/drawer.admin";
import { NavItem } from "../../models/nav-item";
import { useRouter } from "next/router";
import { Text } from "@chakra-ui/core";

interface AdminLayoutProps {
  navItems: NavItem[];
}

const AdminLayout: React.FC<AdminLayoutProps> = props => {
  const router = useRouter();
  const [isAppBarOpen, setAppBarOpen] = React.useState(false);

  const openDrawer = () => {
    setAppBarOpen(true);
  };

  const closeDrawer = () => {
    setAppBarOpen(false);
  };

  let selectedNavItem: NavItem = {
    href: "/",
  };

  // Get the current navItem
  props.navItems.forEach(r => {
    if (router.pathname.startsWith(r.href)) {
      selectedNavItem = r;
    }
  });

  return (
    <div>
      <AdminHeader onMenuClick={openDrawer} navItem={selectedNavItem} />
      <AdminAppDrawer open={isAppBarOpen} onCloseMenu={closeDrawer} navItems={props.navItems} />
      <main>{props.children}</main>
      <footer>
        <Text>Footer Stuff Here</Text>
      </footer>
    </div>
  );
};

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     minHeight: "100vh",
//     alignItems: "center",
//   },
//   mainContent: {
//     flex: 1,
//   },
//   footer: {
//     textAlign: "center",
//   },
// }));

export default AdminLayout;
