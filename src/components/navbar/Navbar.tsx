import styles from "./navbar.module.css";
import { Logo } from "./Logo";

const Navbar = () => {
  return (
    <div className={`${styles['nav-container']}`}>
      <div className="wrapper">
        <nav className={styles.navbar}>
          <a href="#" className={styles['nav-logo']}><Logo /></a>
          <ul className={styles['nav-list']}>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="#">Operation & Safety</a></li>
            <li><a href="/documents">Documents</a></li>
            <li><a href="/forms">Forms</a></li>
            <li><a href="/contact-us">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;