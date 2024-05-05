// fetchProducts.js
const Product = require('./Product');

// Function to fetch products
async function fetchProducts() {
    try {
        // Fetch products from the database
        const products = await Product.find();
        return products;
    } catch (error) {
        console.error('Failed to fetch products:', error);
        throw new Error('Failed to fetch products');
    }
}

module.exports = fetchProducts;
