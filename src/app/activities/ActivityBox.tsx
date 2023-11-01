import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import styles from "./styles";

const ActivityBox = () => {
  return (
    <Box my={5} sx={styles.activityBox}>
      <Typography variant="h3" fontWeight={"700"} color="white">
        Activities
      </Typography>
      <Stack direction="row" pt={1} alignItems="center">
        <Box px={1}>
          <HomeOutlinedIcon sx={{ color: "white" }} fontSize="small" />
        </Box>
        <Typography variant="body1" color="white" fontWeight="500">
          Home
        </Typography>
        <Typography variant="body1" color="white" px={0.5} fontWeight="500">
          /
        </Typography>
        <Typography variant="body1" color="#bdbdbd" fontWeight="500">
          Activities
        </Typography>
      </Stack>
    </Box>
  );
};

export default ActivityBox;
