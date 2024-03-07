import { Router } from "express";
import { getClients, register } from "./controller";

const AppUserRoutes = Router();

AppUserRoutes.post("/register", register);
AppUserRoutes.get("/all", getClients);

export default AppUserRoutes;
