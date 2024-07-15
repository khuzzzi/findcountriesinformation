import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Inputbox from "./components/Inputbox";
import data from "/data.json";
import Details from "./components/Details";

function App() {
  const [changetheme, setChangeTheme] = useState(false);
  const [detailsClicked, setDetailsClicked] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [search , setSearch] = useState("")
  const [nameArray, setNameArray] = useState([]);
  const [filteredup , setFilteredUp ] = useState("Filter By Region")

  useEffect(() => {
    const names = data.map(item => item.name);
    setNameArray(names);
  }, [data]);
  console.log(nameArray)
  const handleCardClick = (country) => {
    setSelectedCountry(country);
    setDetailsClicked(true);
  };
// country name ara hoga selectedcountry variable mein
  return (
    <>
      <Header setChangeTheme={setChangeTheme} changetheme={changetheme}/>
      {detailsClicked ? (
        <Details data={selectedCountry} changetheme={changetheme}/>
      ) : (
        <>
          <Inputbox data={data} setSearch={setSearch} filteredup={filteredup} setFilteredUp={setFilteredUp} changetheme={changetheme}/>
          <Card data={data} onCardClick={handleCardClick} search={search} nameArray={nameArray} filteredup={filteredup} changetheme={changetheme}/>
        </>
      )}
    </>
  );
}

export default App;
