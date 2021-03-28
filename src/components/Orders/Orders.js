import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import OrderList from "./OrderList";
import Button from "@material-ui/core/Button";
import EqualizerIcon from '@material-ui/icons/Equalizer';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

const Orders = ({currentOrder, orders, pizzas}) => {
    // console.log(arr);
    const classes = useStyles();
    return (
        <>
            <Typography variant={'h3'} style={{textAlign: 'center'}}>
                Замовлення
            </Typography>
            <Grid container
                  spacing={2}
                  style={{paddingTop: 30, margin: 10}}
                  justify={"space-between"}
            >

                <Grid item
                      xs={4}
                      style={{textAlign: 'center'}}
                >
                    <Typography variant={"h6"} style={{textAlign: 'center'}}>Поточне замовлення</Typography>
                    {
                        currentOrder.map(pizza => (
                            <OrderList primary={Object.keys(pizza)[1]} secondary={pizza.createdAt}/>))
                    }
                </Grid>
                <Grid item
                      xs={4}
                      alignItems={"flex-end"}
                      style={{borderLeft: '2px solid grey'}}
                >
                    <List className={classes.root}>
                        <ListSubheader>Історія замовлень</ListSubheader>
                        {orders.map(order => (
                            <OrderList primary={Object.keys(order)[1]} secondary={order.createdAt}/>))}
                    </List>
                </Grid>
            </Grid>
            <Grid container justify={"center"} style={{paddingTop: 20, paddingBottom: 20}}>
                <Button
                    startIcon={<EqualizerIcon/>}
                    color={"primary"}
                    variant={"contained"}
                    component={NavLink}
                    to={'/statistic'}
                >
                    статистика
                </Button>
            </Grid>
        </>
    );
};

export default Orders;