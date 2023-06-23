import React, { useEffect, useState } from "react";
import moment from 'moment';

function Weather() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(null);
  const [city, setCity] = useState("");
  const API_KEY = "664ae23b8fffed31f165c4b15563ee67";

  const getTempData = (api, query) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${api}`;
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res.main);
        setCity(query);
      })
      .catch((err) => {
        console.log("error in get data", err);
        setData(null);
      });
  };
  useEffect(() => {
    getTempData(API_KEY, inputValue);
  }, [inputValue]);

  return (
    <div>
      <input className="weather-input-city"
        type="text"
        placeholder="Enter City Name"
        value={inputValue}
        onInput={(e) => setInputValue(e.target.value)}
      />
      
      {!inputValue.length ? null : data ? (
        <div>
          <p className="weather-p-city">Current Weather in {city} is: </p>
          
          <div className="weather-information-container">
          <p>Day: {moment().format('dddd')}</p>
          <p>Date: {moment().format('LL')}</p>
          <p >Current Temperature : {data.temp} °C</p>
          <p >Humidity  : {data.humidity} %</p>
          <p >Temperature Range : {data.temp_min} °C  to  {data.temp_max} °C</p>

          </div>
        </div>
      ) : (
        <p className="weather-valid-city-name">Valid city name please</p>
      )}
    </div>
  );
}

export default Weather;