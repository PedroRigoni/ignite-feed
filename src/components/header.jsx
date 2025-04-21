import styles from './Header.module.css';
import IgniteLogo from '../assets/Ignite simbol.png';


export function Header() {

    return (
        <header className={styles.header}>
        <strong>Ignite Feed</strong>
        <img src={IgniteLogo} alt="logotipo" />
        </header>
    );
}