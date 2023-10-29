"use client";
import React, { useState, useEffect } from "react";
import style from "./_style.module.scss";
import ActivitiesCard from "@/components/Card/ActivitesCard";
import Pagination from "@/components/Pagination";
const ActivitiesPage= () => {
   // This is a client component 

  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:1337/api/activity-pages?populate=*");

      if (!response.ok) {
        console.log(`HTTP error! Status: ${response.status}`);
      }

      const apidata = await response.json();

      if (apidata) {
        console.log(apidata.data);
        const activityData = apidata.data;
        setActivities(activityData);
        setLoading(false);
      }
    } catch (error) {
      console.log(`An error occurred while fetching the data: ${error}`);
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchData();
  }, [activities]);

  return (
    <article className={style.article_page}>
      <section className={style.container}>
        <div className={style.grid_responsive}>
        <ActivitiesCard  data={activities} />
          {activities?.map((c) => {
            return <>{c.title}</>
          })}
        </div>
      </section>
      <Pagination />
      <div className={style.article_footer}>
        <section className={`${style.container} ${style.footer_container}`}>
          <h2 className={style.article_footer_title}>
            Get all the latest news, updates, and documents delivered directly to
            your inbox instantly
          </h2>
          <button className="btn btn-primary">Click Me</button>
        </section>
      </div>
    </article>
  );
};

export default ActivitiesPage;