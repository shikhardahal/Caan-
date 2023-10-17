import React, { useState, useEffect } from "react";
import style from "./_style.module.scss";
import ActivitiesCard from '../../components/card/ActivitiesCard/index.tsx';
import { useClient } from 'next/react-server';

useClient();

const ActivitiesPage = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/footer-contents?populate=AboutAnsdd");
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <section className={style.grid_responsive}>
      {activities?.map((activity, index) => (
        <ActivitiesCard key={index} activity={activity} />
      ))}
    </section>
  );
};

export default ActivitiesPage;
