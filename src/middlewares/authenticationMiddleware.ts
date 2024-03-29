import { Request, Response, NextFunction } from "express";
import { getConnection, getRepository } from "typeorm";
import { User } from "../models/User";
import jwt from "jsonwebtoken";
import "dotenv/config";

interface IToken {
  data: string,
  iat: number,
  exp: number;
}

const secret = String(process.env.JWT_SECRET);

const auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authorization;
    if (token) {
      const decodedData = jwt.verify(token.split(" ")[1], secret);
      const id = Number((decodedData as IToken).data);
      const userRepository = getRepository(User);
      const existingUser = await userRepository.findOne({ where: { id } });
      if (existingUser) {
        req.body.user = { id: existingUser.id, role: existingUser.role };
        next();
      } else res.status(401).send({ error: "Unauthorized" });
    } else res.status(401).send({ error: "Unauthorized" });
  } catch (err) {
    res.status(401).send({ error: "Unauthorized" });
  }
};

export default auth;