import { NextPage } from "next";
import AdminLayout from "../components/layout/admin.layout";
import UserInfoContent from "../components/admin/auth-info/users.admin";
import { AdminNavItems } from "../models/nav-items.admin";
import withRedux from "next-redux-wrapper";
import { Typography } from "@material-ui/core";

const Home: NextPage = () => {
  return (
    <div>
      <Typography>Home Page</Typography>
    </div>
  );
};

export default Home;
