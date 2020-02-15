import PeopleIcon from "@material-ui/icons/People";
import { Drawer, List, ListItem, ListItemText, ListItemIcon, makeStyles } from "@material-ui/core";

interface AppDrawerProps {
  open: boolean;
  onCloseMenu(): void;
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
        <ListItem button={true}>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText>Authentication</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

const useStyles = makeStyles(theme => ({
  iconItem: {},
}));

export default AdminAppDrawer;
