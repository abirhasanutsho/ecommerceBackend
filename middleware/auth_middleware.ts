// middleware.ts
import jwt, { VerifyErrors } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const verifyToken = async (request: Request, response: Response, next: NextFunction) => {
    try {
        let token;
        let authHeader = request.headers.authorization;

        if (authHeader && authHeader.startsWith("Bearer")) {
            token = authHeader.split(" ")[1];

            jwt.verify(token, "SECRET", async (err: VerifyErrors | null, user: any) => {
                if (err) {
                    console.log(err);
                    return response.status(401).json({ error: "Invalid token" });
                }

                request.body.user = user;

                next();
            });
        } else {
            return response.status(401).json({ error: "Authorization header missing or invalid" });
        }
    } catch (error) {
        console.log(error);
        return response.status(500).json({ error: "Internal Server error" });
    }
};
