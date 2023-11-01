import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import styles from "./styles";
import ActivityCard from "./ActivityCard";
import UpcomingActivities from "./UpcomingActivities";

const Activities = () => {
  const [toggle, setToggle] = useState("past");
  const handleToggle = (val: any) => {
    setToggle(val);
  };
  return (
    <Box pt={3}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        justifyContent="center"
      >
        <Button
          variant="contained"
          sx={toggle === "past" ? styles.activeBtn : styles.Btn}
          onClick={() => handleToggle("past")}
        >
          Past Activities
        </Button>
        <Button
          variant="contained"
          sx={toggle === "upcoming" ? styles.activeBtn : styles.Btn}
          onClick={() => handleToggle("upcoming")}
        >
          Upcoming Activities
        </Button>
      </Stack>
      {toggle === "past" ? <ActivityCard /> : <UpcomingActivities />}
    </Box>
  );
};

export default Activities;
