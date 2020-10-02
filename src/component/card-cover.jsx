import React from 'react'
import Image from './clash-card-img'
import Level from './level'
import Name from './name'
import Descrpt from './descript'
import CardRow from './card-stats-row'

function CardCover(props) {
    return (
        <div className="wrapper">
            <div className={props.cardType}>
            <Image 
                cssImgDiv={props.cssImgDiv}
                img={props.img}
                imgAlt={props.imgAlt}
            />
            <Level 
                csslevel={props.csslevel}
                level={props.level}
            />
            <Name 
                cssName={props.cssName}
                name={props.name}
            />
            <Descrpt 
                cssDes={props.cssDes}
                Descrpt={props.Descrpt}
            />
            <CardRow 
                cssCardRow={props.cssCardRow}
                num={props.num}
                numSup={props.numSup}
                text={props.text}
                num1={props.num1}
                numSup1={props.numSup1}
                text1={props.text1}
                cssnoborder={props.cssnoborder}
                num2={props.num2}
                numSup2={props.numSup2}
                text2={props.text2}
            />
            </div>
        </div>
    )
}

export default CardCover;