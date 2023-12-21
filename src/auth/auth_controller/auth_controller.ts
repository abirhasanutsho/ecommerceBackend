import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jsonwebToken from "jsonwebtoken";

const prisma = new PrismaClient();

export const createUser = async (request: Request, response: Response) => {

    try {
        const { name, email, password, phone, address } = request.body;

        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password,
                phone,
                address
            },
        });

        const token = jsonwebToken.sign({ userId: newUser.id }, "SECRET");

        response.status(200).json({
            status: true,
            message: "Registration Successfully",
            token: token,
            user: newUser, 
        })

    } catch (error) {

        response.status(500).json(error);

    }


}