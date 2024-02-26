import nodemailer from "nodemailer";

const sendEmail = async (email, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.HOST,
      service: process.env.SERVICE,
      port: 587,
      secure: true,
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.USER,
      to: email,
      subject: subject,
      html: html,
    });

    console.log("email sent successfully");
  } catch (error) {
    console.log(error, "email not sent");
  }
};

export { sendEmail };

//  Send confirmation email
// const html = `<h6>Dear Customer,
// Your number plate has been successfully published on our website. Thank you for choosing our services.
// Best regards,
// Jdm Plates</h6>`;
//  sendEmail(email, "Your Number Plate is Live!", html);


//  Send follow up email
// const html = `<h6>Dear Customer,
// We hope you're enjoying your new number plate! Did you know we offer a "done-for-you" service for custom plates?
// Visit our website to learn more and explore our range of replacement plates.
// Best regards,
// Jdm Plates</h6>`;
//  sendEmail(email, "Discover More Services!", html);


//  Send  on service provided email
// const html = `<h6>Dear Customer,
//Thank you for choosing our services! We're thrilled to inform you that your number plate has been successfully     processed.\n\nYour new plate will be delivered to you within approximately 7-10 business days.
//We'd like to take this opportunity to remind you of our "done-for-you" service, where our experts can assist you with custom plate designs and installations.
// Best regards,
// Jdm Plates</h6>`;
//  sendEmail(email, "Thank You for Your Purchase!", html);
