import classes from './Cell.module.css'
import React from "react";
import Figure from "./Figure";

const Cell = (props) => {
    const Number = props.Number
    const Group = props.Group
    const Figures = props.Figures ? props.Figures : []
    const changeFigurePosition = props.changeFigurePosition
    const TeamNumber=props.TeamNumber

    let figure

    for (let i = 0; i < Figures.length; i++) {
        if (Figures[i].props.Number === Number && Figures[i].props.Group === Group)
            figure = Figures[i]
    }

    const onCellClick = () => {
        if(TeamNumber===Figure.TeamNumber){
        changeFigurePosition(Group, Number, TeamNumber)
        console.log('123')}
    }


    return (
        <div onClick={onCellClick} className={classes.Cell}>
            {figure}
        </div>
    )

}

export default Cell;