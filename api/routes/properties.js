import express from "express";
const router = express.Router();
import { verify } from "./verifyToken";
import PropertiesController from "../controllers/properties";

router.get("/", verify, async (req, res) => {
  PropertiesController.getAll(req, res);
});

export default router;
