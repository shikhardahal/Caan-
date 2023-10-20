// src/app/activities/page.tsx
'use client'
import React, { useState, useEffect } from "react";
import style from "./_style.module.scss";
import ActivitiesCard from "@/components/Card/ActivitiesCard/styles.module.scss"; // Corrected import path
import Pagination from "@/components/Pagination";

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'http://localhost:1337/api/activity-pages?populate=*' +
        new URLSearchParams({ 'populate[0]': 'card.img_url' })
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const activityData = data.data;

      setActivities(activityData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <article className={style.article_page}>
      {/* ... Existing JSX code ... */}
      <section className={style.container}>
        <div className={style.grid_responsive}>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            activities?.map((activity) => (
              <ActivitiesCard key={activity.id} data={activity.attributes} />
            ))
          )}
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

