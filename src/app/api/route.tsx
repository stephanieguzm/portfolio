import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"
import { EMAIL_USER, transporter } from "@/lib/nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const { name, email, message} : {
    name: string
    email: string
    message: string
  } = body

  const mailOptions : nodemailer.SendMailOptions = {
    from: email,
    to: EMAIL_USER,
    subject: `New Contact Form Submission from${name}`,
    text: `${name} has sent you the following message : ${message}`,
    html: `<div>${message} <br /><br />Thank you,<br />${name}</div>`
  };

  try {
    await transporter
    .sendMail(mailOptions)
    .then((response: nodemailer.SentMessageInfo) => {
      return NextResponse.json(
        { error: false, emailSent: true, errors: [], response },
        { status: 200 }
      )
    })
  } 
  catch (error: nodemailer.SentMessageInfo) {
    return NextResponse.json(
      { error: true, emailSent: false, errors: [error] },
      { status: 500 }
    );
  } 
}