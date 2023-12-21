// routes.ts
import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { verifyToken } from "../middleware/auth_middleware";

const prisma = new PrismaClient();

export const getUserProfile = async (request: Request, response: Response) => {
    try {
        const user = request.body.user;

        if (!user) {
            return response.status(401).json({ error: "User information not available" });
        }

        const userData = await prisma.user.findUnique({
            where: {
                id: user.userId,
            },
        });

        response.status(200).json({ profile: userData });
    } catch (error) {
        console.error(error);
        response.status(500).json({ error: "Internal Server Error" });
    }
};

