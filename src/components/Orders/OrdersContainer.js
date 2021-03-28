import React from 'react';
import Orders from "./Orders";
import {connect} from "react-redux";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

const OrdersContainer = (props) => {
    return (
        <div>
            <Orders
                currentOrder={props.currentOrder}
                orders={props.orders.reverse()}
                pizzas={props.pizzas}
            />
        </div>
    );
};
let mapStateToProps = (state) => ({
    currentOrder: state.pizzasPage.currentOrder,
    orders: state.pizzasPage.orders,
    pizzas: state.pizzasPage.pizzas
});
export default compose(
    connect(mapStateToProps),
    withRouter
)(OrdersContainer)