import { Router } from "express";
import { getClients, register } from "./controller.js";

const AppUserRoutes = Router();

AppUserRoutes.post("/register", register);
AppUserRoutes.get("/all", getClients);

export default AppUserRoutes;
