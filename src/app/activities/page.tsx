'use client'
import React, { useEffect, useState } from "react";
import ActivityBox from "./ActivityBox";
import Activities from "./Activities";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";

async function getData() {
  const res = await fetch("http://localhost:1337/api/activities");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await res.json();

  // Assuming that your API provides image URLs in the `img_url` field
  // Adjust the code based on your API response structure
  const activitiesWithImages = result.map((activity) => ({
    ...activity,
    img_url: `http://localhost:1337${item.attributes.img_url?.data?.attributes.url}`, // Modify the field accordingly
  }));

  return activitiesWithImages;
}

const Home = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      console.log(result);
      setData(result);
    }

    fetchData();
  }, []);

  const filterActivities = () => {
    if (filter === "past") {
      return data.filter((item) => new Date(item.attributes.date) < new Date());
    } else if (filter === "upcoming") {
      return data.filter((item) => new Date(item.attributes.date) >= new Date());
    } else {
      return data; // Show all activities
    }
  };

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <Box>
      <ActivityBox />
      <Container maxWidth="lg">
        <Activities
          data={filterActivities()} // Pass the filtered data to the Activities component
          filter={filter}
          handleFilterClick={handleFilterClick}
        />
      </Container>
      <NewsLetter />
      <Footer />
    </Box>
  );
};

export default Home;
