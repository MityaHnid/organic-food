import {addManyFruitsAction} from "../store/vegetablesReducer";



export const fetchFruits = () => {
    return function (dispatch) {
        fetch('https://run.mocky.io/v3/b7eca5af-ccc7-4fb1-8330-fdb528e7f585')
            .then(response => response.json())
            .then(json => dispatch(addManyFruitsAction(json)))
            .catch(error => alert(`fuck ${error.message}`))
    }
}

