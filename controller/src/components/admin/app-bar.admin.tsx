import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeUnit, ThemeGlobals } from "../../themes/globals.theme";

const AdminAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.root}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <div>
          <Typography variant="h6">News</Typography>
        </div>
        <div>
          <Button color="inherit">Login</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  appBar: {
    height: makeUnit(ThemeGlobals.appBar.height),
  },
}));

export default AdminAppBar;
