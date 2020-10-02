import React from 'react'

function CardColum(props) {
    return (
        <div className="one-third" id={props.id}>
          <div className="stat">{props.num}<sup>{props.numSup}</sup></div>
          <div className="stat-value">{props.text}</div>
        </div>
    )
}

export default CardColum;