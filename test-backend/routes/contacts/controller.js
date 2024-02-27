import ContactModel from "./model.js";

export const addContact = async (req, res) => {
  try {
    const { name, mobile, message } = req.body;
    if (!name || !mobile || !message) {
      return res.json({ status: 400, message: "All fields are required" });
    }
    const contact = new ContactModel(req.body);
    await contact.save();
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
