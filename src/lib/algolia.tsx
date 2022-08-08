import { client } from "src/lib/next/client";
import React from "react";
// import { Date } from "../../component/date";
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
import { DarkModeButton } from "src/component/DarkModeButton";
import { Menu2 } from "tabler-icons-react";
import dynamic from "next/dynamic";
import { useDisclosure } from "@mantine/hooks";
// import removeMd from "remove-markdown";
import algoliasearch from "algoliasearch"; // 追加

// export default function BlogId({ blog }) {
//   console.log(blog);
//   const EyeCatch = () => {
//     if (blog.eyecatch) {
//       return (
//         <div className="mb-5">
//           <img
//             className="aspect-auto"
//             src={blog.eyecatch.url}
//             alt="Picture of the author"
//           />
//         </div>
//       );
//     } else return;
//   };
//   console.log(blog.publishedAt);
//   const [opened, handlers] = useDisclosure(false);

//   const objects = blog.map((blog) => {
//     return {
//       objectID: blog.id,
//       title: blog.title,
//       body: blog.body,
//     };
//   });

//   return;
//   console.log(objects);
// }

// 静的生成のためのパスを指定します
// export const getStaticPaths = async () => {
//   const data = await client.get({ endpoint: "sampleblog" });
//   // console.log("data");
//   const paths = data.contents.map((content) => `/sampleblog/${content.id}`);
//   return { paths, fallback: false };
// };

// データをテンプレートに受け渡す部分の処理を記述します
// export const getStaticProps = async (context: any) => {
//   const id = context.params.id;
//   const data = await client.get({ endpoint: "sampleblog", contentId: id });
//   // console.log("data");
//   return {
//     props: {
//       blog: data,
//     },
//   };
// };
// const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const data = await client.get({ endpoint: "sampleblog", contentId: id });

//   return {
//     props: {
//       blog: data,
//     },
//   };
// };

export const generateIndex = async (): Promise<void> => {
  const data = await client.get({ endpoint: "sampleblog" });

  const objects = data.contents.map(
    (blog: { id: any; title: any; body: any }) => {
      return {
        objectID: blog.id,
        title: blog.title,
        body: blog.body,
        
      };
    }
  );

  // 追加
  const cmsclient = algoliasearch(
    process.env.ALGONIA_APPLICATION_ID as string,
    process.env.ALGONIA_API_KEY as string
  );
  const index = cmsclient.initIndex(process.env.ALGONIA_INITINDEX as string);
  await index.saveObjects(objects, { autoGenerateObjectIDIfNotExist: true });
};
