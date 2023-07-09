const defaultState = {
    vegetables: [],
    fruits: [],
}


const ADD_MANY_VEGETABLES = 'ADD_MANY_VEGETABLES';
const ADD_MANY_FRUITS = 'ADD_MANY_FRUITS';


export const vegetablesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_MANY_VEGETABLES:
            return {...state, vegetables: [...state.vegetables, ...action.payload]}
        case ADD_MANY_FRUITS:
            return {...state, fruits: [...state.fruits, ...action.payload]}
               default:
            return state
    }
}
export const addManyVegetablesAction = (payload) => ({type: ADD_MANY_VEGETABLES, payload})
export const addManyFruitsAction = (payload) => ({type: ADD_MANY_FRUITS, payload})
