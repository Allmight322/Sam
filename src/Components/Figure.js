import React, {useState} from 'react';
import classes from './Figure.module.css'
import EnterField from "./EnterField";
import Game from "./Game";

const Order = (props) => {
    const Number = props.Nubmer
    const TeamNumber = props.TeamNumber
    const Image = props.Image
    const Size = props.Size
    const [selected, setSelected]= useState('')
    function selectElement() {
        setSelected(TeamNumber) // ЭТО АЙДИ НАШ
    }

    return (
        <div className={classes['svg'+Size] + ' ' + classes['team'+TeamNumber]}>
            {Image}
        </div>
    );
};

export default Order;