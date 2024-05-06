import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addToCart } from '../../redux/cartSlice';
import axios from 'axios'; // Import axios for making HTTP requests

function ProductInfo() {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const [product, setProduct] = useState(null);
    const params = useParams();

    const getProductData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:8000/productinfo/${params.id}`); // Use params.id instead of id
            setProduct(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching product:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductData();
    }, [params.id]); // Use params.id in the dependency array

    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    const addCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-10 mx-auto">
                    {product && (
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt="ecommerce"
                                className="lg:w-1/3 w-full lg:h-auto object-cover object-center rounded"
                                src={product.image}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                    BRAND NAME
                                </h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                    {product.title}
                                </h1>
                                <div className="flex mb-4">
                                    {/* Rating stars */}
                                </div>
                                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                                    {product.description}
                                </p>
                                <div className="flex items-center">
                                    <span className="title-font font-medium text-2xl text-gray-900">
                                        ₹{product.price}
                                    </span>
                                    <button
                                        onClick={() => addCart(product)}
                                        className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                                    >
                                        Add To Cart
                                    </button>
                                    {/* Other action buttons */}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}

export default ProductInfo;
