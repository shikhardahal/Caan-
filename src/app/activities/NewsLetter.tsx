import React from "react";
import { Box, Button, Typography, Stack, Container } from "@mui/material";

const NewsLetter = () => {
  return (
    <Box
      mt={10}
      sx={{
        height: "170px",
        backgroundColor: "#eeeeee",
      }}
      display="flex"
      alignItems="center"
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems="center"
          spacing={2}
        >
          <Typography
            variant="h4"
            fontWeight="600"
            sx={{
              fontSize: {
                xs: "12px",
                sm: "16px",
                md: "2.125rem",
              },
            }}
            textAlign={{ xs: "center", sm: "start" }}
          >
            Get all the latest news,updates and documents delivered directly to
            your inbox instantly
          </Typography>
          <Button
            variant="contained"
            sx={{
              textTransform: "capitalize",
              minWidth: "200px",
              borderRadius: "20px",
              backgroundColor: "#2161cd",
            }}
          >
            Subscribe to ANSSD
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default NewsLetter;
