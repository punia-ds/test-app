import { Router } from "express";
import { addApp, getApps, getSingleApp, updateApp } from "./controller.js";

const AppRoutes = Router();

AppRoutes.post("/add", addApp);
AppRoutes.get("/all", getApps);
AppRoutes.get("/single/:id", getSingleApp);
AppRoutes.put("/update", updateApp);

export default AppRoutes;
