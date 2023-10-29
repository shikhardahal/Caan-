import React from 'react'
import styles from "./subscribe.module.css";

const Subscribe = () => {
  return (
    <div className={styles.box}>
      <div className={styles.text}>Get all the latest news, updates and documents delivered directly to your inbox instantly</div>
      <div>
        <button className={styles.btn}>Subscribe to ANSSD</button>
      </div>
    </div>
  )
}

export default Subscribe;
