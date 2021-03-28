import React, {Component} from 'react';
import {connect} from "react-redux";
import {getPizzaStat} from "../../store/pizza-reducer";
import Statistic from "./Statistic";

class StatisticContainer extends Component {
    componentDidMount() {
        this.props.getPizzaStat();
    }

    render() {
        return (
            <div>
                <Statistic
                    pizzaStatistic={this.props.pizzaStatistic}
                />
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    pizzaStatistic: state.pizzasPage.pizzaStatistic
});

export default connect(mapStateToProps, {getPizzaStat})(StatisticContainer);