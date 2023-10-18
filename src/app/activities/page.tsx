import React from "react";

import style from "./_style.module.scss";
import ActivitiesCard from "@/components/Card/ActivitesCard";
import Pagination from "@/components/Pagination";

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const ActivitiesPage = () => {
  return (
    <article className={style.article_page}>
      <section className={style.article_header}>
        <h2 className={style.article_title}>Activities</h2>
        <p>Home / Activities</p>
      </section>
      <div className={style.article_menu}>
        <button className="btn btn-primary">Past Activities</button>
        <button className="btn btn-secondary">Upcoming Activities</button>
      </div>
      <section className={style.container}>
        <div className={style.grid_responsive}>
          {number?.map((item, index) => (
            <ActivitiesCard key={index} />
          ))}
        </div>
      </section>
      <Pagination />
      <div className={style.article_footer}>
        <section className={`${style.container} ${style.footer_container}`}>
          <h2 className={style.article_footer_title}>
            Get all the latest news, updates and documents delivered directly to
            your inbox instantly
          </h2>
          <button className="btn btn-primary">Subscribe to ANSSD</button>
        </section>
      </div>
    </article>
  );
};

export default ActivitiesPage;
