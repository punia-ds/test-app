import { Router } from "express";
import {
  addRequest,
  changeStatus,
  getAllRequests,
  getPendingRequests,
  updatePlayingTime,
} from "./controller.js";

const RequestRoutes = Router();

RequestRoutes.post("/add", addRequest);
RequestRoutes.get("/all", getAllRequests);
RequestRoutes.get("/pending", getPendingRequests);
RequestRoutes.put("/update", updatePlayingTime);
RequestRoutes.put("/change", changeStatus);

export default RequestRoutes;
