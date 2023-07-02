import nodemailer from "nodemailer"

export const EMAIL_USER = process.env.NEXT_PUBLIC_EMAIL_USER;
export const EMAIL_PASS = process.env.NEXT_PUBLIC_EMAIL_PASS; 
export const EMAIL_HOST = process.env.NEXT_PUBLIC_EMAIL_HOST

export const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  port: 587,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
})