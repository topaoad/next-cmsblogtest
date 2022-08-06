import { client } from "../../lib/next/client";
import React from "react";
import { Date } from "../../component/date";
import { NotificationsProvider } from "@mantine/notifications";
import { AppMantineProvider, GlobalStyleProvider } from "src/lib/mantine";
import {
  ActionIcon,
  AppShell,
  Box,
  CloseButton,
  Drawer,
  MediaQuery,
} from "@mantine/core";
// import { SideNav } from "src/layout/SideNav.tsx";

// const SideNav = dynamic(async () => {
//   const { SideNav } = await import("src/layout/SideNav.tsx");
//   return SideNav;
// });

export default function BlogId({ blog }) {
  console.log(blog);
  const EyeCatch = () => {
    if (blog.eyecatch) {
      return (
        <div className="mb-5">
          <img
            className="aspect-auto"
            src={blog.eyecatch.url}
            alt="Picture of the author"
          />
        </div>
      );
    } else return;
  };
  console.log(blog.publishedAt);

  return (
    <main className="container p-4 ">

      <h1 className="mb-6 mx-auto">{blog.title}</h1>
      <div className="flex mb-4 mt-4">
        <p className="">公開日:</p>
        <Date dateString={blog.publishedAt} />
        <p className="ml-3">更新日:</p>
        <Date dateString={blog.revisedAt} />
      </div>
      <EyeCatch />
      {/* <p></p> */}
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <div></div>
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "sampleblog" });
  console.log("data");
  const paths = data.contents.map((content) => `/sampleblog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "sampleblog", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
