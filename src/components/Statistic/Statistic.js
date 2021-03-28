import React from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import StatisticList from "./StatisticList";
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';

const useStyles = makeStyles((theme) => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    }
}))

const Statistic = ({pizzaStatistic}) => {
    const classes = useStyles();

    console.log(pizzaStatistic);
    return (
        <>
            <Typography variant={'h2'} style={{textAlign: 'center'}}>
                Статистика
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                    <Typography variant="h6" className={classes.title}>
                        Топ-5 популярних піц
                    </Typography>
                    <div className={classes.demo}>
                        <List dense>
                            {
                                pizzaStatistic.popular.map((pizza) => (
                                    <StatisticList text={pizza} icon={<LocalPizzaIcon />} />
                                ))
                            }
                        </List>
                    </div>
                </Grid>

                <Grid item xs={12} md={6} style={{textAlign: 'center'}}>
                    <Typography variant="h6" className={classes.title}>
                        Список продуктів використаних для приготування
                    </Typography>
                    <div className={classes.demo}>
                        <List dense>
                            {
                                pizzaStatistic.ingredients.map((ingredient) => (
                                    <StatisticList text={ingredient} icon={<ArrowRightIcon />} />
                                ))
                            }
                        </List>
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default Statistic;