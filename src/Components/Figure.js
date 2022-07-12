import React, {useState} from 'react';
import classes from './Figure.module.css'
import EnterField from "./EnterField";
import Game from "./Game";

const Order = ({Number, TeamNumber, Image, Size, Selected, SetSelected}) => {
    let isSelected = (Selected===Number)
const message=()=>{
        SetSelected(Number)
    console.log(isSelected)

}



    return (
        <div onClick={message} className={classes['svg'+"isSelected"+isSelected] + ' '+classes['size'+Size] + ' ' + classes['team'+TeamNumber]}>

            {isSelected ? Image : Image}
        </div>
    );
};

export default Order;