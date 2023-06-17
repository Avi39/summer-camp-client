/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../banner/Banner';
import TopClasses from '../TopClasses/TopClasses';
import TopInstructor from '../TopInstructor/TopInstructor';
import ExtraSection from '../Extra_section/ExtraSection';

const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <TopClasses></TopClasses>
         <TopInstructor></TopInstructor>
         <ExtraSection></ExtraSection>
        </div>
    );    
};

export default Home;