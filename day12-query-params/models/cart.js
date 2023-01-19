const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
)


module.exports = class Cart {
    constructor() {
        this.products = [];
        this.totalPrice = 0;
    }

    static addProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            let cart = { products: [], totalPrice: 0};
            if (!err) {
                cart = JSON.parse(fileContent);
            }

            const existingProductId = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductId];
            let updatedProduct;

            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty += 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 }
                cart.products = [...cart.products, updatedProduct];
            }   
            cart.totalPrice += productPrice;
            cart.products = { ...cart.products, updatedProduct }


            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        })
    }
}