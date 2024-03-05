import { sendEmail } from "../../services/sendMail.js";
import ContactModel from "./model.js";

export const addContact = async (req, res) => {
  try {
    const { name, mobile, message } = req.body;
    if (!name || !mobile || !message) {
      return res.json({ status: 400, message: "All fields are required" });
    }
    const contact = new ContactModel(req.body);

    await contact.save();

    await sendEmail(
      "punia.umesh@gmail.com",
      "New Contact Query",
      contactContent({ name, mobile, message }),
      contactContent({ name, mobile, message })
    );
    return res.json({ status: 200, message: "Contact added successfully" });
  } catch (err) {
    return res.status(500).json(err);
  }
};
export const getContacts = async (_req, res) => {
  try {
    const contacts = await ContactModel.find({});
    return res.json({ status: 200, message: contacts });
  } catch (error) {
    return res.json({ status: 500, message: error });
  }
};

export const getContact = async (req, res) => {
  try {
    const { _id } = req.params;
    const contact = await ContactModel.findById({ _id });
    if (!contact)
      return res.json({ status: 404, message: "Contact not found" });
    return res.json({ status: 200, message: contact });
  } catch (err) {
    return res.json({ status: 500, message: err });
  }
};

export const updateContact = async (req, res) => {
  try {
    const { _id, status } = req.body;
    const contact = await ContactModel.findByIdAndUpdate(
      { _id },
      { $set: { status } }
    );
    if (!contact)
      return res.json({ status: 404, message: "Contact not found" });
    return res.json({ status: 200, message: "Contact updated successfully" });
  } catch (error) {
    return res.json({ status: 500, message: error });
  }
};

export const deleteContact = async (req, res) => {
  try {
    const { _id } = req.body;
    const result = await ContactModel.findByIdAndUpdate(
      { _id },
      { $set: { status: "deleted" } }
    );
    if (!result) {
      return res.json({ status: 404, message: "Contact not found" });
    } else {
      return res.json({ status: 200, message: "Contact deleted successfully" });
    }
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
};

function contactContent({ name, mobile, message }) {
  return `<!DOCTYPE html>
  <html>
  <head>
      <title>Contact Form Submission</title>
      <style>
          .email-container {
              font-family: Arial, sans-serif;
              color: #333;
              max-width: 600px;
              margin: auto;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          .field {
              margin-bottom: 20px;
          }
          .field-label {
              font-weight: bold;
              margin-bottom: 5px;
              display: block;
          }
          .field-value {
              color: #555;
          }
      </style>
  </head>
  <body>
      <div class="email-container">
          <h2>Contact Form Submission</h2>
          <div class="field">
              <span class="field-label">Name:</span>
              <span class="field-value">${name}</span>
          </div>
          <div class="field">
              <span class="field-label">Mobile:</span>
              <span class="field-value">${mobile}</span>
          </div>
          <div class="field">
              <span class="field-label">Message:</span>
              <span class="field-value">${message}</span>
          </div>
      </div>
  </body>
  </html>
  `;
}
