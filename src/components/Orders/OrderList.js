import React from 'react';
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import LocalPizzaIcon from '@material-ui/icons/LocalPizza';
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const OrderList = ({primary, secondary}) => {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <LocalPizzaIcon/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={primary} secondary={secondary}/>
        </ListItem>
    );
};

export default OrderList;