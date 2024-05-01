import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import image from './profile.png';

function Testimonial() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <div>
            <section className=''>
                <div className=" container mx-auto px-5 py-10">
                    <h1 className=' text-center text-3xl font-bold text-black' style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Reviews</h1>
                    <h2 className=' text-center text-2xl font-semibold mb-10' style={{ color: mode === 'dark' ? 'white' : '' }}>What our <span className=' text-green-500'>customers</span> are saying</h2>
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={image} />
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit deserunt quasi cumque nesciunt qui? Repudiandae molestiae accusamus, provident nulla dolorem nam nobis non facere enim, ullam libero, eligendi incidunt perferendis?</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 style={{ color: mode === 'dark' ? '#ff4162' : '' }} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kamal Nayan Upadhyay</h2>
                                <p style={{ color: mode === 'dark' ? 'white' : '' }} className="text-gray-500">Senior Product Designer</p>
                            </div>
                        </div>

                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={image} />
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="leading-relaxed">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsa unde deleniti quod omnis consequatur distinctio, aspernatur nobis nam ullam consequuntur excepturi itaque porro reiciendis voluptas dolores! Quae, fuga voluptatum!</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="text-gray-500">UI Develeoper</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src={image} />
                                <p style={{color: mode === 'dark' ? 'white' : ''}} className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sed recusandae similique in odit nulla, voluptatem ipsa ducimus impedit perspiciatis dignissimos quam. Error rerum impedit facere sit nemo eaque excepturi?</p>
                                <span className="inline-block h-1 w-10 rounded bg-green-500 mt-6 mb-4" />
                                <h2 style={{color: mode === 'dark' ? '#ff4162' : ''}} className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">React Js</h2>
                                <p  style={{color: mode === 'dark' ? 'white' : ''}}className="text-gray-500">CTO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonial