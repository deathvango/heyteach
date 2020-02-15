import PeopleIcon from "@material-ui/icons/People";
import { Drawer, List, ListItem, ListItemText, ListItemIcon, makeStyles, Link } from "@material-ui/core";
import { NavItem } from "../../models/nav-item";

interface AppDrawerProps {
  open: boolean;
  onCloseMenu(): void;
  navItems: NavItem[];
}

const AdminAppDrawer: React.FC<AppDrawerProps> = props => {
  const classes = useStyles();

  const handleClose = () => {
    if (props.open) {
      props.onCloseMenu();
    }
  };

  return (
    <Drawer anchor="left" open={props.open} onClick={handleClose} onKeyDown={handleClose}>
      <List>
        {props.navItems.map(r => (
          <Link key={r.href} href={r.href}>
            <ListItem button={true}>
              {r.icon && <ListItemIcon>{r.icon}</ListItemIcon>}
              <ListItemText>{r.name}</ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

const useStyles = makeStyles(theme => ({
  iconItem: {},
}));

export default AdminAppDrawer;
