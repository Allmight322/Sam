import classes from './Game.module.css'
import Figure from "./Figure";
import React, {useState} from 'react';
import Cell from "./Cell";
import image from "./ImageBear"

const Game = () => {

    const [selected, setSelected] = useState()
    const [figuresAtr, setFiguresAtr] = useState([
        {id: '1', Number: '1', Group: '1', Size: '1', TeamNumber: '1'},
        {id: '2', Number: '2', Group: '1', Size: '1', TeamNumber: '1'},
        {id: '3', Number: '3', Group: '1', Size: '2', TeamNumber: '1'},
        {id: '4', Number: '4', Group: '1', Size: '2', TeamNumber: '1'},
        {id: '5', Number: '5', Group: '1', Size: '3', TeamNumber: '1'},
        {id: '6', Number: '6', Group: '1', Size: '3', TeamNumber: '1'},
        {id: '7', Number: '1', Group: '3', Size: '1', TeamNumber: '2'},
        {id: '8', Number: '2', Group: '3', Size: '1', TeamNumber: '2'},
        {id: '9', Number: '3', Group: '3', Size: '2', TeamNumber: '2'},
        {id: '10', Number: '4', Group: '3', Size: '2', TeamNumber: '2'},
        {id: '11', Number: '5', Group: '3', Size: '3', TeamNumber: '2'},
        {id: '12', Number: '6', Group: '3', Size: '3', TeamNumber: '2'},
    ])

    const changeFigurePosition = (newGroup, newNumber) => {
        // find selected figure
        const selectedFigureAttr = figuresAtr.find(e => e.id === selected)

        // exit if not found
        if (selectedFigureAttr === undefined)
            return

        console.log("Move figure id=" + selected, "to new group=" + newGroup, "number=" + newNumber)

        // change attributes
        selectedFigureAttr.Group = newGroup
        selectedFigureAttr.Number = newNumber

        // save new value
        setFiguresAtr(
            (previousValue) => [...previousValue.filter(e => e.id !== selected), selectedFigureAttr]
        )

        // deselect
        setSelected(undefined)
    }

    const figures = figuresAtr.map(e => <Figure id={e.id}
                                                Number={e.Number}
                                                Group={e.Group}
                                                Size={e.Size}
                                                TeamNumber={e.TeamNumber}
                                                Image={image}
                                                Selected={selected}
                                                SetSelected={setSelected}
    />)

    const getCell = (number, group, style = '') =>
        <td className={style}><Cell Number={number}
                                    Group={group}
                                    Figures={figures}
                                    SetFiguresAtr={setFiguresAtr}
                                    changeFigurePosition={changeFigurePosition}
        /></td>


    return (
        <div className={classes.main}>

            <div><table><tbody>
                <tr>
                    {getCell('1', '1')}
                    {getCell('2', '1')}
                    {getCell('3', '1')}
                    {getCell('4', '1')}
                    {getCell('5', '1')}
                    {getCell('6', '1')}
                </tr>
            </tbody></table></div>
            <table><tbody>
                <tr>
                    {getCell('1', '2', classes.style)}
                    {getCell('2', '2', classes.style)}
                    {getCell('3', '2', classes.style)}
                </tr>
                <tr>
                    {getCell('4', '2', classes.style)}
                    {getCell('5', '2', classes.style)}
                    {getCell('6', '2', classes.style)}
                </tr>
                <tr>
                    {getCell('7', '2', classes.style)}
                    {getCell('8', '2', classes.style)}
                    {getCell('9', '2', classes.style)}
                </tr>
            </tbody></table>
            <div><table><tbody>
                <tr>
                    {getCell('1', '3')}
                    {getCell('2', '3')}
                    {getCell('3', '3')}
                    {getCell('4', '3')}
                    {getCell('5', '3')}
                    {getCell('6', '3')}
                </tr>
            </tbody></table></div>

        </div>

    )
};
export default Game;