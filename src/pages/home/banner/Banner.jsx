/* eslint-disable no-unused-vars */
import React from 'react';
import banner1 from '../../../assets/marshal-kids.jpeg'
import banner2 from '../../../assets/marshal-girl.jpg'
import banner3 from '../../../assets/Types-of-Martial-Arts.png'
import banner4 from '../../../assets/344017850-H.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel max-w-6xl mx-44 my-8">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner1} />
                <div className="absolute flex justify-between h-full  left-0  top-0 bg-gradient-to-r from-[#151515] to-[rgb(21,21,21,14)]">
                    <div className='ml-28 mt-32'>
                        <p className='text-7xl mr-6 font-bold text-white'>Martial <br />Art <br /> For KIDS</p>
                        <button className="btn btn-warning mt-4">Explore More</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner2} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner3} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner4} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;