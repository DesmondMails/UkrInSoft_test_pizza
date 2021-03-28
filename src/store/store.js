import pizzaReducer from "./pizza-reducer";
import {combineReducers, createStore} from "redux";


let reducers = combineReducers({
    pizzasPage: pizzaReducer
});

let store = createStore(reducers);

export default store;
