import { Router } from "express";
import {
  addPost,
  blockPost,
  deletePost,
  getPostByCategory,
  getPosts,
  getPostsByUser,
} from "./controller.js";

const postRoutes = Router();

postRoutes.post("/add", addPost);
postRoutes.get("/all", getPosts);
postRoutes.get("/category/:category", getPostByCategory);
postRoutes.get("/single/:_id", getPostByCategory);
postRoutes.get("/user/:addedBy", getPostsByUser);
postRoutes.put("/block/:_id", blockPost);
postRoutes.delete("/delete/:_id", deletePost);

export default postRoutes;
