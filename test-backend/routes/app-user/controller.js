import AppUserModel from "./model.js";

async function register(req, res) {
  try {
    const { name, mobile, latitude, longitude } = req.body;

    if (!name || !mobile) {
      return res.json({ status: 400, message: "All fields are required" });
    }

    if (!latitude || !longitude) {
      return res.json({
        status: 400,
        message: "Please Enable Your Location Services",
      });
    }

    const client = await AppUserModel.findOne({ mobile });

    if (client) {
      return res.json({ status: 400, message: "User Already Exists" });
    }

    const appUser = new AppUserModel({
      name,
      mobile,
      latitude,
      longitude,
    });

    await appUser.save();
    res.json({ status: 200, message: "App User Added" });
  } catch (err) {
    res.json({ status: 500, message: err });
  }
}

async function getClients(req, res) {
  try {
    const clients = await AppUserModel.find();

    if (!clients.length)
      return res.json({ status: 404, message: "Clients not found" });

    res.json({ status: 200, message: clients });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

export { register, getClients };
