import React from 'react'
import styles from "./search.module.css";
import { LuSearch } from 'react-icons/lu';

const Search = () => {
  return (
    <div className={styles['search-box']}>
      <h3 className={styles.title}>Search Our Website</h3>
      <div className={styles.bar}>
        <LuSearch style={{ marginLeft: "1rem", position: "absolute" }} color="grey" />
        <input className={styles.searchBar} type='search' placeholder='       What are you looking for....' />
        <button className={styles.btn}>
          Search Now
        </button>
      </div>
    </div>
  )
}

export default Search;
