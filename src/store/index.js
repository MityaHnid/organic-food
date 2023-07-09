import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {navReducer} from "./navReducer";
import {subscribeReducer} from "./subscribeReducer";
import {vegetablesReducer} from "./vegetablesReducer"
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    navReducer,
    subscribeReducer,
    vegetablesReducer,
})
export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))