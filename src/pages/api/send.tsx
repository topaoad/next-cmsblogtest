// import sgMail from "@sendgrid/mail";
import { MailDataRequired } from "@sendgrid/helpers/classes/mail";
import { EmailData } from "@sendgrid/helpers/classes/email-address";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req, res) {
  if(req.method === 'POST') {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY); //SendGridのAPIキー

    const msg = {
      to: req.body.email,   //送信先（本文のemailを持ってくるとよい
      from: 'tattun0817@gmail.com',  //送信元
      text: 'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
      html: 'お問合せを受け付けました。回答をお待ちください。' + req.body.message,
    };

    (async () => {
      try {
        await sgMail.send(msg);
      } catch (error:unknown) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body)
        }
      }
    })();
  }

  res.status(200)
}


