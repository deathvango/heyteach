import { NextPage } from "next";
import AdminLayout from "../components/layout/admin.layout";
import UserInfoContent from "../components/admin/auth-info/users.admin";
import { AdminNavItems } from "../models/nav-items.admin";
import withRedux from "next-redux-wrapper";
import { Text } from "@chakra-ui/core";

const Home: NextPage = () => {
  return (
    <div>
      <Text>Home Page</Text>
    </div>
  );
};

export default Home;
