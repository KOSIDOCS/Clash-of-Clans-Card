import React from 'react'
import CardColum from './card-stats-colum'

function CardRow(props) {
    return (
        <div className={props.cssCardRow}>
        <CardColum 
            num={props.num}
            numSup={props.numSup}
            text={props.text}
        />

        <CardColum 
            num={props.num1}
            numSup={props.numSup1}
            text={props.text1}
        />

        <CardColum 
            id="no-border"
            className={props.cssnoborder}
            num={props.num2}
            numSup={props.numSup2}
            text={props.text2}
        />

        </div>
    )
}

export default CardRow;