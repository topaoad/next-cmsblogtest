import React from "react";
import   CustomNextPage  from "next";
import { DashboardLayout } from "src/layout";
import { useForm } from "@mantine/form";
import { NumberInput, TextInput, Button, Textarea } from "@mantine/core";

const Form = () => {
  const registerUser = async event => {
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
    initialValues: { name: "", email: "", message: "" },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) =>
        value.length < 1 ? "you must input at least one message" : null,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = fetch('/api/send', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log('res: ', res);
      // reset();
      alert('お問い合わせが送信されました。');
    } catch (error) {
      console.error('Fetch error : ', error);
      alert(JSON.stringify(error));
    }
  };


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
        name="email"
        type="email"
        label="メールアドレス"
        placeholder="xyz@gmail.com"
        {...form.getInputProps("email")}
        required
      />
      <Textarea
        placeholder="今日はありがとうございました"
        label="コメントを入力してください"
        name="message"
        required
        {...form.getInputProps("message")}
      />
      <Button type="submit" mt="sm">
        送信
      </Button>
    </form>
  );
};

Form.getLayout = DashboardLayout;
export default Form;
