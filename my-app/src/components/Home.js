import React from 'react'
import HomeCSS from'./Home.module.css'
import pic from '../images/news.jpg'



export default function Home() {

  return (

    <div className = {HomeCSS.container} >

      <div className = {HomeCSS.newsCard} > 
        
          <img className = {HomeCSS.img1} src={pic} alt=""/>
          <div className = {HomeCSS.textProperties}>
            <h1>
              Headline 1
            </h1>
            <p1>
              Something has happend somewhere
            </p1>
          </div>
        </div>

        <div className = {HomeCSS.newsCard} > 
        
        <img className = {HomeCSS.img1} src={pic} alt=""/>
        <div className = {HomeCSS.textProperties}>
          <h1>
            Headline
          </h1>
          <p1>
            Something has happend somewhere
          </p1>
        </div>
      </div>

      <div className = {HomeCSS.newsCard} > 
        
          <img className = {HomeCSS.img1} src={pic} alt=""/>
          <div className = {HomeCSS.textProperties}>
            <h1>
              Headline
            </h1>
            <p1>
              Something has happend somewhere
            </p1>
          </div>
        </div>
        <div className = {HomeCSS.newsCard} > 
        
          <img className = {HomeCSS.img1} src={pic} alt=""/>
          <div className = {HomeCSS.textProperties}>
            <h1>
              Headline
            </h1>
            <p1>
              Something has happend somewhere
            </p1>
          </div>
        </div>
      
      </div>





    
  )

}
