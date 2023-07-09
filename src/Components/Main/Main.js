import React from 'react';
import classes from "./Main.module.css";
import {Navigate, Route, Routes,} from "react-router-dom";
import Home from "./Home/Home";
import Product from "./Products/Product";
import Blog from "./Blog/Blog";
import Contact from "./Contact/Contact";
import Pages from "./Pages/Pages";
const Main = () => {
    return (
        <div className={classes.main}>
            <Routes>
                <Route path='/home/*' element={<Home />}></Route>
                <Route path='/products' element={<Product />}></Route>
                <Route path='/blog' element={<Blog />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/pages' element={<Pages />}></Route>
                <Route path='/' element={<Navigate replace to='/home/vegetables' />} />
            </Routes>
        </div>
    );
};

export default Main;