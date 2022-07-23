import React from 'react';
import classes from './Figure.module.css'

const Figure = ({Number, TeamNumber, Image, Size, Selected, SetSelected, id}) => {
    let isSelected = (Selected === id)

    const onClickHandler = () => {
        SetSelected(id)
    }

    return (
        <div onClick={onClickHandler}
             className={classes['svgisSelected' + isSelected] + ' ' + classes['size' + Size] + ' ' + classes['team' + TeamNumber]}>
            {isSelected ? Image : Image}
        </div>
    );
};

export default Figure;