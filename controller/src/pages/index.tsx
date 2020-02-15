import Axios from "axios";
import { NextPage } from "next";
import Link from "next/link";
import AdminLayout from "../components/layout/admin.layout";

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
    <AdminLayout>
      <div>
        <Link href="/about">
          <a>About Page</a>
        </Link>
        <h1>Hello world!</h1>
        <Link href="#">
          <a onClick={makeGraphqlRequest}>
            <h1>CLICK ME</h1>
          </a>
        </Link>
      </div>
    </AdminLayout>
  );
};

export default Home;
