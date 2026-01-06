import { Router } from "express";
import { productHandler } from "../controller/product.controller";

export const router = Router();

router.get('/products', productHandler.getProducts);

export default router;