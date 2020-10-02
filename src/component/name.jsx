import React from 'react'

function Name(props) {
    return (
        <div className={props.cssName}>{props.name}</div>
    )
}

export default Name;