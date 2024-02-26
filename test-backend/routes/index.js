import express from "express";
import UserRoutes from "./users/route.js";
import DonorRoutes from "./donors/route.js";
import RequestRoutes from "./requests/route.js";
import RadioRoutes from "./radios/route.js";
import CategoryRoutes from "./categories/route.js";

const apiRoutes = express.Router();

apiRoutes.use("/user", UserRoutes);
apiRoutes.use("/donor", DonorRoutes);
apiRoutes.use("/request", RequestRoutes);
apiRoutes.use("/radio", RadioRoutes);
apiRoutes.use("/category", CategoryRoutes);

export default apiRoutes;
