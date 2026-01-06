import { Request, Response } from "express";
import { products } from "../data/product";

const getProducts = async (req: Request, res: Response) => {
  res.status(200).json(products);
};

const postProducts = async (req: Request, res: Response) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(200).json(products);
};

export const productHandler = {
  getProducts,
  postProducts,
};
