import classes from './Cell.module.css'
import React from "react";

const Cell = (props) => {
    const Number = props.Number
    const Group = props.Group
    const Figures = props.Figures ? props.Figures : []
    const changeFigurePosition = props.changeFigurePosition

    let figure

    for (let i = 0; i < Figures.length; i++) {
        if (Figures[i].props.Number === Number && Figures[i].props.Group === Group)
            figure = Figures[i]
    }

    const onCellClick = () => {
        changeFigurePosition(Group, Number)
    }

    return (
        <div onClick={onCellClick} className={classes.Cell}>
            {figure}
        </div>
    )

}

export default Cell;