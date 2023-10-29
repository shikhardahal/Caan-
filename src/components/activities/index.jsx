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

const OurActivities = () => {
  return (
    <Box
      sx={{
        pb: { xs: '4rem', md: '7.5rem' },
        pt: { xs: '3rem', md: '4.313rem' },
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent={{ xs: 'center', sm: 'space-between' }}
          alignItems="center"
          spacing={2}
          sx={{ mb: { xs: '3rem', md: '3.938rem' } }}
        >
          <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h6" color="primary">
              OUR ACTIVITIES
            </Typography>
            <Typography variant="h2">Get Updated with Activities</Typography>
          </Box>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
          >
            View All Activities
          </Button>
        </Stack>

        <Grid container rowSpacing={{ xs: 3, md: 5 }} columnSpacing={0.5}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="236"
                image="images/img1.jpg"
                alt="image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" color="primary">
                  12 July 2023
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="text" endIcon={<ArrowForwardIcon />}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="236"
                image="images/img1.jpg"
                alt="image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" color="primary">
                  12 July 2023
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="text" endIcon={<ArrowForwardIcon />}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="236"
                image="images/img1.jpg"
                alt="image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" color="primary">
                  12 July 2023
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="text" endIcon={<ArrowForwardIcon />}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardMedia
                component="img"
                height="236"
                image="images/img1.jpg"
                alt="image"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" color="primary">
                  12 July 2023
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="text" endIcon={<ArrowForwardIcon />}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OurActivities;
