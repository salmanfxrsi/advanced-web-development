import { Router, Request, Response } from "express";
import { productHandler } from "../controller/product.controller";

export const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "express server is running!" });
});

router.get("/products", productHandler.getProducts);
router.post("/products", productHandler.postProducts);

export default router;
