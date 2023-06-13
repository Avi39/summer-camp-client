/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../banner/Banner';
import TopClasses from '../TopClasses/TopClasses';
import TopInstructor from '../TopInstructor/TopInstructor';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <TopClasses></TopClasses>
         <TopInstructor></TopInstructor>
        </div>
    );    
};

export default Home;