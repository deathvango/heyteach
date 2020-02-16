import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles, Tabs, Tab } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeUnit, ThemeGlobals } from "../../themes/globals.theme";
import { NavItem } from "../../models/nav-item";
import { useRouter } from "next/router";

interface AdminAppBarProps {
  navItem: NavItem;
  onMenuClick(): void;
}

const AdminHeader: React.FC<AdminAppBarProps> = props => {
  const router = useRouter();
  const classes = useStyles();

  console.log("router.pathname: " + router.pathname);
  console.log("routes: " + JSON.stringify(props.navItem));

  return (
    <>
      <AppBar className={classes.appBar} position={"sticky"} elevation={0}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={props.onMenuClick}>
            <MenuIcon />
          </IconButton>
          <div>
            <Typography variant="h6">{props.navItem.name}</Typography>
          </div>
          <div>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
      {props.navItem && props.navItem.subRoutes && (
        <AppBar position={"static"} elevation={0}>
          <Tabs value={router.pathname} centered={true}>
            {props.navItem.subRoutes.map(r => {
              return <Tab key={r.href} label={r.name} value={r.href} onClick={() => router.push(r.href)} />;
            })}
          </Tabs>
        </AppBar>
      )}
    </>
  );
};

const useStyles = makeStyles(theme => ({
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  appBar: {
    paddingLeft: makeUnit(theme.spacing()),
    paddingRight: makeUnit(theme.spacing()),
  },
  tabs: {
    justifyContent: "center",
  },
}));

export default AdminHeader;
