import React, { useEffect, useState } from 'react';
import styles from "./Inputbox.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

function Inputbox({data,setSearch,changetheme}) {
  const [upicon, setUpicon] = useState(false);
  const [filteredup , setFilteredUp ] = useState("Filter By Region")

  const handleOnChange = (e)=>{
    setSearch(e.target.value)
  }
  if(filteredup === "All"){
    setFilteredUp("Filter By Region")
  }
  
  const cardStyle = {
    backgroundColor: changetheme ? '#212e37' : 'white',
    color: changetheme ? 'white' : 'black'
  };

  
  
 
  return (
    <div className={styles.container} style={cardStyle}>
      <div className={styles.left} style={cardStyle}>
        <AiOutlineSearch className={styles.icon} style={cardStyle}/>
        <input type="text" className={styles.inputarea} placeholder='Search for a country...' onChange={handleOnChange} style={cardStyle}/>
      </div>
      <div className={styles.right} style={cardStyle}>
        <div className={styles.dropdownmenu} style={cardStyle}>
          <p style={cardStyle}>{filteredup}</p>
          {upicon ? (
            <RiArrowDropUpLine className={styles.icondropdown} onClick={() => setUpicon(false)} />
          ) : (
            <RiArrowDropDownLine className={styles.icondropdown} onClick={() => setUpicon(true)} />
          )}
          {upicon && (
            <div className={styles.dropdownitemscontainer}>
              <ul>
                <li onClick={()=>{setFilteredUp("All")}}>All</li>
                <li onClick={()=>setFilteredUp("Africa")}>Africa</li>
                <li onClick={()=>{setFilteredUp("Americas")}}>Americas</li>
                <li onClick={()=>{setFilteredUp("Asia")}}>Asia</li>
                <li onClick={()=>{setFilteredUp("Europe")}}>Europe</li>
                <li onClick={()=>{setFilteredUp("Oceania")}}>Ocenia</li>
                
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Inputbox;
