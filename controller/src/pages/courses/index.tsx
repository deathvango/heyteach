import { NextPage } from "next";
import { Typography } from "@material-ui/core";
import AdminLayout from "../../components/layout/admin.layout";
import { AdminNavItems } from "../../models/nav-items.admin";

const CoursesPage: NextPage = () => {
  return (
    <AdminLayout navItems={AdminNavItems} href="/index">
      <div>
        <Typography>Courses Page</Typography>
      </div>
    </AdminLayout>
  );
};

export default CoursesPage;
