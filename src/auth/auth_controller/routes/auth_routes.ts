import { createUser } from "../auth_controller";
import express from "express";

const router = express.Router();

router.post("/registration", createUser);

export default router;