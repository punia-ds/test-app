import { Router } from "express";

import { addTeam, getTeams, getTeam, updateTeam } from "./controller.js";

const TeamRoutes = Router();

TeamRoutes.post("/add", addTeam);
TeamRoutes.get("/all", getTeams);
TeamRoutes.get("/single/:id", getTeam);
TeamRoutes.put("/update", updateTeam);

export default TeamRoutes;
