import React, { useState } from 'react';
import styles from "./Details.module.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import Card from './Card';  // Make sure to import the Card component

function Details({ data, changetheme }) {
  const [showCard, setShowCard] = useState(false);

  const handleOnClick = () => {
    window.location.href = "Card.jsx"
  };

  const cardStyle = {
    backgroundColor: changetheme ? '#212e37' : 'white',
    color: changetheme ? 'white' : 'black',
  };

  

  return (
    <div className={styles.container} style={cardStyle}>
      <div className={styles.upper}>
        <button className={styles.btn} onClick={handleOnClick} style={cardStyle}>
          <IoIosArrowRoundBack className={styles.icon} />Back
        </button>
      </div>
      <div className={styles.lower}>
        <div className={styles.left}>
          <div className={styles.image}>
            <img src={data.flags.svg} alt="Flag" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.leftsection}>
            <h2 style={cardStyle}>{data.name}</h2>
            <p><span>Native Name: </span>{data.nativeName}</p>
            <p><span>Population: </span>{data.population}</p>
            <p><span>Region: </span>{data.region}</p>
            <p><span>Sub Region: </span>{data.subregion}</p>
            <p><span>Capital: </span>{data.capital}</p>
          </div>
          <div className={styles.rightsection}>
            <p><span>Top Level Domain: </span>{data.topLevelDomain}</p>
            <p><span>Currencies: </span>{data.currencies.map(currency => currency.name).join(", ")}</p>
            <p><span>Languages: </span>{data.languages.map(language => language.name).join(", ")}</p>
          </div>
        </div>
      </div>
      <div className={styles.lowersection}>
        <span>Border Countries:</span>
        <div className={styles.borderCountries}>
          {data.borders && data.borders.length > 0 ? (
            data.borders.map((country, index) => (
              <button key={index} className={styles.borderButton} style={cardStyle}>{country}</button>
            ))
          ) : (
            <p>no borders...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Details;
