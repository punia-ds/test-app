import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
import { connection } from "./config/db.js";
import apiRoutes from "./routes/index.js";

config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/", apiRoutes);

app.listen(port, () => {
  connection();
  console.log(`Server runs at http://localhost:${port}`);
});
