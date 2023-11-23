import { useState, useEffect } from "react";

import "./App.css";
function App() {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <ul>
        {countries.map((name) => {
          return (
            <li>
              <h2>Capital: {name.capital}</h2>
              <div className="img">
              <img src={name.flags.svg} alt="" />
              </div>
              <h3>Population: {name.population}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default App;
