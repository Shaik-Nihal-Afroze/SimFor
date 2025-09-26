

import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import "./Headerpage.css"
const HeaderPage = () => {
  return (
    <div>
      <div className='nav-container'>
        <div className='nav-logo-container'>
            <h1 className='navbar-heading'>Foodieland</h1>
        </div>
       
        <div className='nav-middle-container'>
            <button className='navbar-button'>
                Home
            </button>
            <button  className='navbar-button'>
                Recipe
            </button>
            <button  className='navbar-button'>
                Blog
            </button>
            <button  className='navbar-button'>
                Contact
            </button>
            <button  className='navbar-button'>
                About us
            </button>
            
            
        </div>
         <div className='nav-last-container'>
            <button className='nav-socialmedia-button'>
                <FaFacebookSquare size = {10}/>
            </button>
            <button className='nav-socialmedia-button'>
                <FaTwitter size = {10}/>
            </button>
            <button className='nav-socialmedia-button'>
               <FaInstagram size = {10}/>
            </button>
            
            
            
        </div>
      </div>
    </div>
  )
}

export default HeaderPage
