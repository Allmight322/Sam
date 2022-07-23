import classes from './Cell.module.css'
import React, {useState} from "react";
import EnterField from "./EnterField";
import Game from "./Game";
const Cell=(props)=>{
   const Number=props.Number
   const Group = props.Group
   const Figures = props.Figures ? props.Figures: []
   const setFigures = props.setFigures
   let figure

   for (let i = 0; i < Figures.length; i++) {
      if (Figures[i].props.Number===Number && Figures[i].props.Group===Group)
         figure=Figures[i]
   }
   return(
       <div className={classes.Cell}>{figure}</div>
   )
};

export default Cell;