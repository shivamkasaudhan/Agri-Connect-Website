import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Filter from '../../components/filter/Filter';
import Layout from '../../components/layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';

function Allproducts() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);
    console.log(cartItems);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading indicator

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch('http://localhost:8000/products');
            const data = await response.json();
            console.log('Fetched products:', data); // Log fetched products
            setProducts(data);
            setLoading(false); // Set loading to false after data is fetched
        } catch (error) {
            console.error("Error fetching products:", error);
            setLoading(false); // Set loading to false in case of error
            // Handle error fetching products
        }
    };

    return (
        <Layout>
            <Filter />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-8 md:py-16 mx-auto">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Latest Collection</h1>
                        <div className="h-1 w-20 bg-green-600 rounded"></div>
                    </div>

                    {loading ? (
                        <p>Loading...</p> // Display loading indicator while fetching data
                    ) : (
                        <div className="flex flex-wrap -m-4">
                            {Array.isArray(products) ? (
                                products.map((item) => (
                                    <div key={item._id} className="p-4 md:w-1/4 drop-shadow-lg">
                                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden">
                                            <div className="flex justify-center cursor-pointer">
                                                <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={item.image} alt="product" />
                                            </div>
                                            <div className="p-5 border-t-2">
                                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.title}</h1>
                                                <p className="leading-relaxed mb-3">₹{item.price}</p>
                                                <div className="flex justify-center">
                                                    {/* Use Link for navigation */}
                                                    <Link to={`/productinfo/${item._id}`} className="focus:outline-none text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm w-full py-2">View Details</Link>
                                                    {/* Add to cart button */}
                                                    <button type="button" onClick={() => addCart(item)} className="ml-4 focus:outline-none text-white bg-indigo-500 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm py-2">Add To Cart</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>No products available.</p>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}

export default Allproducts;
