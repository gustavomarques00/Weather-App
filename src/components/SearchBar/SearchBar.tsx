import styles from "./SearchBar.module.css";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

interface Data {
    onSendCity: (e:string) => void;
}

export function SearchBar({onSendCity}: Data) {
    const [city, setCity] = useState("")

    function handleSearchedCity(data: string){
        onSendCity(data)
    }

    function consumeApi(){
        
    }
  return (
    <div>
      <div className={styles.mainWrapper}>
        <h1>Digite a cidade:</h1>
        <div>
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)}/>
          <button type="submit" onClick={() => handleSearchedCity(city)}>
            <BsSearch size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
