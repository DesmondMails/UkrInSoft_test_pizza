import React from 'react';
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const StatisticList = ({text,icon}) => {
    return (
        <ListItem>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText
                primary={text}
            />
        </ListItem>
    );
};

export default StatisticList;