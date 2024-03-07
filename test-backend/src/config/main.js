import { config } from "dotenv";
config();
const user = process.env.MONGO_USER;
const pass = process.env.MONGO_PASS;
export const dbURI = `mongodb+srv://${user}:${pass}@radio.jcggwic.mongodb.net/radio-app?retryWrites=true&w=majority&appName=Radio`;

// export const baseUrl = "http://18.169.229.66:8080/api/v1/";
