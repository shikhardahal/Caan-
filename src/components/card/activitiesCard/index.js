import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';

import style from './style.module.scss';

const ActivitiesCard = () => {
  return (
    <div className={style.activities_card}>
      <div className={style.card_image}>
        <img
          src="http://localhost:1337/uploads/89d_Cs_C_Rpi_X9_G_760c21e6fa.png"
          alt="image"
        />
      </div>
      <div className={style.info}>
        <p className={style.info_date}>12 July 2023</p>
        <h4 className={style.info_title}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </h4>
      </div>
      <div className={style.info_read_more}>
        <a href="#">
          <p>Read More</p>
          <BiRightArrowAlt className={style.icon} />
        </a>
      </div>
    </div>
  );
};

export default ActivitiesCard;
