import { Button, Stack, Table } from "@mantine/core";
import Link from "next/link";
import type { CustomNextPage, GetStaticProps, NextPage } from "next";
import { DashboardLayout } from "src/layout";
import { PageContent } from "src/component/PageContent";
import { PageContainer } from "src/component/PageContainer";
import { showNotification } from "@mantine/notifications";
import { client } from "../lib/next/client";

// const Home: NextPage = (props) => {
//   console.log(props);
//   return <div>hello</div>;
// };
// export const getStaticProps: GetStaticProps = async () => {
//   const data = await client.get({ endpoint: "blogs" });
//   // .then((res) => console.log(res));
//   return { props: data };
// };

// ジェネリックな型引数むにゃむにゃはやっていない。
const Index = ({ blog }) => {
  console.log(blog);
  return (
    <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/sampleblog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SampleTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>
        {[
          { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
          { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
          { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
          { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
          { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
        ].map((element) => (
          <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const getStaticProps:GetStaticProps = async () => {
  const data = await client.get({ endpoint: "sampleblog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

Index.getLayout = DashboardLayout;

export default Index;
