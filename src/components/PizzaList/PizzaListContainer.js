import React from 'react';
import PizzaList from "./PizzaList";
import {addCurrentOrder, addOrderToHistory} from "../../store/pizza-reducer";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const PizzaListContainer = (props) => {
    return (
        <div>
            <PizzaList
                pizzas={props.pizzas}
                pizzaNames={props.pizzaNames}
                addOrderToHistory={props.addOrderToHistory}
                addCurrentOrder={props.addCurrentOrder}
                currentOrder={props.currentOrder}
                history={props.history}
            />
        </div>
    );
};
let mapStateToProps = (state) => ({
    pizzas: state.pizzasPage.pizzas,
    pizzaNames: state.pizzasPage.pizzaNames,
    currentOrder: state.pizzasPage.currentOrder
});

export default compose(
    connect(mapStateToProps, {addOrderToHistory, addCurrentOrder}),
    withRouter
)(PizzaListContainer);