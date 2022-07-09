import React, {useState} from 'react';
import classes from './Figure.module.css'
import EnterField from "./EnterField";
import Game from "./Game";

const Order = ({Number, TeamNumber, Image, Size, Selected}) => {
    let isSelected = (Selected===Number)


    return (
        <div className={classes['svg'+Size] + ' ' + classes['team'+TeamNumber]}>
            {isSelected ? "+" : Image}
        </div>
    );
};

export default Order;