import {
  Drawer,
  List,
  useDisclosure,
  Text,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Button,
  Box,
  Flex,
} from "@chakra-ui/core";
import { NavItem } from "../../models/nav-item";
import { useRouter } from "next/router";
import Link from "next/link";
import { makeUnit } from "../../themes/globals.theme";

interface AppDrawerProps {
  open: boolean;
  onCloseMenu(): void;
  navItems: NavItem[];
}

const AdminAppDrawer: React.FC<AppDrawerProps> = props => {
  const router = useRouter();

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
    <Drawer placement="left" isOpen={props.open} onClose={handleClose} size={"xs"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Heyteach</DrawerHeader>
        <DrawerBody pl={"0"} pr={"0"}>
          {props.navItems.map(r => (
            <Button key={r.href} display={"block"} w={"100%"} variant={"ghost"}>
              <Link href={r.href}>
                <Flex align="center" justify="flex-start">
                  <Box as={r.icon} size={makeUnit(1.4)} d="inline" />
                  <Text pl={makeUnit(1)}>{r.name}</Text>
                </Flex>
              </Link>
            </Button>
          ))}
        </DrawerBody>
      </DrawerContent>
      {/* <List>
        {props.navItems.map(r => (
          <Link key={r.href} href={r.href}>
            {r.icon && <span>{r.icon}</span>}
            {r.name}
          </Link>
        ))}
      </List> */}
    </Drawer>
  );
};

export default AdminAppDrawer;
