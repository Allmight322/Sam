import classes from "../App.module.css"
import React, {useState} from "react";
const EnterField=(props)=>{
    const setGameField = props.setGameField
    const GameChange = () => {
        setGameField(true)
    }
    return(
        <div className={classes.Panel}>
            <h1>Авторизация</h1>
            <input placeholder='Введите имя'/>
            <button onClick={GameChange}>Войти</button>
        </div>
);
};
export default EnterField;