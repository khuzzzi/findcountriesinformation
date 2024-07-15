import React from 'react';
import styles from "./Card.module.css";

function Card({ data, onCardClick, search, filteredup, changetheme }) {
  // Filter the data based on the selected region and the search term
  const filteredData = data
    .filter(item => {
      if (filteredup === "Filter By Region") return true;
      return item.region === filteredup;
    })
    .filter(item => {
      if (search.toLowerCase() === "") return true;
      return item.name.toLowerCase().includes(search.toLowerCase());
    });

  const cardStyle = {
    backgroundColor: changetheme ? '#212e37' : 'white',
  };

  const textStyle = {
    color: changetheme ? 'white' : 'black',
  };

  return (
    <div className={styles.cardcontainer} style={cardStyle}>
      {filteredData.map((country, index) => (
        <div className={styles.card} key={index} onClick={() => onCardClick(country)} style={cardStyle}>
          <div className={styles.image}>
            <img src={country.flags.svg} alt="" className={styles.img} />
          </div>
          <div className={styles.lowersection} style={textStyle}>
            <h3 className={styles.countryname}>{country.name}</h3>
            <div className={styles.details}>
              <p><span>Population:</span> {country.population}</p>
              <p><span>Region:</span> {country.region}</p>
              <p><span>Capital:</span> {country.capital}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
