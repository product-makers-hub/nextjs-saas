import EmailProvider from "next-auth/providers/nodemailer";

import { mailConfig } from "@/config/mail-config";

export const getEmailProvider = () =>
  EmailProvider({
    server: process.env.EMAIL_SERVER,
    from: mailConfig.fromAdmin,
  });
