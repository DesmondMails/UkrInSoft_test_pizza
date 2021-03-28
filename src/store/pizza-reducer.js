import {getPizzaInfo} from "../helpers/pizzaInfo";

const SET_ORDER = 'SET_ORDER';
const SET_CURRENT_ORDER = 'SET_CURRENT_ORDER';
const GET_PIZZA_INFO = 'GET_PIZZA_INFO';

let pizzas = {
    cap:{
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        sausage: 2,
        mashroom: 3,
        cheese: 1,
    },
    onions:{
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        meat: 1,
        cheese: 1,
    },
    king_one:{
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        mayo: 1,
        mashroom: 3,
        tomato: 2,
        cheese: 3,
        dill: 2,
        parsley: 2
    },
    gavay:{
        dough: 1,
        tomato_sauce: 1,
        onion: 2,
        ananas: 1,
        cheese: 2,
    },
    tonno:{
        dough: 1,
        tomato_sauce: 1,
        tuna: 2,
        kappers: 1,
        cheese: 1,
    },
    vegeterian:{
        dough: 1,
        tomato_sauce: 1,
        tomato: 2,
        kappers: 1,
        cucumber: 2,
        onion: 2,
        cheese: 1,
    }
};

let initialState = {
    pizzas: pizzas,
    orders: [],
    popular: [],
    ingredients: [],
    currentOrder: [],
    pizzaNames: Object.keys(pizzas),
    pizzaStatistic: null
}

const pizzaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ORDER:
            return {
                ...state,
                orders: state.orders.concat(action.orders)
            };
        case SET_CURRENT_ORDER:
            return {
                ...state,
                currentOrder: action.order
            };
        case GET_PIZZA_INFO:
            return {
                ...state,
                pizzaStatistic: getPizzaInfo(state.orders, state.pizzas)
            };
        default:
            return state
    }
}


export const addOrderToHistory = (orders) => ({
    type: SET_ORDER,
    orders
});
export const addCurrentOrder = (order) => ({
    type: SET_CURRENT_ORDER,
    order
});
export const getPizzaStat = () => ({
    type: GET_PIZZA_INFO
});
export default pizzaReducer;
