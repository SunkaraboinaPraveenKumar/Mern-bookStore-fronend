import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Avatar } from "flowbite-react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar } from "react-icons/fa";
// import required modules
import { Pagination } from 'swiper/modules';
import proPic from '../assets/prav.photo.jpg'

const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2>

            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='shadow-sxl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur reiciendis, illo consectetur possimus facere maiores repellat quae in debitis? Corrupti odio aspernatur sunt id! Labore doloremque nulla asperiores culpa.
                                    
                                </p>
                                <Avatar 
                                img={proPic} 
                                rounded
                                className='w-10 mb-4'
                                />
                                <h5 className='text-lg font-medium'>Praveen</h5>
                                <p className='text-base'>CEO, ABC</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-sxl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur reiciendis, illo consectetur possimus facere maiores repellat quae in debitis? Corrupti odio aspernatur sunt id! Labore doloremque nulla asperiores culpa.
                                    
                                </p>
                                <Avatar 
                                img={proPic} 
                                rounded
                                className='w-10 mb-4'
                                />
                                <h5 className='text-lg font-medium'>Praveen</h5>
                                <p className='text-base'>CEO, ABC</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-sxl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur reiciendis, illo consectetur possimus facere maiores repellat quae in debitis? Corrupti odio aspernatur sunt id! Labore doloremque nulla asperiores culpa.
                                    
                                </p>
                                <Avatar 
                                img={proPic} 
                                rounded
                                className='w-10 mb-4'
                                />
                                <h5 className='text-lg font-medium'>Praveen</h5>
                                <p className='text-base'>CEO, ABC</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-sxl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur reiciendis, illo consectetur possimus facere maiores repellat quae in debitis? Corrupti odio aspernatur sunt id! Labore doloremque nulla asperiores culpa.
                                    
                                </p>
                                <Avatar 
                                img={proPic} 
                                rounded
                                className='w-10 mb-4'
                                />
                                <h5 className='text-lg font-medium'>Praveen</h5>
                                <p className='text-base'>CEO, ABC</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-sxl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur reiciendis, illo consectetur possimus facere maiores repellat quae in debitis? Corrupti odio aspernatur sunt id! Labore doloremque nulla asperiores culpa.
                                    
                                </p>
                                <Avatar 
                                img={proPic} 
                                rounded
                                className='w-10 mb-4'
                                />
                                <h5 className='text-lg font-medium'>Praveen</h5>
                                <p className='text-base'>CEO, ABC</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='shadow-sxl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            {/* text */}
                            <div className='mt-7'>
                                <p className='mb-5'>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur reiciendis, illo consectetur possimus facere maiores repellat quae in debitis? Corrupti odio aspernatur sunt id! Labore doloremque nulla asperiores culpa.
                                    
                                </p>
                                <Avatar 
                                img={proPic} 
                                rounded
                                className='w-10 mb-4'
                                />
                                <h5 className='text-lg font-medium'>Praveen</h5>
                                <p className='text-base'>CEO, ABC</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Review