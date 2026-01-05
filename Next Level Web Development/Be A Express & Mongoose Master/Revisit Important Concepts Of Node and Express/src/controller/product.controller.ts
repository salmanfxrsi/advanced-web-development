import { IncomingMessage, ServerResponse } from "http";
import { products } from "../data/product";

export const handleProducts = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const url = req.url;
  if (req.method === "GET" && url === "/products") {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify(products));
  }
  else if(req.method === "POST" && url === "/products")
  {
    try{
        // const body = parseBody(req);
    }catch (err) {
        res.writeHead(400);
        res.end('error occurred')
    }
  }
};
