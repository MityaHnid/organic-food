import React from 'react';
import classes from "../Footer/Footer.module.css";
import {NavLink} from "react-router-dom";
import twitterImg from "../../assets/images/twitter.png"
import emailImg from "../../assets/images/email.png"
import linkedinImg from "../../assets/images/linkedin.png"
import googleImg from "../../assets/images/google.png"
import facebookImg from "../../assets/images/facebook.png"
import bg from "../../assets/images/pngegg.png"
import vegetablesFooter from "../../assets/images/vegetablesFooter.png"
import Logo from "../UI/Logo/Logo";
import Subscribe from "../UI/Subscribe/Subscribe";
import {useSelector} from "react-redux";

const Footer = () => {

    const navItems = useSelector(state => state.navReducer.navItemsProducts)
    const navItem = navItems.map((el) => <li><NavLink to={el.path}>{el.name}</NavLink></li>)

    return (
        <div className={classes.wrapper}>
            <div className={classes.footerBg} style={{background: `#E2FEE7 url(${bg}) no-repeat center bottom`}}>
                <div className={`${classes.newsLetter} container`} style={{backgroundImage: `linear-gradient(90.38deg, #000000 48.32%, rgba(0, 0, 0, 0.79) 69.07%, rgba(0, 0, 0, 0) 102.91%), url(${vegetablesFooter})`,}}>
                    <h2>Subscribe our Newsletter</h2>
                    <Subscribe />
                </div>
                <div className={`${classes.footer} container`}>
                    <nav>
                        <h5>Categories</h5>
                        <ul>
                            {navItem}
                        </ul>
                    </nav>
                    <div className={classes.socialNetwork}>
                        <div>
                            <Logo/>
                            <p>Lorem Ipsum has been the industry's standard<br/>
                                dummy text ever since the 1500s. when an unknown printer
                                took a galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                        </div>
                        <div>
                            <h6>Folow Us on Social Media</h6>
                            <ul>
                                <li>
                                    <NavLink to='/home'>
                                        <img src={twitterImg} alt='twitter logo'/>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/home'>
                                        <img src={emailImg} alt='email logo'/>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/home'>
                                        <img src={linkedinImg} alt='linkedin logo'/>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/home'>
                                        <img src={googleImg} alt='google logo'/>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/home'>
                                        <img src={facebookImg} alt='facebook logo'/>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.contactUs}>
                        <h5>Contact Us</h5>
                        <p>
                            Akshya Nagar, 1st Cross,
                            Rammurthy nagar, Bangalore
                        </p>
                        <span>+91 987 654 3210</span>
                        <span>dummyemail@gmail.com</span>
                    </div>
                </div>
            </div>
            <div className={`${classes.lowerFooter} ${classes.container}`}>
                <span>© 2023 Madbrains. All Rights Reserved.</span>
                <span>Terms & Conditions / Privacy & Policy</span>
            </div>
        </div>
    );
};

export default Footer;