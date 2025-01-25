const express = require("express");
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');
const User = require('./db/siteUser');
const Products = require('./db/Product');
const Order = require('./db/Order');

const cors = require('cors');
const siteUser = require("./db/siteUser");

//middleware for json parse
app.use(express.json());
// enable cors
app.use(cors());

//registration 
app.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new siteUser({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});


app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare plain text password
        if (user.password !== password) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ error: 'Login failed' });
    }
});


app.get('/products', async (req, res) => {
    try {
        // Fetch all products from the database
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

app.get('/productinfo/:id', async (req, res) => {
    try {
        const productId = req.params.id; // Corrected: Access id parameter using req.params.id
        const product = await Products.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ error: 'Failed to fetch product' });
    }
});
app.post('/order', async (req, res) => {
    try {
        // Extract order information from request body
        const { cartItems, addressInfo, email, userid, paymentId } = req.body;

        // Create a new order document
        const newOrder = new Order({
            cartItems,
            addressInfo,
            email,
            userid,
            paymentId
        });

        // Save the order to the database
        await newOrder.save();

        // Respond with success message
        res.status(201).json({ message: 'Order created successfully' });
    } catch (error) {
        console.error("Error creating order:", error);
        res.status(500).json({ error: 'Failed to create order' });
    }
});


// connectDB();
connectDB();

app.listen(port,()=>{
    console.log('Server is listening on 8000');
});
