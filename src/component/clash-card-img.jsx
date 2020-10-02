import React from 'react'

function Image(props) {
    return (
        <div className={props.cssImgDiv}>
            <img src={props.img} alt={props.imgAlt} />
        </div>
    )
}

export default Image;