import express from "express";
const app = express();
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import propertiesRoute from "./routes/properties";
import registerRoute from "./routes/register";
import loginRoute from "./routes/login";
import logoutRoute from "./routes/logout";

import Properties from "./models/properties";
import properties from "./mockData";

dotenv.config();
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.json({ limit: "50mb" }));

// Import routes

app.use("/properties", propertiesRoute);
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("Home");
});

const DB_NAME = "ExpressTestDb";

mongoose.connect(
  process.env.MONGO_URI,
  {
    dbName: DB_NAME,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  },
  () => {
    console.log("Connected");
  }
);

Properties.deleteMany({}, () => {
  Properties.insertMany(properties);
});

app.listen(3001);
