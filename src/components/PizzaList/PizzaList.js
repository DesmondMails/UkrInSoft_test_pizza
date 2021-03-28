import React, {useState} from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PizzaCard from "./PizzaCard";
import Button from "@material-ui/core/Button";
import DoneAllIcon from '@material-ui/icons/DoneAll';

const PizzaList = ({pizzas, pizzaNames, addOrderToHistory, addCurrentOrder, history}) => {
    let [orders, setOrders] = useState([]);
    let [disabled, setDisabled] = useState(true);
    const addOrder = (name) => {
        let pizza = {
            createdAt: new Date().toLocaleString()
        };
        pizza[name] = pizzas[name];
        orders.push(pizza);
        setDisabled(false);
    };
    const handleSubmitOrder = () => {
        addCurrentOrder(orders);
        addOrderToHistory(orders);
        setOrders([]);
        history.push('/order')
    };
    return (
        <Container>
            <Typography
                color="textPrimary"
                gutterBottom
                variant="h2"
                align="center"
            >
                Меню
            </Typography>
            <Grid container spacing={3}>
                {
                    pizzaNames.map(pizza => (
                        <PizzaCard
                            name={pizza}
                            ingredients={Object.keys(pizzas[pizza])}
                            addOrder={addOrder}
                            withActions={true}
                        />))
                }
            </Grid>
            <Grid container justify={"center"} style={{paddingTop: 20, paddingBottom: 20}}>
                <Button
                    startIcon={<DoneAllIcon/>}
                    color={"primary"}
                    variant={"contained"}
                    disabled={disabled}
                    onClick={handleSubmitOrder}
                    // component={<NavLink to={'/order'}/>}
                >
                    замовити
                </Button>
            </Grid>
        </Container>
    );
};


export default PizzaList;