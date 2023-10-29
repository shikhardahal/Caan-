'use client';
import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Container,
  Grid,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Layout from "../../components/layout";

async function getData() {
  const res = await fetch('http://localhost:1337/api/activities?populate=*')

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
type Activity = {
  name: string;
  description: string;
  date: Date;
  img_url: string;
}
const Home = async () => {
  let data = await getData();
  type Data = {
    date: Date,
    img_url: string;
    name: string;
  }
  console.log(data.data);
  return (
    <Layout>
      <br />
      <br />
      <Box
        sx={{
          pb: { xs: '4rem', md: '7.5rem' },
          pt: { xs: '3rem', md: '4.313rem' },
        }}
      >
        <Container maxWidth="lg">
          <Grid container rowSpacing={{ xs: 3, md: 5 }} columnSpacing={0.5}>
            {data.data.map(data => (
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="236"
                    image="http://localhost:1337/uploads/riul550cr_X_Fe_b9b3afe56f.png"
                    alt="image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" color="primary">
                      {data.attributes.date}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {data.attributes.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="text" endIcon={<ArrowForwardIcon />}>
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))};
            {data.data.map(data => (
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="236"
                    image="http://localhost:1337/uploads/Rectangle_14_26badd6162.png"
                    alt="image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" color="primary">
                      {data.attributes.date}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {data.attributes.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="text" endIcon={<ArrowForwardIcon />}>
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))};
            {data.data.map(data => (
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardMedia
                    component="img"
                    height="236"
                    image="http://localhost:1337/uploads/Rectangle_14_26badd6162.png"
                    alt="image"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" color="primary">
                      {data.attributes.date}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      {data.attributes.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="text" endIcon={<ArrowForwardIcon />}>
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))};
          </Grid>
        </Container>
      </Box>
    </Layout>

  )
}

export default Home