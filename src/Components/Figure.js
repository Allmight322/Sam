import React from 'react';
import classes from './Figure.module.css'

const Order = (props) => {
    const Number = props.Nubmer
    const TeamNumber = props.TeamNumber
    return (
        <div className={classes['team'+TeamNumber]}>
            {Number}
        </div>
    );
};

export default Order;