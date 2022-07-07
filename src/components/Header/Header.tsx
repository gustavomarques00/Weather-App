import styles from './Header.module.css'
import {TiWeatherPartlySunny} from 'react-icons/ti'

export function Header() {
    return(
        <header className={styles.mainWrapper}>
            <TiWeatherPartlySunny  size={64}/>
            <h1>Weather App</h1>
            <TiWeatherPartlySunny  size={64}/>
        </header>
        
    )
}