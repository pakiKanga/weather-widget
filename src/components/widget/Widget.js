import React, { useEffect } from "react";
import * as styles from "./Widget.module.scss";
import {convertToCelsius, convertToFahrenheit} from '../../utils/temperatureUtils';
import {degToCompass} from '../../utils/degreeUtils';

const key = "4d3974806d72cf85cd3dbf0a8e9f40a1"; //I usually protect the key inside a .env file instead of exposing in code

const getWeather = async (lat, lng, key) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`,
    {
      method: "POST"
    }
  ).then(res => res.json());

};


const Widget = props => {
  const { globalState } = props;
  const getPosition = function() {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const processTemperature =  (temperature) => {
    if (globalState.metric === "C") {
      return convertToCelsius(temperature);
    } else {
      return convertToFahrenheit(temperature);
    }
  }
  

  useEffect(() => {
    async function requestLocation() {
      //I usually use .then but async await makes code more maintainable for the future
      const location = await getPosition();
      const { latitude, longitude } = location.coords;
      let weatherData = await getWeather(latitude, longitude, key);
      const { weather, wind, name, main } = weatherData;
      props.propagateState({weather, wind, name, main});
    }
    requestLocation();
  }, []);

  const name = globalState.name;
  const temperature = globalState.main && processTemperature(globalState.main.temp);
  const windSpeed = globalState.wind && globalState.wind.speed;
  const windDirection = globalState.wind && degToCompass(globalState.wind.deg);
  const image = globalState.weather && globalState.weather[0] && globalState.weather[0].icon;
  return (
    <div className={styles.weatherWidgetContainer}>
      <h1 className={styles.widgetTitle}>{globalState.title !== '' ? globalState.title : 'title of widget'}</h1>

      {globalState.weather && (
      <img
        alt="weather"
        className={styles.widgetImage}
        src={`http://openweathermap.org/img/wn/${image}@2x.png`}
      />)}

      <div className={styles.widgetInfo}>
        <h1 className={styles.cityName}>{name}</h1>
        <h2 className={styles.cityTemperature}>{temperature}°</h2>

        {globalState.showWind && (
          <h3 className={styles.cityWind}>
            <strong>Wind</strong> {windDirection} {windSpeed} km/h
          </h3>
        )}
      </div>
    </div>
  );
};

export default Widget;
