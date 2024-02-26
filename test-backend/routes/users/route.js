import { Router } from "express";
import User from "./controller.js";
const UserRoutes = Router();

UserRoutes.post("/registration", User.registration);
UserRoutes.post("/login", User.login);
UserRoutes.post("/token", User.authToken);

export default UserRoutes;
