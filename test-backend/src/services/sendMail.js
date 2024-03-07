import nodemailer from "nodemailer";
import { config } from "dotenv";
config();
async function sendEmail(to, subject, text, html) {
  // Create a transporter object using SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.STMP_HOST, // GoDaddy's SMTP server
    port: process.env.SMTP_PORT, // Secure port (SSL)
    secure: process.env.SMTP_SECURE, // True for 465, false for other ports
    auth: {
      user: process.env.STMP_EMAIL, // Your GoDaddy email address
      pass: process.env.STMP_PASS, // Your email password
    },
  });

  // Setup email data
  let mailOptions = {
    from: `Radio Haryanvi <${process.env.STMP_EMAIL}>`, // Sender address
    to: to, // List of receivers
    subject: subject, // Subject line
    text: text, // Plain text body
    html: html, // HTML body content
  };

  // Send mail with defined transport object
  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Failed to send email: ", error);
  }
}

export { sendEmail };
