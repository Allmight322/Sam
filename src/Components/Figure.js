import React from 'react';
import classes from './Figure.module.css'

const Figure = ({Number, TeamNumber, Image, Size, Selected, SetSelected, id}) => {
    let isSelected = (Selected === id)

    const message = () => {
        SetSelected(id)
    }

    return (
        <div onClick={message}
             className={classes['svg' + "isSelected" + isSelected] + ' ' + classes['size' + Size] + ' ' + classes['team' + TeamNumber]}>

            {isSelected ? Image : Image}
        </div>
    );
};

export default Figure;