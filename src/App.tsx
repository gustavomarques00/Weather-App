import { useState } from "react";
import styles from "./App.module.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [citySelected, setCitySelected] = useState("")
  const [clicked, setClicked] = useState(false)

  function onSendCity(data: string){
    setCitySelected(data)
    setClicked(true)
  }

  return (
    <div>
      <Header />
      <SearchBar onSendCity={onSendCity}   />
      <div className={styles.cardWrapper}>
        <Card citySelected={citySelected} clicked={clicked} />
      </div>
    </div>
  );
}

export default App;
