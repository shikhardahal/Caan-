import styles from "./document.module.css";

const Document = () => {
  return (
    <div className={styles.box}>
      <div className={styles.heading}>Civil Aviation Act, 2015</div>
      <div className={styles.links}>
        <a className={styles.link}>VIEW</a>
        |
        <a className={styles.link}>DOWNLOAD</a>
      </div>
    </div>
  )
}

export default Document;
