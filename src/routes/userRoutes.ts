import { Router } from "express";
import { checkAuth, initializeAdmin, registerUser, removeUserById, updateOwnPassword } from "../controllers/userControllers";
import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import auth from "../middlewares/authenticationMiddleware";
import admin from "../middlewares/adminMiddleware";

const userRoutes = (): Router => {
  const router = Router();
  router.post("/signup", [
    body("username").isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters long."),
    body("password").isLength({ min: 5 })
      .withMessage("Password must be at least 5 characters long."),
  ], async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } return next();
  }, registerUser);
  router.get("/auth", checkAuth);
  router.post("/init", initializeAdmin);
  router.patch("/update", auth, updateOwnPassword);
  router.delete("/:id", auth, admin, removeUserById);
  return router;
};

export default userRoutes;
