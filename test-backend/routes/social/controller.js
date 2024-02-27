import SocialModel from "./model.js";

async function addSocial(req, res) {
  try {
    const { name, link, mobileIcon, webIcon } = req.body;
    if (!name || !link || !mobileIcon || !webIcon) {
      return res.json({ status: 400, message: "All fields are required" });
    }

    const social = new SocialModel(req.body);
    await social.save();
    return res.json({ status: 200, message: "Social added successfully" });
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function getSocials(req, res) {
  try {
    const socials = await SocialModel.find();
    if (!socials.length) {
      return res.json({ status: 404, message: "Socials not found" });
    }
    return res.json({ status: 200, message: socials });
  } catch (error) {
    console.log("Error in getting Socials", error);
    return res.json({ status: 500, message: error });
  }
}

async function updateStatus(req, res) {
  try {
    let { _id, status } = req.body;
    let updatedSocial = await SocialModel.findByIdAndUpdate(
      { _id },
      { $set: { status } }
    );

    if (!updatedSocial) {
      return res.json({ status: 404, message: "Social not found" });
    }
    return res.json({ status: 200, message: "Updated" });
  } catch (error) {
    return res.json({ status: 500, message: error });
  }
}

export { addSocial, getSocials, updateStatus };
