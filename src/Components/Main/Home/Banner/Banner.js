import React from 'react';
import Button from "../../../UI/Button/Button";
import apricot from "../../../../assets/images/apricot.png";
import topView from "../../../../assets/images/topView.png";
import classes from "../Banner/Banner.module.css";
const Banner = () => {
    return (
        <section className={classes.wrapperBanner} style={{
            background: `#DAFFFB url(${topView}) no-repeat 0 60%`,
        }}>
            <div className={`${classes.banner} container`}>
                <div>
                    <h4>We Deliver Best Organic Food</h4>
                    <h1><span>Tasty & Healthy</span> Fresh<br/>
                        Organic Food</h1>
                    <Button name = 'Shop Now'/>
                </div>
                <div className={classes.bannerImg}>
                    <img src={apricot} alt='apricot'/>
                </div>
            </div>
        </section>
    );
};

export default Banner;