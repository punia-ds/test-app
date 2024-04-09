import { sendEmail } from "../../services/sendMail.js";
import DonorModel from "./model.js";

async function registerDonor(req, res) {
  const {
    active,
    address,
    area,
    b_group,
    description,
    dob,
    getTime,
    mobile,
    name,
  } = req.body;

  // Validate the required fields
  if (
    !active ||
    !address ||
    !area ||
    !b_group ||
    !description ||
    !dob ||
    !getTime ||
    !mobile ||
    !name
  ) {
    return res.send({ status: 400, message: "All fields are required." });
  }

  // Create a new donor document
  const newDonor = new DonorModel({
    active,
    address,
    area,
    b_group,
    description,
    dob,
    getTime,
    mobile,
    name,
  });

  try {
    // Save the new donor to the database
    const savedDonor = await newDonor.save();
    await sendEmail(
      "punia.umesh@gmail.com",
      "New Donor Registration",
      `<h2>New Donor Registered ${name}</h2>`,
      `<h2>New Donor Registered ${name}</h2>`
    );
    res.send({ status: 200, message: "Donor added successfully" });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: error,
    });
  }
}

async function getAllDonors(req, res) {
  try {
    const donors = await DonorModel.find({});

    if (!donors.length) {
      return res.json({ status: 404, message: "Donors not found" });
    }
    res.json({ status: 200, message: donors });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}
async function getSingleDonor(req, res) {
  try {
    const { _id } = req.params;
    const donor = await DonorModel.findById({ _id });

    if (!donor) {
      return res.json({ status: 404, message: "Donor not found" });
    }
    res.json({ status: 200, message: donor });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

async function updateDonorStatus(req, res) {
  try {
    const { _id, status } = req.body;
    let donor = await DonorModel.findOneAndUpdate(
      { _id },
      { $set: { active: status } }
    );

    if (!donor) {
      return res.json({ status: 404, message: "Donor not found" });
    }

    res.json({ status: 200, message: "Updated" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}
async function deleteDonor(req, res) {
  try {
    const { _id } = req.params;
    let donor = await DonorModel.findOneAndUpdate(
      { _id },
      { $set: { active: false } }
    );

    if (!donor) {
      return res.json({ status: 404, message: "Donor not found" });
    }

    res.json({ status: 200, message: "Deleted" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

export {
  registerDonor,
  getAllDonors,
  getSingleDonor,
  updateDonorStatus,
  deleteDonor,
};
