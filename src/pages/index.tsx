import { Button, Stack, Table } from "@mantine/core";
import Link from "next/link";
import type { CustomNextPage, GetStaticProps, NextPage } from "next";
import { DashboardLayout } from "src/layout";
import { PageContent } from "src/component/PageContent";
import { PageContainer } from "src/component/PageContainer";
import { showNotification } from "@mantine/notifications";
import { client } from "../lib/next/client";
import {
  Key,
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
} from "react";
import { MicroCMSListResponse } from "microcms-js-sdk";

// const Home: NextPage = (props) => {
//   console.log(props);
//   return <div>hello</div>;
// };
// export const getStaticProps: GetStaticProps = async () => {
//   const data = await client.get({ endpoint: "blogs" });
//   // .then((res) => console.log(res));
//   return { props: data };
// };

// type Blog{
//   title:string,
// }
// ジェネリックな型引数むにゃむにゃはやっていない。
const Index: any = ( {blog}: {blog: any} ): JSX.Element => {
  console.log(blog);
  return (
    <div className="flex-auto mx-auto shadow-md">
      <div className="text-4xl text-center bg-purple-200 md:bg-red-200  py-2">記事一覧</div>
      <ul>
        {blog.map(
          (blog: { id: Key | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
            <li className="my-4 cursor-pointer text-center font-size: 1.25rem" key={blog.id}>
              <Link href={`/sampleblog/${blog.id}`}>
                <a className="text-center font-size: 1.25rem leading-8">{blog.title}</a>
              </Link>
            </li>
          ) 
        )}
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

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: "sampleblog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

Index.getLayout = DashboardLayout;

export default Index;
