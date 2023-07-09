import React from 'react';
import classes from "../OurProducts/OurProducts.module.css";
import bgOurProducts from "../../../../assets/images/bgOurProducts.png";
import carrot from "../../../../assets/images/carrot.png";
import Button from "../../../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {fetchVegetables} from "../../../../asyncActions/vegetables";
import {fetchFruits} from "../../../../asyncActions/fruits";
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import Fruits from "../../Products/Fruits/Fruits";
import Vegetables from "../../Products/Vegetables/Vegetables";
import Meat from "../../Products/Meat/Meat";
import DryFruits from "../../Products/DryFruits/DryFruits";
import Juice from "../../Products/Juice/Juice";


const OurProducts = () => {

    const navItems = useSelector(state => state.navReducer.navItemsProducts)
    const navItem = navItems.map((el) => <li><NavLink to={el.path}>{el.name}</NavLink></li>)

    return (
        <section className={classes.ourProducts} style={{
            background: `url(${bgOurProducts}) no-repeat left 220px`,
        }}>
            <div className='container'>
                <h2>~ Our Products ~</h2>
                <nav>
                    <ul>
                        {navItem}
                    </ul>
                </nav>
            </div>
            <Routes>
                <Route path='/vegetables' element={<Vegetables />}></Route>
                <Route path='/fruits' element={<Fruits />}></Route>
                <Route path='/meat' element={<Meat />}></Route>
                <Route path='/dry_fruits' element={<DryFruits />}></Route>
                <Route path='/juice' element={<Juice />}></Route>
                <Route path='/' element={<Navigate replace to='/vegetables' />} />
            </Routes>
        </section>
    );
};

export default OurProducts;