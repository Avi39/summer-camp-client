/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from "lottie-react";
import animation from '../../../assets/140269-fighting-swords.json'
import animation2 from '../../../assets/46885-fighting-stick-wishu.json'
import animation3 from '../../../assets/26352-kungfu.json'
const ExtraSection = () => {
    return (
        <div>
            <p className='text-5xl mt-12 mb-12 font-semibold bg-slate-900 h-[100px] text-center text-white p-4 w-11/12 ml-16'>Activities</p>
            <div className='grid grid-cols-3'>
            <div className='w-96'>
                <Lottie animationData={animation} loop={true}></Lottie> 
            </div>
            <div className='w-96'>
                <Lottie animationData={animation2} loop={true}></Lottie>
            </div>
            <div className='w-96'>
                <Lottie animationData={animation3} loop={true}></Lottie>
            </div>
        </div>
        </div>
        
    );
};

export default ExtraSection;