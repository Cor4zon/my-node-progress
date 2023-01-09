const fs = require('fs');
const path = require('path');

// const products = [];

module.exports = class Product {
    constructor(title, price) {
        this.title = title;
    }

    save() {
        const p = path.join(
            path.dirname(require.main.filename),
            'data',
            'products.json'
        )

        // todo: попробовать заменить arrow function на обычную функцию
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll() {
        const p = path.join(
            path.dirname(require.main.filename),
            'data',
            'products.json'
        )
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return []; 
            } 
            return JSON.parse(fileContent);
        })
        return products;
    }
}