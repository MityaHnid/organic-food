import React from 'react';
import classes from "../../Home/OurProducts/OurProducts.module.css";
import carrot from "../../../../assets/images/carrot.png";
import Button from "../../../UI/Button/Button";
import {fetchFruits} from "../../../../asyncActions/fruits";
import {useDispatch, useSelector} from "react-redux";


const Fruits = () => {

    const dispatch = useDispatch();
    const fruits = useSelector(state => state.vegetablesReducer.fruits)
    console.log(fruits)

    return (
        <div className='container'>
            <ul className={classes.cards}>
                <li>
                    <div className={classes.card}>
                        <img src={carrot} alt='photo product'/>
                        <h4>$ 10.00 - 22.00</h4>
                        <h5>Carrots</h5>
                    </div>
                </li>
                <li>
                    <div className={classes.card}>
                        <img src={carrot} alt='photo product'/>
                        <h4>$ 10.00 - 22.00</h4>
                        <h5>Red Tomatoes</h5>
                    </div>
                </li>
                <li>
                    <div className={classes.card}>
                        <img src={carrot} alt='photo product'/>
                        <h4>$ 10.00 - 22.00</h4>
                        <h5>Carrots</h5>
                    </div>
                </li>
                <li>
                    <div className={classes.card}>
                        <img src={carrot} alt='photo product'/>
                        <h4>$ 10.00 - 22.00</h4>
                        <h5>Carrots</h5>
                    </div>
                </li>
                <li>
                    <div className={classes.card}>
                        <img src={carrot} alt='photo product'/>
                        <h4>$ 10.00 - 22.00</h4>
                        <h5>Carrots</h5>
                    </div>
                </li>
                <li>
                    <div className={classes.card}>
                        <img src={carrot} alt='photo product'/>
                        <h4>$ 10.00 - 22.00</h4>
                        <h5>Carrots</h5>
                    </div>
                </li>
                <li>
                    <div className={classes.card}>
                        <img src={carrot} alt='photo product'/>
                        <h4>$ 10.00 - 22.00</h4>
                        <h5>Carrots</h5>
                    </div>
                </li>
                <li>
                    <div className={classes.card}>
                        <img src={carrot} alt='photo product'/>
                        <h4>$ 10.00 - 22.00</h4>
                        <h5>Carrots</h5>
                    </div>
                </li>
            </ul>
            <ul className={classes.cards}>
                {fruits.map(e => <li>
                    <div className={classes.card}>
                        <img src={e.image} alt='photo product'/>
                        <h4>$ {e.price}.00</h4>
                        <h5>{e.title}</h5>
                    </div>
                </li>)}
            </ul>
            <div className={classes.wrapperButton}>
                <Button name='View More Fruits' func={() => {
                    dispatch(fetchFruits())
                }} />
            </div>
        </div>
    );
};

export default Fruits;