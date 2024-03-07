import RequestsModel from "./model.js";

async function addRequest(req, res) {
  const { name, mobile, location, song } = req.body;

  // Validate the required fields
  if (!name || !mobile || !location || !song) {
    return res.json({ status: 400, message: "All fields are required." });
  }

  // Create a new request document
  const newRequest = new RequestsModel({
    name,
    mobile,
    location,
    song,
  });

  try {
    // Save the new request to the database
    await newRequest.save();
    res.json({ status: 200, message: "Request added successfully" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

async function getAllRequests(req, res) {
  try {
    const requests = await RequestsModel.find({});

    if (!requests.length) {
      return res.json({ status: 404, message: "Requests not found" });
    }

    res.json({ status: 200, message: requests });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}
async function getPendingRequests(req, res) {
  try {
    const requests = await RequestsModel.find({ status: "pending" });

    if (!requests.length) {
      return res.json({ status: 404, message: "Requests not found" });
    }

    res.json({ status: 200, message: requests });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}
async function updatePlayingTime(req, res) {
  try {
    const { _id, playing_at } = req.body;
    const requests = await RequestsModel.findByIdAndUpdate(
      { _id },
      { $set: { playing_at, status: "scheduled" } }
    );

    if (!requests) {
      return res.json({ status: 404, message: "Requests not found" });
    }

    res.json({ status: 200, message: "Updated successfully!" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

async function changeStatus(req, res) {
  try {
    const { _id, status } = req.body;
    let request = await RequestsModel.findOneAndUpdate(
      { _id },
      { $set: { status } }
    );

    if (!request) {
      return res.json({ status: 404, message: "Request not found" });
    }

    res.json({ status: 200, message: "Updated successfully!" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

export {
  addRequest,
  getAllRequests,
  getPendingRequests,
  updatePlayingTime,
  changeStatus,
};
