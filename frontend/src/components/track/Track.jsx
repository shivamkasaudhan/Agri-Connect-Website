import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faTruck, faStar } from '@fortawesome/free-solid-svg-icons';
import myContext from '../../context/data/myContext';

function Track() {
    const context = useContext(myContext);
    const { mode } = context;

    return (
        <div>
            <section>
                <div className="container mx-auto px-5 md:py-5">
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-300 border-gray-300 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                <FontAwesomeIcon icon={faLeaf} className="text-green-500 w-12 h-12 mb-3 inline-block" />

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Organic</h2>
                                <p className="leading-relaxed">Our Products are 100% Organic.</p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-300 border-gray-300 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                <FontAwesomeIcon icon={faTruck} className="text-green-500 w-12 h-12 mb-3 inline-block" />

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Fast Delivery</h2>
                                <p className="leading-relaxed">Our Products are 100% Fresh.</p>
                            </div>
                        </div>

                        <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                            <div className="border-2 hover:shadow-xl hover:shadow-gray-300 border-gray-300 bg-gray-100 shadow-[inset_0_0_2px_rgba(0,0,0,0.6)] px-4 py-6 rounded-lg" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                                <FontAwesomeIcon icon={faStar} className="text-green-500 w-12 h-12 mb-3 inline-block" />

                                <h2 className="title-font font-medium text-lg text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>Premium Quality</h2>
                                <p className="leading-relaxed">Our Products are 100% Organic.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Track;
