import AppModel from "./model.js";

async function addApp(req, res) {
  try {
    const { title, description, appName, bannerAds, interAds, rewardAds } =
      req.body;

    if (!title || !appName) {
      return res.json({ status: 400, message: "All fields are required" });
    }
    const app = new AppModel({
      heading: title,
      description,
      appName,
      bannerAds,
      interAds,
      rewardAds,
    });
    await app.save();

    res.json({ status: 200, message: "App Added" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}
async function getApps(req, res) {
  try {
    const apps = await AppModel.find();
    if (!apps.length) {
      return res.json({ status: 404, message: "Apps not found" });
    }
    res.json({ status: 200, message: apps });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

async function updateApp(req, res) {
  try {
    const { _id, title, description, appName, bannerAds, interAds, rewardAds } =
      req.body;

    if (!title || !appName || !_id) {
      return res.json({ status: 400, message: "All fields are required" });
    }

    const updApp = await AppModel.findByIdAndUpdate(
      { _id },
      {
        $set: {
          title,
          description,
          appName,
          bannerAds,
          interAds,
          rewardAds,
        },
      }
    );

    if (!updApp) {
      return res.json({ status: 404, message: "App not found" });
    }

    res.json({ status: 200, message: "Updated" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

async function getSingleApp(req, res) {
  try {
    const { _id } = req.params;

    const app = await AppModel.findById({ _id });

    if (!app) {
      return res.json({ status: 404, message: "App not found" });
    }
    return res.json({ status: 200, message: app });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

export { getApps, addApp, getSingleApp, updateApp };
