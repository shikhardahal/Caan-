import React from 'react';
import styles from "./activity.module.css";
import Image from 'next/image';

interface ActivityCardProps {
  data: {
    title: string;
    description: string;
    image: string;
  }
}

const Card = () => {
  // console.log(props);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h3>ANSSD Yearly Conference</h3>
        <Image src="/activity_page.png" alt="" height="441" width="842" />
        <h5 className={styles.date}>17 January 2023</h5>
        <div className={styles.description}>SSL (SANKALPA SHIPPING AND LOGISTICS PVT. LTD.) Specializes in
          providing top- tier airfreight solutions to meet the diverse needs of our
          clients. With our extensive network of global partners and a dedicated team
          of logistics experts, we ensure that your cargo reaches its destination
          swiftly and securely. Whether you require expedited shipping for high-value
          goods, just-in-time inventory management, or customized supply chain
          solutions, SSL has the expertise to deliver on your logistics goals. \nSSL (SANKALPA SHIPPING AND LOGISTICS PVT. LTD.) Specializes in
          providing top- tier airfreight solutions to meet the diverse needs of our
          clients. With our extensive network of global partners and a dedicated team
          of logistics experts, we ensure that your cargo reaches its destination
          swiftly and securely. Whether you require expedited shipping for high-value
          goods, just-in-time inventory management, or customized supply chain
          solutions, SSL has the expertise to deliver on your logistics goals.\n Whether you require expedited shipping for high-value
          goods, just-in-time inventory management, or customized supply chain
          solutions, SSL has the expertise to deliver on your logistics goals.
        </div>
      </div>
      <div className={styles.card}>
        <h3>Other Latest Activities</h3>

        <div className={styles.activity}>
          <Image src="/recent_activity.png" alt='' height="50" width="50" />
          <div className={styles.text}>Lorem ipsum dolar consecut en paradel marco</div>
        </div>
        <div className={styles.activity}>
          <Image src="/recent_activity.png" alt='' height="50" width="50" />
          <div className={styles.text}>Lorem ipsum dolar consecut en paradel marco</div>
        </div>
        <div className={styles.activity}>
          <Image src="/recent_activity.png" alt='' height="50" width="50" />
          <div className={styles.text}>Lorem ipsum dolar consecut en paradel marco</div>
        </div>
      </div>
    </div>
  )
}

export default Card;