import { verifyToken } from "../middleware/auth_middleware";
import { getUserProfile } from "../profile/profile_controller";
import express from "express";

const router = express.Router();

router.get("/api/user/profile", verifyToken, getUserProfile);

export default router;