import nodemailer from "nodemailer";
import mailConfig from "../config/mail.js";

const {
  MAIL_SMTP,
  MAIL_PORT,
  MAIL_USER,
  MAIL_PASS,
  MAIL_SALES_USER,
  MAIL_SALES_PASS,
} = mailConfig;

const client = {
  email: "registration.sales@jdmplates.co.uk",
  pass: "g@pfK7+a_MrD",
};

async function SendEmail(to, subject, text, html) {
  try {
    let transporter = nodemailer.createTransport({
      host: MAIL_SMTP,
      port: "587",
      secure: false,

      auth: {
        user: client.email, // generated ethereal user
        pass: client.pass, // generated ethereal password
      },
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    let info = await transporter.sendMail({
      from: client.email, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: html, // html body
    });

    console.log(info);

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error);
  }
}
async function SendEmailToAdmin(subject, text, html) {
  try {
    let transporter = nodemailer.createTransport({
      host: MAIL_SMTP,
      port: "587",
      secure: false,

      auth: {
        user: client.email, // generated ethereal user
        pass: client.pass, // generated ethereal password
      },
    });

    transporter.verify(function (error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });

    let info = await transporter.sendMail({
      from: client.email, // sender address
      to: MAIL_USER, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
      html: html, // html body
    });

    console.log(info);

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error);
  }
}

export { SendEmail, SendEmailToAdmin };
