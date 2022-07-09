import React, {useState} from 'react';
import classes from './Figure.module.css'
import EnterField from "./EnterField";
import Game from "./Game";

const Order = ({Number, TeamNumber, Image, Size, Selected, SetSelected}) => {
    let isSelected = (Selected===Number)
const message=()=>{
        SetSelected(Number)
        console.log('123')
}

    return (
        <div onClick={message} className={classes['svg'+Size] + ' ' + classes['team'+TeamNumber]}>

            {isSelected ? "+" : Image}
        </div>
    );
};

export default Order;