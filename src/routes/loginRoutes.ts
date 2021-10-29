
import { Router } from "express";
import { login } from "../controllers/loginControllers";
import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

const loginRoutes = (): Router => {
  const router = Router();
  router.post("/", login);
  return router;
};

export default loginRoutes;
