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

interface AdminLayoutProps {}

const AdminLayout: React.FC<AdminLayoutProps> = props => {
  const classes = useStyles();
  const [isAppBarOpen, setAppBarOpen] = React.useState(false);

  const openDrawer = () => {
    setAppBarOpen(true);
  };

  const closeDrawer = () => {
    setAppBarOpen(false);
  };

  return (
    <ThemeProvider theme={StandardTheme}>
      <div className={classes.root}>
        <CssBaseline />
        <AdminHeader onMenuClick={openDrawer} />
        <AdminAppDrawer open={isAppBarOpen} onCloseMenu={closeDrawer} />
        <main className={classes.mainContent}>{props.children}</main>
        <footer className={classes.footer}>
          <Typography>Footer Stuff Here</Typography>
        </footer>
      </div>
    </ThemeProvider>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  mainContent: {
    flex: 1,
  },
  footer: {
    textAlign: "center",
  },
}));

export default AdminLayout;
