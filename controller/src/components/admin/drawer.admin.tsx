import { Drawer, List, ListItem, ListItemText, ListItemIcon, makeStyles } from "@material-ui/core";
import { NavItem } from "../../models/nav-item";
import { useRouter } from "next/router";
import Link from "next/link";

interface AppDrawerProps {
  open: boolean;
  onCloseMenu(): void;
  navItems: NavItem[];
}

const AdminAppDrawer: React.FC<AppDrawerProps> = props => {
  const router = useRouter();
  const classes = useStyles();

  const handleClose = () => {
    if (props.open) {
      props.onCloseMenu();
    }
  };

  let selectedPath = "";
  props.navItems.forEach(r => {
    if (r.root || router.pathname.startsWith(r.href)) {
      selectedPath = r.href;
    }
  });

  return (
    <Drawer anchor="left" open={props.open} onClick={handleClose} onKeyDown={handleClose}>
      <List>
        {props.navItems.map(r => (
          <Link key={r.href} href={r.href}>
            <ListItem button={true} selected={r.href === selectedPath}>
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
