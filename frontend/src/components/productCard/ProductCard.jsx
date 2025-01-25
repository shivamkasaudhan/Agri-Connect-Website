import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import axios from 'axios'; // Import axios for making HTTP requests

function ProductCard() {
    const context = useContext(myContext);
    const { mode, searchkey, filterType, filterPrice } = context;

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems);

    const [products, setProducts] = useState([]);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Fetch product data
    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:8000/products');
            const data = await response.json();
            console.log('Fetched products:', data); // Log fetched products
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
            // Handle error fetching products
        }
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Our Latest Collection</h1>
                    <div className="h-1 w-20 bg-green-500 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {products
                        .filter((obj) => obj.title && obj.title.toLowerCase().includes(searchkey.toLowerCase()))
                        .slice(0, 8) // Display only the first 6 products
                        .map((item, index) => {
                            const { title, price, image, _id } = item;
                            return (
                                <div key={index} className="p-4 md:w-1/4 drop-shadow-lg">
                                    <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                        <div onClick={() => window.location.href = `/productinfo/${_id}`} className="flex justify-center cursor-pointer">
                                            <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={image} alt="product" />
                                        </div>
                                        <div className="p-5 border-t-2">
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{title}</h1>
                                            <p className="leading-relaxed mb-3">₹{price}</p>
                                            <div className="flex justify-center">
                                                {/* Use Link for navigation */}
                                                {/* <Link to={`/productinfo/${_id}`} className="focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2">View Details</Link> */}
                                                {/* Add to cart button */}
                                                <button type="button" onClick={() => addCart(item)} className="focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2">Add To Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;
