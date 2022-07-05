import classes from './Game.module.css'
import Order from "./Figure";
import React from 'react';
const Game=()=>{
    const image = <img src="https://svgx.ru/svg/48446.svg"/>
    return(
       <div className={classes.main}>
           <div>
               <table>
                   <tr>
                       <td><Order Nubmer='1' Size='1' TeamNumber='1' Image={image}/> </td>
                       <td><Order Nubmer='2' Size='1' TeamNumber='1' Image={image}/></td>
                       <td><Order Nubmer='3' Size='2' TeamNumber='1' Image={image}/></td>
                       <td><Order Nubmer='4' Size='2' TeamNumber='1' Image={image}/></td>
                       <td><Order Nubmer='5' Size='3' TeamNumber='1' Image={image}/></td>
                       <td><Order Nubmer='6' Size='3' TeamNumber='1' Image={image}/></td>
                   </tr>
               </table>
           </div>
        <table>
            <tr>
                <td className={classes.style}>1</td>
                <td className={classes.style}>2</td>
                <td className={classes.style}>3</td>
             </tr>
            <tr>
                <td className={classes.style}>4</td>
                <td className={classes.style}>5</td>
                <td className={classes.style}>6</td>
             </tr>
            <tr>
                 <td className={classes.style}>7</td>
                 <td className={classes.style}>8</td>
                 <td className={classes.style}>9</td>
             </tr>
         </table>
           <div>
               <table>
                   <tr>
                       <td><Order Nubmer='7' Size='1' TeamNumber='2' Image={image}/></td>
                       <td><Order Nubmer='8' Size='1' TeamNumber='2' Image={image}/></td>
                       <td><Order Nubmer='9' Size='2' TeamNumber='2' Image={image}/></td>
                       <td><Order Nubmer='10' Size='2' TeamNumber='2' Image={image}/></td>
                       <td><Order Nubmer='11' Size='3' TeamNumber='2' Image={image}/></td>
                       <td><Order Nubmer='12' Size='3' TeamNumber='2' Image={image}/></td>
                   </tr>
               </table>
           </div>

       </div>
   )
};
export default Game;