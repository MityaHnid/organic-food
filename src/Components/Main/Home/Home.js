import React from 'react';
import classes from "../Home/Home.module.css"
import Banner from "./Banner/Banner";
import OurProducts from "./OurProducts/OurProducts";
import Specialization from "./Spelicialization/Specialization";

const Home = () => {
    return (
        <div className={classes.home}>
            <Banner />
            <OurProducts />
            <Specialization />
        </div>
    );
};

export default Home;