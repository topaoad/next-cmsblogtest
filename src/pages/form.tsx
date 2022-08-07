import React from "react";
import type { CustomNextPage } from "next";
import { DashboardLayout } from "src/layout";
import { useForm } from "@mantine/form";
import { NumberInput, TextInput, Button, Textarea } from "@mantine/core";

const Form: CustomNextPage = () => {
  const registerUser = async (event:any) => {
    event.preventDefault();

    const res = await fetch("/api/send", {
      body: JSON.stringify({
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
  };

  //mantineバージョン
  const form = useForm({
    initialValues: { name: "", email: "", age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      age: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

  return (
    // sendgridバージョン
    // <div className="container mt-5">
    //   <form onSubmit={registerUser}>
    //     <div className="mb-3">
    //       <label htmlFor="email">メールアドレス</label>
    //       <input
    //         id="email"
    //         name="email"
    //         type="email"
    //         className="form-control"
    //         placeholder="name@example.com"
    //       />
    //     </div>
    //     <div className="mb-3">
    //       <label htmlFor="message" className="form-label">
    //         問合せ内容
    //       </label>
    //       <textarea
    //         id="message"
    //         name="message"
    //         className="form-control"
    //         rows="3"
    //       ></textarea>
    //     </div>
    //     <div className="mb-3">
    //       <button type="submit" className="btn btn-primary">
    //         送信
    //       </button>
    //     </div>
    //   </form>
    // </div>

    //reacthookバージョン※onsubmitだけ変更
    // <form onSubmit={registerUser}>
    //   <input {...register("firstName")} />
    //   <select {...register("gender")}>
    //     <option value="female">female</option>
    //     <option value="male">male</option>
    //     <option value="other">other</option>
    //   </select>
    //   <input type="submit" />
    // </form>
    //mantineバージョン※onsubmitだけ変更
    <form onSubmit={registerUser}>
      <TextInput
        label="お名前"
        placeholder="山田　太郎"
        {...form.getInputProps("name")}
        required
      />
      <TextInput
        mt="sm"
        label="メールアドレス"
        placeholder="xyz@gmail.com"
        {...form.getInputProps("email")}
        required
      />
      <Textarea
        placeholder="今日はありがとうございました"
        label="コメントを入力してください"
        required
      />
      <Button type="submit" mt="sm">
        送信
      </Button>
    </form>
  );
};

Form.getLayout = DashboardLayout;
export default Form;
