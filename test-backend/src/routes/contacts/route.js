import { Router } from "express";
import {
  addContact,
  deleteContact,
  getContact,
  getContacts,
  updateContact,
} from "./controller.js";

const ContactRoutes = Router();

ContactRoutes.post("/add", addContact);
ContactRoutes.get("/all", getContacts);
ContactRoutes.get("/single/:id", getContact);
ContactRoutes.put("/update", updateContact);
ContactRoutes.put("/status", updateContact);
ContactRoutes.delete("/delete/:id", deleteContact);

export default ContactRoutes;
