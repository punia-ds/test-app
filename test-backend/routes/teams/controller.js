import TeamModel from "./model.js";

async function addTeam(req, res) {
  try {
    const { name, description, image } = req.body;
    if (!name || !description || !image) {
      return res.json({ status: 400, message: "All fields are required" });
    }
    const team = new TeamModel(req.body);
    await team.save();
    return res.json({ status: 200, message: "Team added successfully" });
  } catch (err) {
    return res.status(500).json(err);
  }
}

async function getTeams(req, res) {
  try {
    const teams = await TeamModel.find({});
    if (!teams.length) {
      return res.json({ status: 404, message: "Team not found" });
    }
    return res.json({ status: 200, message: teams });
  } catch (err) {
    return res.json({ status: 500, message: err });
  }
}

async function getTeam(req, res) {
  try {
    const { _id } = req.params;
    const team = await TeamModel.findById({ _id });
    if (!team) {
      return res.json({ status: 404, message: "Team not found" });
    }

    res.json({ status: 200, message: team });
  } catch (e) {
    res.json({ status: 500, message: e });
  }
}

async function updateTeam(req, res) {
  try {
    const { _id, status } = req.body;
    if (_id == null || status == null) {
      return res.json({ status: 400, message: "All fields are required" });
    }
    let team = await TeamModel.findByIdAndUpdate({ _id }, { $set: { status } });
    if (!team) {
      return res.json({ status: 400, message: "No team with this id" });
    }
    return res.json({ status: 200, message: "Team updated successfully" });
  } catch (err) {
    return res.json({ status: 500, message: err });
  }
}
export { addTeam, getTeams, getTeam, updateTeam };
