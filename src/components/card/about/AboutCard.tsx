import React from 'react'
import styles from "./about.module.css";
import Image from 'next/image';
import { BiRightArrowAlt } from "react-icons/bi";

const AboutCard = () => {
  return (
    <div className={styles.card}>
      <div><Image src="/aviation_security.png" alt='' width='417' height='339' /></div>
      <div>
        <h4 className={styles.heading}>ABOUT US</h4>
        <h2 className={styles.title}>Aviation Security Department</h2>
        <p className={styles.description}>The safety, regularity and efficiency of civil aviation and its facilities is measure to ensure the protection and safeguarding of passengers, flight crew, ground staff, the general public and civil aviation facilities against acts of unlawful interference perpetrated on the ground and in-flight.</p>
        <p className={styles.description}> The International Civil Aviation Organisation (ICAO), an agency of the United Nations, seeks to promote appropriate levels of aviation security throughout the global community.</p>
        <button className={styles.readMore}>Read More <BiRightArrowAlt style={{ top: '3px', left: '5px', position: 'relative' }} /> </button>
      </div>
    </div>
  )
}

export default AboutCard;
