import React, { useEffect } from 'react'
// import logo from './logo.svg';
// import * as Logo from './logo.svg' use like <Logo/>.
import './App.scss'
import CardCover from './component/card-cover'
import clans from './clans'
import $ from 'jquery'
import 'slick-carousel'
import  './slick.js'
import './slick.css'
import './slick-theme.css'


function App() {
  

  useEffect(() => {
    (function() {
  
      let slideContainer = $('.slide-container');
      
      slideContainer.slick();
      
      $('.clash-card__image img').hide();
      $('.slick-active').find('.clash-card img').fadeIn(200);
      
      // On before slide change
      slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.slick-active').find('.clash-card img').fadeOut(1000);
      });
      
      // On after slide change
      slideContainer.on('afterChange', function(event, slick, currentSlide) {
        $('.slick-active').find('.clash-card img').fadeIn(200);
      });
      
    })();
  })

  return (
    
    <div className="slide-container">

    {clans.map(clans => {
      return (
        <CardCover 
        key={clans.id}
        cardType={clans.cardType}
        cssImgDiv={clans.cssImgDiv}
        img={clans.img}
        imgAlt={clans.imgAlt}
        csslevel={clans.csslevel}
        level={clans.level}
        cssName={clans.cssName}
        name={clans.name}
        cssDes={clans.cssDes}
        Descrpt={clans.Descrpt}
        cssCardRow={clans.cssCardRow}
        num={clans.num}
        numSup={clans.numSup}
        text={clans.text}
        num1={clans.num1}
        numSup1={clans.numSup1}
        text1={clans.text1}
        cssnoborder={clans.cssnoborder}
        num2={clans.num2}
        numSup2={clans.numSup2}
        text2={clans.text2}
      />
      )
    })}
    
    </div>
  );
}

export default App;
