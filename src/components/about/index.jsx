import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  Card,
  Grid,
  Container,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const AboutUs = () => {
  return (
    <Box
      sx={{
        pb: { xs: '3rem', md: '4.5rem' },
        pt: { xs: '4rem', md: '8.75rem' },
      }}
    >
      <Container maxWidth="lg">
        <Card>
          <Grid container spacing={4}>
            <Grid item xs={12} md={5.5}>
              <img
                src="images/img1.jpg"
                alt=""
                style={{
                  borderRadius: '0.938rem',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Grid>
            <Grid item xs={12} md={6.5}>
              <Box sx={{ mt: 3.25, mb: 2.5 }}>
                <Typography variant="h6" color="primary">
                  ABOUT US
                </Typography>
                <Typography variant="h2">
                  Aviation Security Department
                </Typography>
              </Box>
              <Typography variant="body2">
                The safety, regularity and efficiency of civil aviation and its
                facilities is measure to ensure the protection and safeguarding
                of passengers, flight crew, ground staff, the general public and
                civil aviation facilities against acts of unlawful interference
                perpetrated on the ground and in-flight.
              </Typography>

              <Typography variant="body2">
                The International Civil Aviation Organisation (ICAO), an agency
                of the United Nations, seeks to promote appropriate levels of
                aviation security throughout the global community.
              </Typography>
              <Stack direction="row" justifyContent="flex-end" sx={{ pt: 3 }}>
                <Button variant="text" endIcon={<ArrowForwardIcon />}>
                  Read More
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
};

export default AboutUs;
