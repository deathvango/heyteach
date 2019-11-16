import { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <h1>Hello world!</h1>
  </div>
);

export default Home;
