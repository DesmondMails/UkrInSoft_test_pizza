import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import PizzaList from "./components/PizzaList/PizzaListContainer";
import { Switch} from 'react-router-dom';
import {Route} from "react-router-dom";
import Orders from "./components/Orders/OrdersContainer";
import Statistic from "./components/Statistic/StatisticContainer";

function App() {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path={'/'} component={PizzaList}/>
                <Route path={'/order'} component={Orders}/>
                <Route path={'/statistic'} component={Statistic}/>
            </Switch>
        </div>
    );
}

export default App;
