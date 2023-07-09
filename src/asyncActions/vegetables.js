import {addManyVegetablesAction} from "../store/vegetablesReducer";



export const fetchVegetables = () => {
    return function (dispatch) {
        fetch('https://run.mocky.io/v3/36f81b80-73a5-4d10-862e-0984dc371fb1')
            .then(response => response.json())
            .then(json => dispatch(addManyVegetablesAction(json)))
            .catch(error => alert(`fuck ${error.message}`))
    }
}

