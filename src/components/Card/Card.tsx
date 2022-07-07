import styles from "./Card.module.css";

interface Data {
    city: string;
}

export function Card({city}: Data) {
  return (
    <div className={styles.mainWrapper}>
        <h1>{city}</h1>
      <div className={styles.infoWrapper}>
        <span>Seg</span>
        <span>20/11</span>
      </div>
      <div className={styles.infoWrapper}>
        <span>Máx: 22ºC</span>
        <span>Min: 14ºC</span>
      </div>
      <div className={styles.descWrapper}>
        <p>Descrição: Chuvas esparsas</p>
        <p>Condição: Rain</p>
      </div>
    </div>
  );
}
