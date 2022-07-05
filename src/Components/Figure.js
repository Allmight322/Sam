import React from 'react';
import classes from './Figure.module.css'

const Order = (props) => {
    const Number = props.Nubmer
    const TeamNumber = props.TeamNumber
    const Image = props.Image
    return (
        <div className={classes['team'+TeamNumber]}>
            {Image}
        </div>
    );
};

export default Order;