import express from 'express';

import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const productsRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// ✅ Load JSON safely
const products = JSON.parse(
  readFileSync(path.join(__dirname, './../data/products.json'), 'utf-8')
);

productsRouter.route("/").get((req, res) => {
    res.render("products", {
        products,
    });
}); // first "products" is the name of your EJS file (products.ejs) | 
// second "products" is the JavaScript variable that contains the parsed JSON data.

productsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    // res.send("Hello World !! I'm Product " + id);
    res.render("product", {
        product: products[id],
    });
});

// module.exports = productsRouter;
export default productsRouter;