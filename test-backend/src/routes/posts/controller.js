import { sendEmail } from "../../services/sendMail.js";
import PostModel from "./model.js";

async function addPost(req, res) {
  try {
    const { title, description, category, image, tags, shortDescription } =
      req.body;

    if (!title || !description || !category) {
      return res.json({ status: 400, message: "All fields are required" });
    }

    const newPost = new PostModel({
      title,
      description,
      category,
      image,
      tags,
      shortDescription,
    });

    await newPost.save();

    await sendEmail(
      "punia.umesh@gmail.com",
      "New Post Added",
      `<h2>${title} added successfully of ${category}</h2>`,
      `<h2>${title} added successfully of ${category}</h2>`
    );

    return res.json({ status: 200, message: category + " added successfully" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}

async function getPosts(req, res) {
  try {
    const posts = await PostModel.find().populate({
      path: "addedBy",
      select: "name",
      model: "client",
    });
    if (!posts.length) {
      return res.json({ status: 404, message: "Posts not found" });
    }
    res.json({ status: 200, message: posts });
  } catch (err) {
    res.json({ status: 500, message: err });
  }
}

async function getPostByCategory(req, res) {
  try {
    const { category } = req.params;
    const postList = await PostModel.find({ category }).populate({
      path: "addedBy",
      select: "name",
      model: "client",
    });

    if (!postList.length) {
      return res.json({ status: 404, message: "Posts not found" });
    }

    res.json({ status: 200, message: postList });
  } catch (error) {
    res.json({ status: 500, message: err });
  }
}
async function getPostsByUser(req, res) {
  try {
    const { addedBy } = req.params;
    const postList = await PostModel.find({ addedBy }).populate({
      path: "addedBy",
      select: "name",
      model: "client",
    });

    if (!postList.length) {
      return res.json({ status: 404, message: "Posts not found" });
    }

    res.json({ status: 200, message: postList });
  } catch (error) {
    res.json({ status: 500, message: err });
  }
}

async function singlePost(req, res) {
  try {
    const { _id } = req.params;
    const post = await PostModel.findOne({ _id }).populate({
      path: "addedBy",
      select: "name",
      model: "client",
    });

    if (!post) return res.json({ status: 404, message: "Post not found" });

    res.json({ status: 200, message: post });
  } catch (error) {
    res.json({ status: 500, message: err });
  }
}

async function blockPost(req, res) {
  try {
    const { _id } = req.params;
    const post = await PostModel.findOneAndUpdate(
      { _id },
      { $set: { status: "blocked" } }
    );
    if (!post) return res.json({ status: 404, message: "Post not found" });

    res.json({ status: 200, message: "Post blocked successfully" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}
async function deletePost(req, res) {
  try {
    const { _id } = req.params;
    const post = await PostModel.findOneAndUpdate(
      { _id },
      { $set: { status: "deleted" } }
    );
    if (!post) return res.json({ status: 404, message: "Post not found" });

    res.json({ status: 200, message: "Post deleted successfully" });
  } catch (error) {
    res.json({ status: 500, message: error });
  }
}
export {
  addPost,
  getPosts,
  getPostByCategory,
  getPostsByUser,
  singlePost,
  blockPost,
  deletePost,
};
