import classes from './Game.module.css'
import Order from "./Figure";
const Game=()=>{

    return(
       <div className={classes.main}>
           <div>
               <table>
                   <tr>
                       <td><Order Nubmer='1' Size='1' TeamNumber='1'/></td>
                       <td><Order Nubmer='2' Size='2' TeamNumber='1'/></td>
                       <td><Order Nubmer='3' Size='3' TeamNumber='1'/></td>
                       <td><Order Nubmer='4' Size='4' TeamNumber='1'/></td>
                       <td><Order Nubmer='5' Size='5' TeamNumber='1'/></td>
                       <td><Order Nubmer='6' Size='6' TeamNumber='1'/></td>
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
                       <td><Order Nubmer='1' Size='1' TeamNumber='2'/></td>
                       <td><Order Nubmer='2' Size='2' TeamNumber='2'/></td>
                       <td><Order Nubmer='3' Size='3' TeamNumber='2'/></td>
                       <td><Order Nubmer='4' Size='4' TeamNumber='2'/></td>
                       <td><Order Nubmer='5' Size='5' TeamNumber='2'/></td>
                       <td><Order Nubmer='6' Size='6' TeamNumber='2'/></td>
                   </tr>
               </table>
           </div>

       </div>
   )
};
export default Game;