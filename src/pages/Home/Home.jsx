import React from 'react';
import Hero from '../../components/Hero/Hero';
import WorkArea from '../../components/WorkArea/WorkArea';
import WebTech from '../../components/WebTech/WebTech';
import LatestProjects from '../../components/LatestProjects/LatestProjects';
import GetInTouch from '../../components/GetInTouch/GetInTouch';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <WorkArea></WorkArea>
            <WebTech></WebTech>
            <LatestProjects></LatestProjects>
            <GetInTouch></GetInTouch>
        </div>
    );
};

export default Home;