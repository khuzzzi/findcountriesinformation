import React, { useState } from 'react'
import styles from "./Header.module.css"
import { IoMoonOutline } from "react-icons/io5";

function Header({setChangeTheme , changetheme}) {
  const [clickCount , setClickCount] = useState(0)
  const handleOnClick = (e)=>{
    setClickCount(clickCount + 1)
    if(clickCount % 2 === 0 ){
      setChangeTheme(false)
    }else{
      setChangeTheme(true)
    }
  }
  const cardStyle = {
    backgroundColor: changetheme ? '#212e37' : 'white',
  };

  const textStyle = {
    color: changetheme ? 'white' : 'black',
  };
  return (
    <nav style={cardStyle}>
        <div className={styles.left} style={textStyle}>
            <h2>Where in the world ?</h2>
        </div>
        <div className={styles.right}>
        <IoMoonOutline className={styles.icon} onClick={handleOnClick} style={textStyle}/>
        <p style={textStyle} onClick={handleOnClick}>Dark Mode</p>
        </div>
    </nav>
  )
}

export default Header