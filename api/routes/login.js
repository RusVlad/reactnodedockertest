import express from "express";
import UserController from "../controllers/user";
const router = express.Router();

router.post("/", async (req, res) => {
  UserController.login(req, res);
});

router.post("/user", async (req, res) => {
  UserController.getUser(req, res);
});

router.post("/getToken", async (req, res) => {
  UserController.generateToken(req, res);
});

export default router;
