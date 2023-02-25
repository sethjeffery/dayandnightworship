import nodemailer from "nodemailer";
import { google } from "googleapis";

const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = "https://developers.google.com/oauthplayground";

const {
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  MAILING_SERVICE_REFRESH_TOKEN,
  SENDER_EMAIL_ADDRESS,
} = process.env;

const oauth2Client = new OAuth2(
  MAILING_SERVICE_CLIENT_ID,
  MAILING_SERVICE_CLIENT_SECRET,
  OAUTH_PLAYGROUND
);

oauth2Client.setCredentials({
  refresh_token: MAILING_SERVICE_REFRESH_TOKEN,
});

interface MailOptions {
  from?: string;
  to?: string;
  subject: string;
  html?: string;
  text?: string;
}

export default async function sendMail(options: MailOptions) {
  const accessToken = await oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: SENDER_EMAIL_ADDRESS,
      clientId: MAILING_SERVICE_CLIENT_ID,
      clientSecret: MAILING_SERVICE_CLIENT_SECRET,
      refreshToken: MAILING_SERVICE_REFRESH_TOKEN,
      accessToken: accessToken.token || "",
    },
  });

  const mailOptions: MailOptions = {
    from: SENDER_EMAIL_ADDRESS || "",
    to: SENDER_EMAIL_ADDRESS || "",
    ...options,
  };

  return transporter.sendMail(mailOptions);
}
