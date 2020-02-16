import Axios from "axios";
import { NextPage } from "next";
import AdminLayout from "../components/layout/admin.layout";
import UserInfoContent from "../components/admin/auth-info/users.admin";
import { AdminNavItems } from "../models/nav-items.admin";

const Home: NextPage = () => {
  const makeGraphqlRequest = () => {
    Axios.post("/graphql", {
      query: `query {
          categories {
            id
            name
          }
        }`,
    }).then(resp => {
      console.log("resp: " + resp.data);
    });
  };

  return (
    <AdminLayout navItems={AdminNavItems} href="/users">
      <div>
        {/* <Link href="/about">
          <a>About Page</a>
        </Link>
        <h1>Hello world!</h1>
        <Link href="#">
          <a onClick={makeGraphqlRequest}>
            <h1>CLICK ME</h1>
          </a>
        </Link> */}
        <UserInfoContent />
      </div>
    </AdminLayout>
  );
};

export default Home;
