import express from "express";
import UserRoutes from "./users/route.js";
import DonorRoutes from "./donors/route.js";

const apiRoutes = express.Router();

apiRoutes.use("/user", UserRoutes);
apiRoutes.use("/donor", DonorRoutes);

export default apiRoutes;
