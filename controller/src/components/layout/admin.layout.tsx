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
import AdminAppBar from "../admin/app-bar.admin";
import StandardTheme from "../../themes/standard.theme";
import { makeUnit, ThemeGlobals } from "../../themes/globals.theme";

interface AdminLayoutProps {}

const AdminLayout: React.FC<AdminLayoutProps> = props => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={StandardTheme}>
      <CssBaseline />
      <div className={classes.root}>
        <AdminAppBar />
        <main className={classes.appBarSpacer}>{props.children}</main>
      </div>
    </ThemeProvider>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
  },
  appBarSpacer: {
    marginTop: makeUnit(ThemeGlobals.appBar.height),
  },
}));

export default AdminLayout;
