import React from 'react';
import classes from "../Spelicialization/Spelicializatin.module.css";
import peach from "../../../../assets/images/peach.png";
import specializationIcon2 from "../../../../assets/images/specializationIcon2.png";
import specializationIcon1 from "../../../../assets/images/specializationIcon1.png";
import specializationIcon3 from "../../../../assets/images/specializationIcon3.png";
import specializationIcon4 from "../../../../assets/images/specializationIcon4.png";
const Specialization = () => {
    return (
        <section className={classes.wrapperSpecialization}>
            <div className={`${classes.specialization} container`}>
                <div>
                    <img src={peach} alt='photo our specialization'/>
                </div>
                <ul>
                    <li>
                        <div className={classes.specializationCard}>
                            <img src={specializationIcon1} alt='specialization icon'/>
                            <h4>100 % Organic Food</h4>
                            <p>There are many variations of
                                passages of Lorem Ipsum.</p>
                        </div>
                    </li>
                    <li>
                        <div className={classes.specializationCard}>
                            <img src={specializationIcon2} alt='specialization icon'/>
                            <h4>Fast Delivery</h4>
                            <p>There are many variations of
                                passages of Lorem Ipsum.</p>
                        </div>
                    </li>
                    <li>
                        <div className={classes.specializationCard}>
                            <img src={specializationIcon3} alt='specialization icon'/>
                            <h4>24/7 Service</h4>
                            <p>There are many variations of
                                passages of Lorem Ipsum.</p>
                        </div>
                    </li>
                    <li>
                        <div className={classes.specializationCard}>
                            <img src={specializationIcon4} alt='specialization icon'/>
                            <h4>Easy & Secure Payment</h4>
                            <p>There are many variations of
                                passages of Lorem Ipsum.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Specialization;