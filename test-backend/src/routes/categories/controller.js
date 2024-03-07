import CatModel from "./model.js";

async function addCat(req, res) {
  try {
    const { name, description, image, slug } = req.body;

    if (!name) {
      return res.json({ status: 400, message: "All fields are required." });
    }
    let newSlug = slug.length > 0 ? slug : name.replace(/\s/g, "-");

    const newCat = new CatModel({
      name,
      description,
      image,
      slug: newSlug.toLowerCase(),
    });

    await newCat.save();

    res.json({ status: 200, message: "Category added successfully" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

async function getAllCats(req, res) {
  try {
    const cats = await CatModel.find({});
    if (!cats.length) {
      return res.json({ status: 404, message: "Categories not found" });
    }
    res.json({ status: 200, message: cats });
  } catch (err) {
    res.status(500).json({ status: 500, message: err });
  }
}

async function getSingleCat(req, res) {
  try {
    const { _id } = req.params;
    const cat = await CatModel.findById({ _id });
    if (!cat) {
      return res.json({ status: 404, message: "Category not found" });
    }
    res.json({ status: 200, message: cat });
  } catch (err) {
    res.status(500).json({ status: 500, message: err });
  }
}

async function updateCat(req, res) {
  try {
    const { _id, name, description, image, slug } = req.body;
    let updatedCat = await CatModel.findByIdAndUpdate(
      { _id },
      {
        $set: {
          name,
          description,
          image,
          slug,
        },
      }
    );

    if (!updatedCat) {
      return res.json({ status: 404, message: "Category not found" });
    }
    res.json({ status: 200, message: "Updated" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err });
  }
}

async function updateCatStatus(req, res) {
  try {
    const { _id, status } = req.body;

    let updatedCat = await CatModel.findByIdAndUpdate(
      { _id },
      {
        $set: {
          status,
        },
      }
    );
    // If the cat is inactive
    if (!updatedCat) {
      return res.json({ status: 404, message: "Category not found" });
    }
    res.json({ status: 200, message: "Updated" });
  } catch (err) {
    res.status(500).json({ status: 500, message: err });
  }
}

async function deleteCat(req, res) {
  try {
    const { _id } = req.params;
    // let result = await CatModel.findByIdAndDelete({ _id });
    let result = await CatModel.findByIdAndUpdate(
      { _id },
      { $set: { status: "deleted" } }
    );
    if (!result) {
      return res.json({ status: 404, message: "Category not found" });
    }
    res.json({ status: 200, message: "Deleted" });
  } catch (err) {
    res.json({ status: 500, message: err });
  }
}

export {
  addCat,
  getAllCats,
  getSingleCat,
  updateCat,
  updateCatStatus,
  deleteCat,
};
