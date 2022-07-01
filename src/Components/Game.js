import classes from './Game.module.css'
const Game=()=>{
   return(
       <div className={classes.main}>
           <div>
               <table>
                   <tr>
                       <td className={classes.main2}>1</td>
                       <td className={classes.main2}>2</td>
                       <td className={classes.main2}>3</td>
                       <td className={classes.main2}>4</td>
                       <td className={classes.main2}>5</td>
                       <td className={classes.main2}>6</td>
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
                       <td className={classes.main2}>1</td>
                       <td className={classes.main2}>2</td>
                       <td className={classes.main2}>3</td>
                       <td className={classes.main2}>4</td>
                       <td className={classes.main2}>5</td>
                       <td className={classes.main2}>6</td>
                   </tr>
               </table>
           </div>

       </div>
   )
};
export default Game;