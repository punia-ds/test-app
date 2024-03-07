import RadioModel from "./model.js";

async function addRadio(req, res) {
  {
    const {
      category,
      description,
      fb,
      insta,
      twitter,
      head,
      image,
      meta,
      title,
      url,
      website,
      youtube,
    } = req.body;

    // Create a new radio document
    const newRadio = new RadioModel({
      category,
      description,
      fb,
      insta,
      twitter,
      head,
      image,
      meta,
      title,
      url,
      website,
      youtube,
    });

    try {
      // Save the new radio to the database
      const savedRadio = await newRadio.save();
      res.json({ status: 200, message: "Radio added successfully" });
    } catch (error) {
      res.json({ status: 500, message: error });
    }
  }
}

async function getRadios(req, res) {
  try {
    const radios = await RadioModel.find({}).populate({
      path: "category",
      select: "name",
      model: "category",
    });

    if (!radios.length) {
      return res.json({ status: 404, message: "Radios not found" });
    }

    res.json({ status: 200, message: radios });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

async function getRadioByCategory(req, res) {
  try {
    const { category } = req.params;
    const radios = await RadioModel.find({ category }).populate({
      path: "category",
      select: "name",
      model: "category",
    });

    if (!radios.length) {
      return res.json({ status: 404, message: "Radios not found" });
    }

    res.json({ status: 200, message: radios });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}
async function getSingleRadio(req, res) {
  try {
    const { _id } = req.params;
    const radios = await RadioModel.findById({ _id }).populate({
      path: "category",
      select: "name",
      model: "category",
    });

    if (!radios) {
      return res.json({ status: 404, message: "Radio not found" });
    }

    res.json({ status: 200, message: radios });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

async function updateRadioStatus(req, res) {
  try {
    const { _id, status } = req.body;

    const updateStatus = await RadioModel.findByIdAndUpdate(
      { _id },
      { $set: { status } }
    );

    if (!updateStatus) {
      return res.json({ status: 404, message: "Radio not found" });
    } else {
      res.json({ status: 200, message: "Updated" });
    }
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

async function deleteRadio(req, res) {
  try {
    const { _id } = req.params;

    const radio = await RadioModel.findByIdAndUpdate(
      { _id },
      { $set: { status: "deleted" } }
    );

    if (!radio) {
      return res.json({ status: 404, message: "Radio not found" });
    }

    res.json({ status: 200, message: "Deleted" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

export {
  addRadio,
  getRadios,
  getRadioByCategory,
  getSingleRadio,
  updateRadioStatus,
  deleteRadio,
};
