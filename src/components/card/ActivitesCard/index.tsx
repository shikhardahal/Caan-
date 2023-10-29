import React, { FC } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

import style from "./style.module.scss";


const ActivitiesCard = ({ data }) => {

  const { date, title, img_url , description } = data;
console.log(img_url);

  return (
    <div className={style.activities_card}>
      <div className={style.card_image}>
        <img src={`http://localhost:1337/${data.link}`} alt="image" />
        <br/><br/>
        {data.id}
        <br/><br/>
        {/* {data.attributes.btn.id} */}
        <br/><br/>
        {data.description}
        {data.card}
        {/* {data.} */}
        {data.date}
        {/* {data.link} */}
      </div>
      <div className={style.info}>
        <p className={style.info_date}>{date}</p>
        <h4 className={style.info_title}>{title}</h4>
      </div>
      <div className={style.info_read_more}>
        <a href={data.link}>
          <p>Read More</p>
          <BiRightArrowAlt className={style.icon} />
        </a>
      </div>
    </div>
  );
};

export default ActivitiesCard;