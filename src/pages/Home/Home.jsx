import React from 'react';
import Hero from '../../components/Hero/Hero';
import WorkArea from '../../components/WorkArea/WorkArea';
import WebTech from '../../components/WebTech/WebTech';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <WorkArea></WorkArea>
            <WebTech></WebTech>
        </div>
    );
};

export default Home;