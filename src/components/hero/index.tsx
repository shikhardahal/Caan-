import React from "react";
import { Box, Typography, Button, Container, Grid, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.primary.dark
            : theme.palette.primary.light,
        color: (theme) => (theme.palette.mode === "dark" ? "black" : "white"),
        pt: 13.5,
        pb: 16
        //minHeight: "calc(100vh - 160px)"
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Swiper
          modules={[Pagination]}
          loop
          pagination={{
            clickable: true
          }}
        >
          <SwiperSlide>
            <Box sx={{ py: 3, mx: { xs: 2, md: 0 } }}>
              <Grid
                container
                spacing={4}
                alignItems="center"
                sx={{ minHeight: "calc(100vh - 450px)" }}
              >
                <Grid item xs={12} md={5} order={{ xs: 1, md: 0 }}>
                  <Typography
                    variant="h1"
                    color="secondary"
                    sx={{ mb: "0.75rem!important" }}
                  >
                    Welcome to ANSSD Web Portal
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae turpis in massa tincidunt viverra nec et lacus.
                    Nulla quis dictum diam, sit amet rhoncus lacus.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: "1.25rem" }}
                  >
                    Read More
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={7}
                  sx={{ pl: { md: 8 }, mx: { xs: 5, md: 0 } }}
                >
                  <img
                    src="images/plane.png"
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ py: 3 }}>
              <Grid
                container
                spacing={4}
                alignItems="center"
                sx={{ minHeight: "calc(100vh - 450px)" }}
              >
                <Grid item xs={12} md={5} order={{ xs: 1, md: 0 }}>
                  <Typography
                    variant="h1"
                    color="secondary"
                    sx={{ mb: "0.75rem!important" }}
                  >
                    Welcome to ANSSD Web Portal
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae turpis in massa tincidunt viverra nec et lacus.
                    Nulla quis dictum diam, sit amet rhoncus lacus.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: "1.25rem" }}
                  >
                    Read More
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={7}
                  sx={{ pl: { md: 8 }, mx: { xs: 5, md: 0 } }}
                >
                  <img
                    src="images/people.png"
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box sx={{ py: 3 }}>
              <Grid
                container
                spacing={4}
                alignItems="center"
                sx={{ minHeight: "calc(100vh - 450px)" }}
              >
                <Grid item xs={12} md={5} order={{ xs: 1, md: 0 }}>
                  <Typography
                    variant="h1"
                    color="secondary"
                    sx={{ mb: "0.75rem!important" }}
                  >
                    Welcome to ANSSD Web Portal
                  </Typography>
                  <Typography variant="body2" color="secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam vitae turpis in massa tincidunt viverra nec et lacus.
                    Nulla quis dictum diam, sit amet rhoncus lacus.
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: "1.25rem" }}
                  >
                    Read More
                  </Button>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={7}
                  sx={{ pl: { md: 8 }, mx: { xs: 5, md: 0 } }}
                >
                  <img
                    src="images/plane.png"
                    alt=""
                    width="100%"
                    height="100%"
                    style={{ objectFit: "contain" }}
                  />
                </Grid>
              </Grid>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
};

export default Hero;
