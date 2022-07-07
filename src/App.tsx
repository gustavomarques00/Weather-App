import { useState } from "react";
import styles from "./App.module.css";
import { Card } from "./components/Card/Card";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";

function App() {
  const [city, setCity] = useState("")

  function onSendCity(data: string){
    setCity(data)
  }

  return (
    <div>
      <Header />
      <SearchBar onSendCity={onSendCity} />
      <div className={styles.cardWrapper}>
        <Card city={city} />
      </div>
    </div>
  );
}

export default App;
