import React from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  Card,
  CardHeader,
  CardActions,
  Container,
  Grid
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ImportantLinks = () => {
  return (
    <Box sx={{ py: { xs: "4rem", md: "6.5rem" } }}>
      <Container maxWidth="lg">
        <Stack
          direction="column"
          spacing={0.75}
          sx={{ pb: { xs: 4, md: 7.5 }, textAlign: "center" }}
        >
          <Typography variant="h6" color="primary">
            IMPORTANT LINKS
          </Typography>
          <Typography variant="h2">Most Popular Contents</Typography>
        </Stack>
        <Grid
          container
          rowSpacing={{ xs: 3, md: 5 }}
          columnSpacing={{ xs: 2.5, md: 4 }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card
              color="secondary"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <CardHeader title="Operation & Safety"></CardHeader>
              <CardActions>
                <Button variant="text" endIcon={<ArrowForwardIcon />}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              color="secondary"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <CardHeader title="Documents for Download "></CardHeader>
              <CardActions>
                <Button variant="text" endIcon={<ArrowForwardIcon />}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              color="secondary"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <CardHeader title="Personal Licensing "></CardHeader>
              <CardActions>
                <Button variant="text" endIcon={<ArrowForwardIcon />}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              color="secondary"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <CardHeader title="Rules & Regulations"></CardHeader>
              <CardActions>
                <Button variant="text" endIcon={<ArrowForwardIcon />}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              color="secondary"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <CardHeader title=" E-Services & Forms "></CardHeader>
              <CardActions>
                <Button variant="text" endIcon={<ArrowForwardIcon />}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card
              color="secondary"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <CardHeader title="Who We Are "></CardHeader>
              <CardActions>
                <Button variant="text" endIcon={<ArrowForwardIcon />}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ mt: { xs: "2.5rem", md: "3.625rem" } }}
        >
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            View All Links
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default ImportantLinks;
