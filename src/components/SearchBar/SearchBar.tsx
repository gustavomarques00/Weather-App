import styles from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";

interface Data {
  onSendCity: (e: string, x: boolean) => void;
}

export function SearchBar({ onSendCity }: Data) {
  const [city, setCity] = useState("");
  const [sendData, setSendData] = useState(false)

  function handleSearchedCity(city: string,clicked: boolean) {
    onSendCity(city,clicked)
  }

  return (
    <div>
      <div className={styles.mainWrapper}>
        <h1>Digite a cidade:</h1>
        <div>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit" onClick={() => handleSearchedCity(city,sendData)}>
            <BsSearch size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
