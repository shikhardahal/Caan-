import React from "react";
import {
  Box,
  Container,
  Grid,
  Divider,
  Typography,
  Stack,
} from "@mui/material";
import FacebookIcon from "../../assets/Icons/FacebookIcon";
import TwitterIcon from "../../assets/Icons/TwitterIcon";
import YoutubeIcon from "../../assets/Icons/YoutubeIcon";
import LinkedInIcon from "../../assets/Icons/LinkedInIcon";

const styles = {
  footerTextHeading: {
    color: "white",
  },
  footerTextAction: {
    color: "#e0e0e0",
    cursor: "pointer",
    lineHeight: "30px",
    fontWeight: "600",
  },
  contentRow: {
    display: "flex",
    flexDirection: "column",
    "& .MuiButton-root": {
      justifyContent: "flex-start",
    },
  },
};

const Footer = () => {
  return (
    <>
      <Box
        style={{
          backgroundColor: "#2161cd",
        }}
        mt={5}
        pb={5}
      >
        <Container maxWidth="lg">
          <Grid container display="flex" pt={6} spacing={6}>
            <Grid item xs={12} md={4}>
              <Box
                display={{ xs: "flex", md: "block" }}
                flexDirection="column"
                alignItems="center"
              >
                <Box display="flex" alignItems="center" pb={2}>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: "none", lg: "flex" },
                      fontWeight: 700,
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    About ANSSD
                  </Typography>
                </Box>
                <Typography
                  variant="body1"
                  sx={styles.footerTextHeading}
                  style={{
                    lineHeight: "30px",
                    fontWeight: "600",
                    color: "#e0e0e0",
                  }}
                >
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                </Typography>
                <Stack direction="row" alignItems="center" spacing={4} pt={3}>
                  <FacebookIcon />
                  <TwitterIcon />
                  <YoutubeIcon />
                  <LinkedInIcon />
                </Stack>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              order={{ xs: 1, md: 2 }}
              display="flex"
              justifyContent="space-between"
            >
              <Grid container>
                <Grid item xs={6} md={4} sx={styles.contentRow}>
                  <Typography
                    pb={2}
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: "none", lg: "flex" },
                      fontWeight: 700,
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Most Viewed
                  </Typography>

                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Our Team
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Who we Are
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    What We Do
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Operation & Safety
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Personal Licensing
                  </Typography>
                </Grid>
                <Grid item xs={6} md={5} sx={styles.contentRow}>
                  <Typography
                    pb={2}
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: "none", lg: "flex" },
                      fontWeight: 700,
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    About Website
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Copyright
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Privacy Policy
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Disclaimer
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Accessibility
                  </Typography>
                </Grid>

                <Grid item xs={6} md={3}>
                  <Typography
                    pb={2}
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                      mr: 2,
                      display: { xs: "none", lg: "flex" },
                      fontWeight: 700,
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    Documents
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Civil Aviation Act,2015
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Civil Aviation Authority Act
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Civil Aviation Security Rule 2016
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Civil Aviation Security Rule - English
                  </Typography>
                  <Typography variant="body1" sx={styles.footerTextAction}>
                    Various SOPs
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: "#2161cd",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{ paddingTop: "25px", paddingBottom: "40px" }}
        >
          <Divider sx={{ backgroundColor: "#fff" }} />
        </Container>
        <Typography
          pb={10}
          align="center"
          variant="body2"
          color="text.primary"
          sx={styles.footerTextHeading}
        >
          Copyright © 2023 - All Rights Reserved
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
