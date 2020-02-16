import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  makeStyles,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  ThemeProvider,
} from "@material-ui/core";
import React from "react";
import AdminHeader from "../admin/header.admin";
import StandardTheme from "../../themes/standard.theme";
import { makeUnit, ThemeGlobals } from "../../themes/globals.theme";
import AdminAppDrawer from "../admin/drawer.admin";
import { NavItem } from "../../models/nav-item";
import { useRouter } from "next/router";

interface AdminLayoutProps {
  navItems: NavItem[];
}

const AdminLayout: React.FC<AdminLayoutProps> = props => {
  const router = useRouter();
  const classes = useStyles();
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
    <div className={classes.root}>
      <CssBaseline />
      <AdminHeader onMenuClick={openDrawer} navItem={selectedNavItem} />
      <AdminAppDrawer open={isAppBarOpen} onCloseMenu={closeDrawer} navItems={props.navItems} />
      <main className={classes.mainContent}>{props.children}</main>
      <footer className={classes.footer}>
        <Typography>Footer Stuff Here</Typography>
      </footer>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    alignItems: "center",
  },
  mainContent: {
    flex: 1,
  },
  footer: {
    textAlign: "center",
  },
}));

export default AdminLayout;
