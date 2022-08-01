import { client } from "../../lib/next/client";
import React from "react";

export default function BlogId({ blog }) {
  console.log(blog);
  const EyeCatch = () => {
    if (blog.eyecatch) {
      return (
        <img
          src={blog.eyecatch.url}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      );
    } else return;
  };
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
      <div>
        <EyeCatch />
      </div>
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
