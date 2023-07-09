import React from 'react';
import classes from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import Logo from "../UI/Logo/Logo";

const Header = () => {
    const navItems = useSelector(state => state.navReducer.navItems)
    const navItem = navItems.map((el) => <li><NavLink to={el.path}>{el.name}</NavLink></li>)
    return (
        <div className={`${classes.header} container`}>
            <Logo />
            <nav>
                <ul>
                    {navItem}
                </ul>
            </nav>
            <div className={classes.interaction}>
                <button className={classes.signUp}>Sign Up</button>
                <button className={classes.signIn}>Sign In</button>
            </div>
        </div>
    );
};

export default Header;