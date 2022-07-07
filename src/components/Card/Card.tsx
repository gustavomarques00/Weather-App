import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Card.module.css";

interface Data {
  citySelected: string;
  clicked: boolean;
}

export function Card({ citySelected, clicked }: Data) {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${citySelected}&appid=7d1b127823c02b6dd1aa016d2573bb52&units=metric&lang=pt_br`
      )
      .then((response) => {
        setApiData(response.data);
        console.log(apiData);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [clicked]);

  return (
    <div>
      {apiData.length !== 0 ? (
        <div className={styles.mainWrapper}>
          <>
            <h1>{apiData.name}</h1>
            <div className={styles.infoWrapper}>
              <span> {apiData.main.temp.toFixed()}ºC</span>
            </div>
            <div className={styles.infoWrapper}>
              <span>Máx: {apiData.main.temp_max.toFixed()}ºC</span>
              <span>Min: {apiData.main.temp_min.toFixed()}ºC</span>
            </div>
            <div className={styles.descWrapper}>
              <p>Situação: {apiData.weather[0].description}</p>
            </div>
          </>
        </div>
      ) : null}
    </div>
  );
}
