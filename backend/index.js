const express = require("express");
const app = express();
const port = 8000;
const connectDB = require('./db/dbConnection');
const connectDB2 = require('./db/dbConnect2');
const User = require('./db/siteUser');
const fetchProducts = require('./db/FetchProduct')

const cors = require('cors');

//middleware for json parse
app.use(express.json());
// enable cors
app.use(cors());

//registration 
app.post('/signup' , async(req,res)=>{
    try{
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const siteUser = new User({ email, password });
        await siteUser.save();
        
        // No need to create a separate collection, MongoDB will create it implicitly when saving the document

        console.log(req.body);
        res.status(201).json({ message: 'REGISTRATION SUCCESSFUL' });
    } catch(error){
        console.error("Registration failed:", error);
        res.status(500).json({ error: 'Registration Failed' });
    }
});

app.post('/login',async(req,res)=>{
    try{
        const { email, password } = req.body;
        const siteUser = await User.findOne({ email });
        if(!siteUser){
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        if(siteUser.password !== password){
            return res.status(401).json({ error: 'Invalid email or password' })
        }

        res.status(200).json({ message: 'Login successful' });
    }catch(error){
        res.status(500).json({ error: 'Login failed' });
    }
});
app.get('/products', async (req, res) => {
    try {
        const products = await fetchProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});


// connectDB();
connectDB2();

app.listen(port,()=>{
    console.log('Server is listening on 8000');
});
