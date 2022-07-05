import React from 'react';
import classes from './Figure.module.css'

const Order = (props) => {
    const Number = props.Nubmer
    const TeamNumber = props.TeamNumber
    const Image = props.Image
    const Size = props.Size
    return (
        <div className={classes.svg + " " + classes['team'+TeamNumber+Size]}>
            {Image}
        </div>
    );
};

export default Order;