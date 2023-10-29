import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Card,
  IconButton,
  Container,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import PlaneIcon1 from '../../assets/Icons/planeIcon1';
import DesktopIcon from '../../assets/Icons/desktopIcon';
import ServerIcon from '../../assets/Icons/serverIcon';
import PlaneIcon2 from '../../assets/Icons/planeIcon2';
import ArrowRightIcon from '../../assets/Icons/arrowRightIcon';

const Functions = () => {
  return (
    <Container maxWidth="lg">
      <Stack
        direction="row"
        alignItems="center"
        spacing={1.5}
        sx={{ mt: '-91px', px: { xs: 2, md: 0 } }}
      >
        <Swiper
          keyboard={true}
          modules={[Navigation, Keyboard]}
          loop
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="navSwiper"
          navigation={{
            nextEl: '.swiper-button-next',
          }}
        >
          <SwiperSlide>
            <Card className="iconCard">
              <Box>
                <PlaneIcon1 />
              </Box>
              <Typography variant="h5">Air Traffic System</Typography>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="iconCard">
              <Box>
                <DesktopIcon />
              </Box>
              <Typography variant="h5">Airport Info System</Typography>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="iconCard">
              <Box>
                <ServerIcon />
              </Box>
              <Typography variant="h5">Central Navigation System</Typography>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="iconCard">
              <Box>
                <PlaneIcon2 />
              </Box>
              <Typography variant="h5">Search And Rescue</Typography>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="iconCard">
              <Box>
                <PlaneIcon1 />
              </Box>
              <Typography variant="h5">Air Traffic System</Typography>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="iconCard">
              <Box>
                <DesktopIcon />
              </Box>
              <Typography variant="h5">Airport Info System</Typography>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="iconCard">
              <Box>
                <ServerIcon />
              </Box>
              <Typography variant="h5">Central Navigation System</Typography>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="iconCard">
              <Box>
                <PlaneIcon2 />
              </Box>
              <Typography variant="h5">Search And Rescue</Typography>
            </Card>
          </SwiperSlide>
        </Swiper>
        <IconButton className="swiper-button-next" size="large">
          <ArrowRightIcon />
        </IconButton>
      </Stack>
    </Container>
  );
};

export default Functions;
