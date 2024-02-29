import express from "express";
import { example } from "../controllers/usersController.js";

const router = express.Router();

router.get('/', example)

export default router;
