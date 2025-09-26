import React from 'react'
import { MdTimer } from "react-icons/md";
import { PiForkKnifeFill } from "react-icons/pi";
import "./Homepage.css"
import HeaderPage from '../../Header/HeaderPage'

const HomePage = () => {
  
  return (
    <div className='home-bg-container'>
      <HeaderPage/>
      <div className='main-homepage-image-container'>
        <div className='main-recipe-container'>
            <h1 className='main-recipe-heading'>
                Spice delicious <br/> chicken wings
            </h1>
            <p className='main-recipe-para'>The chicken wings are really <br/> delicious and spicy</p>
            <div className='recipe-icon-container'>
                <p className='recipe-icon'><MdTimer color='#000000' size ={10}/> <span color='grey'>
                    30 Minutes</span></p>
                <p className='recipe-icon'><PiForkKnifeFill color='#000000' size ={10}/><span color='grey'>Chicken</span></p>
            </div>
            
        </div>
        <img src = "https://res.cloudinary.com/dze7v0evj/image/upload/v1758873070/Screenshot_2025-09-26_132035_utf4uh.png" className='main-homepage-image'/>
      </div>

      <div className='category-button-container'>
        <h1 className='category-heading'>Category</h1>
        <button type='button' className='view-all-category-button'>View All Categories</button>
      </div>

     
    </div>
  )
}

export default HomePage
