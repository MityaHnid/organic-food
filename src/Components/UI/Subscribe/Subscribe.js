import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {clearText, newText} from "../../../store/subscribeReducer";
import Button from "../Button/Button";


const Subscribe = () => {
    const dispatch = useDispatch()
    const values = useSelector(state => state.subscribeReducer.value)
    const newTextValue = () => {
        dispatch(newText())
    }
    let newSubscriber = React.createRef()
    let addNewSubscriber = () => {
        let subscriber = newSubscriber.current.value;
        console.log(subscriber)
        dispatch(clearText())
    }
    return (
        <div>
            <input ref={newSubscriber} type='text' onChange={newTextValue} value={values} required
                   placeholder='Enter your email'/>
            <Button name='Subscribe' func={addNewSubscriber} />
        </div>
    );
};

export default Subscribe;