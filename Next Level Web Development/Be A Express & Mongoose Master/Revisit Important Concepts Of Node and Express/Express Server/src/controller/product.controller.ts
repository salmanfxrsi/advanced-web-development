import { Request, Response } from "express";
import { products } from "../data/product";

const getProducts = async (req: Request, res: Response) => {
  res.status(200).json(JSON.stringify(products));
};

export const productHandler = {
  getProducts,
};
