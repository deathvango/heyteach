import { NextPage } from "next";
import AdminLayout from "../components/layout/admin.layout";
import UserInfoContent from "../components/admin/auth-info/users.admin";
import { AdminNavItems } from "../components/admin/nav-items.admin";
import withRedux from "next-redux-wrapper";

const Home: NextPage = () => {
  return (
    <AdminLayout navItems={AdminNavItems} href="/index">
      <div>
        <UserInfoContent />
      </div>
    </AdminLayout>
  );
};

export default Home;
