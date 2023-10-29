import styles from "./navbar.module.css";
import { Logo } from "./Logo";
import Image from "next/image";

const Navbar = ({ hasColor = false }) => {
  return (
    <div className={`container ${styles['navbar__Container']} ${hasColor && styles['navbar__Container__Coloured']}`}>
      <div className="navbar__Logo">
        <Logo />
      </div>
      <div className={styles['navbar__Contents']}>
        <div>
          <ul className={styles['navbar__Links']}>
            <li><a href="/">Home</a></li>
            <li><a href="/about-us">About Us</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="#">Operation & Safety</a></li>
            <li><a href="/documents">Documents</a></li>
            <li><a href="/forms">Forms</a></li>
            <li><a href="/contact-us">Contact</a></li>
          </ul>
        </div>
        <div>
          <Image src='/Magnifier.png' alt="magnifier" height={20} width={20} />
        </div>
      </div>
    </div>
    // <div className={`${styles['nav-container']}`}>
    //   <div className="wrapper">
    //     <nav className={styles.navbar}>
    //       <a href="#" className={styles['nav-logo']}><Logo /></a>
    //       <ul className={styles['nav-list']}>
    //         <li><a href="/">Home</a></li>
    //         <li><a href="/about-us">About Us</a></li>
    //         <li><a href="/activities">Activities</a></li>
    //         <li><a href="#">Operation & Safety</a></li>
    //         <li><a href="/documents">Documents</a></li>
    //         <li><a href="/forms">Forms</a></li>
    //         <li><a href="/contact-us">Contact</a></li>
    //       </ul>
    //     </nav>
    //   </div>
    // </div>
  );
}

export default Navbar;