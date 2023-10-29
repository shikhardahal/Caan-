'use client';

import {
  AppBar,
  Box,
  Toolbar,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  IconButton,
  Drawer,
  Button,
  Container,
  Stack,
  FormControl,
  InputAdornment,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '../../assets/Icons/searchIcon';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Logo from '../../assets/images/logo.png';

import ClearIcon from '@mui/icons-material/Clear';

const navItems = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about-us' },
  { name: 'Activities', url: '/activities' },
  { name: 'Operation & Safety', url: '/operation-and-safety' },
  { name: 'Documents', url: '/documents' },
  { name: 'Forms', url: '/forms' },
  { name: 'Contact', url: '/contact' },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [showSearch, setshowSearch] = React.useState(false);

  const handleMenuDrawer = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleSearchDrawer = () => {
    setshowSearch(!showSearch);
  };

  function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
      className: trigger ? 'scrollStart' : 'scrollStop',
    });
  }

  ElevationScroll.propTypes = {
    window: PropTypes.func,
  };

  const [showClearIcon, setShowClearIcon] = useState('none');

  const handleChange = (event) => {
    setShowClearIcon(event.target.value === '' ? 'none' : 'flex');
  };

  const handleClear = () => {};

  return (
    <ElevationScroll>
      <Paper>
        <AppBar component="nav" elevation={0}>
          <Container maxWidth="lg">
            <Toolbar>
              <Box sx={{ flexGrow: 1 }}>
                <Image src={Logo} alt="CAAN" width={284} height={64} />
              </Box>
              <Stack
                direction="row"
                spacing={2}
                sx={{ display: { xs: 'none', md: 'block' } }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item.name}
                    color="secondary"
                    size="small"
                    variant="text"
                    sx={{ px: 2 }}
                    // component={<Link href={'/'} />}
                    to={item.url}
                  >
                    <Link href={item.url} style={{ textDecoration: 'none' }}>
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </Stack>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleMenuDrawer}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <IconButton
                size="large"
                aria-label="search"
                color="inherit"
                onClick={handleSearchDrawer}
              >
                <SearchIcon />
              </IconButton>
            </Toolbar>
          </Container>
        </AppBar>
        <Drawer
          anchor="top"
          open={showSearch}
          onClose={handleSearchDrawer}
          disablePortal
        >
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '1rem',
            }}
          >
            <Container maxWidth="sm">
              <FormControl fullWidth>
                <TextField
                  size="medium"
                  variant="outlined"
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ display: showClearIcon }}
                        onClick={handleClear}
                      >
                        <ClearIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Container>
          </Box>
        </Drawer>

        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={handleMenuDrawer}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: 240 },
          }}
        >
          <Stack
            direction="column"
            spacing={2}
            sx={{ textAlign: 'center', padding: '1.5rem 0' }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Image src={Logo} alt="CAAN" width={200} height={45} />
            </Box>
            <Divider />
            <List sx={{ mt: '0!important' }}>
              {navItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.url}
                    sx={{ textAlign: 'center' }}
                  >
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Stack>
        </Drawer>
      </Paper>
    </ElevationScroll>
  );
};

export default Header;
