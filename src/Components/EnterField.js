import classes from "../App.module.css"
const EnterField=()=>{
return(
    <div className={classes.Panel}>
        <h1>Авторизация</h1>
        <input placeholder='Введите имя'/>
        <button>Войти</button>
    </div>
);
};
export default EnterField;