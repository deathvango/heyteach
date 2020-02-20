import { Drawer, List, useDisclosure } from "@chakra-ui/core";
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
  const { onClose } = useDisclosure();

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
    <Drawer placement="left" isOpen={props.open} onClose={onClose}>
      <List>
        {props.navItems.map(r => (
          <Link key={r.href} href={r.href}>
            {r.icon && <span>{r.icon}</span>}
            {r.name}
          </Link>
        ))}
      </List>
    </Drawer>
  );
};

export default AdminAppDrawer;
