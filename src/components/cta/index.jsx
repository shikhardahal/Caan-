import React from 'react';
import { Box, Typography, Button, Container, Stack } from '@mui/material';

const CallToAction = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.light,
        py: '50px',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems="center"
          spacing={2}
          sx={{
            textAlign: { xs: 'center', md: 'left' },
            mx: { xs: '2rem', sm: '5rem', md: '0' },
          }}
        >
          <Typography variant="h3">
            Get all the latest news, updates and documents delivered directly to
            your inbox instantly
          </Typography>
          <Button variant="contained" color="primary">
            Subscribe to ANSSD
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default CallToAction;
