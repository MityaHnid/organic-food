
const defaultState = {
    value: ''
}

const NEW_TEXT = 'NEW_TEXT';
const CLEAR_TEXT = 'CLEAR_TEXT';
export const subscribeReducer = (state = defaultState, action) => {
    switch (action.type) {
        case NEW_TEXT:
            return {...state, value: action.text}
        case CLEAR_TEXT:
            return {...state, value: ''}
        default:
            return state
    }
}

export const newText = (text) => ({type: NEW_TEXT, text})
export const clearText = () =>({type: CLEAR_TEXT})