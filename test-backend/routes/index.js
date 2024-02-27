import express from "express";
import UserRoutes from "./users/route.js";
import DonorRoutes from "./donors/route.js";
import RequestRoutes from "./requests/route.js";
import RadioRoutes from "./radios/route.js";
import CategoryRoutes from "./categories/route.js";
import AppRoutes from "./app/route.js";
import TeamRoutes from "./teams/route.js";
import SocialRoutes from "./social/route.js";

const apiRoutes = express.Router();

apiRoutes.use("/user", UserRoutes);
apiRoutes.use("/donor", DonorRoutes);
apiRoutes.use("/request", RequestRoutes);
apiRoutes.use("/radio", RadioRoutes);
apiRoutes.use("/category", CategoryRoutes);
apiRoutes.use("/app", AppRoutes);
apiRoutes.use("/team", TeamRoutes);
apiRoutes.use("/social", SocialRoutes);

export default apiRoutes;
