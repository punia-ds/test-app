import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { config } from "dotenv";
import { connection } from "./config/db.js";
import fs from "fs";
import apiRoutes from "./routes/index.js";
import axios from "axios";

config();
const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1/", apiRoutes);

// app.get("/donor", (req, res) => {
//   fs.readFile("./data/donor.json", "utf-8", (err, data) => {
//     if (err) return console.log(err);
//     let donor = JSON.parse(data);

//     for (let d in donor) {
//       console.log(donor[d]);
//       const response = axios.post(
//         `http://localhost:8080/api/v1/donor/register`,
//         {
//           name: donor[d].name,
//           address: donor[d].address,
//           mobile: donor[d].mobile,
//           age: donor[d].age,
//           area: donor[d].area,
//           b_group: donor[d].b_group,
//           description: donor[d].description,
//           dob: donor[d].dob,
//           getTime: donor[d].getTime,
//           active: donor[d].active,
//         }
//       );
//       console.log(response);
//     }
//   });
// });
app.listen(port, () => {
  connection();
  console.log(`Server runs at http://localhost:${port}`);
});
