import {
  Grid,
  List,
  ListItem,
  Typography,
  Divider,
  IconButton,
  Container,
  Box,
  Stack,
  Link,
} from '@mui/material';
import React from 'react';

const Footer = ({ content }) => {
  const { brand, socials, menu1, menu2, menu3, copyright } = content;
  return (
    <Box
      sx={{
        pb: { xs: '1.5rem', md: '2.5rem' },
        pt: { xs: '4rem', md: '7rem' },
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? theme.palette.grey.dark
            : theme.palette.primary.main,
        color: (theme) => (theme.palette.mode === 'dark' ? 'black' : 'white'),
        '.MuiLink-root': {
          color: (theme) => (theme.palette.mode === 'dark' ? 'black' : 'white'),
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container rowSpacing={{ xs: 4, sm: 8, md: 10 }}>
          <Grid item xs={12}>
            <Grid container spacing={{ xs: 2.5, sm: 2.75, md: 3 }}>
              <Grid item xs={12} sm={6} md={5}>
                <Stack direction="column" spacing={{ xs: 1.5, sm: 2.5, md: 3 }}>
                  <Typography variant="h4">About {brand.name}</Typography>
                  <Typography variant="body1" lineHeight="2.2">
                    Mauris fringilla venenatis nisi nec ultrices. Nam iaculis
                    tempus sem sit amet convallis. Sed vel sapien ultricies,
                    congue lacus a, venenatis tortor.Ut non odio lacus.
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={{ xs: 1, sm: 2, md: 2.5 }}
                    sx={{ py: 1.5 }}
                  >
                    {socials.map((social, index) => (
                      <IconButton
                        key={index}
                        aria-label="social"
                        size="medium"
                        color="secondary"
                        component={Link}
                        href={social.link}
                        target="_blank"
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              {menu1.map(({ name: heading, items }, index) => (
                <Grid item xs={12} sm={6} md={2} key={index}>
                  <Typography variant="h4">{heading}</Typography>
                  <List key={heading}>
                    {items.map(({ name: title, href }) => (
                      <ListItem key={title}>
                        <Typography
                          component={Link}
                          href={href}
                          variant="button"
                          fontWeight="regular"
                          textTransform="capitalize"
                        >
                          {title}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
              {menu2.map(({ name: heading, items }, index) => (
                <Grid item xs={12} sm={6} md={2} key={index}>
                  <Typography variant="h4">{heading}</Typography>
                  <List key={heading}>
                    {items.map(({ name: title, href }, index) => (
                      <ListItem key={index}>
                        <Typography
                          component={Link}
                          href={href}
                          variant="button"
                          fontWeight="regular"
                          textTransform="capitalize"
                        >
                          {title}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
              {menu3.map(({ name: heading, items }, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Typography variant="h4">{heading}</Typography>
                  <List key={heading}>
                    {items.map(({ name: title, href }, index) => (
                      <ListItem key={title}>
                        <Typography
                          component={Link}
                          href={href}
                          variant="button"
                          fontWeight="regular"
                          textTransform="capitalize"
                          key={index}
                        >
                          {title}
                        </Typography>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={{ xs: 3, sm: 4, md: 6 }}>
              <Grid item xs={12}>
                <Divider sx={{ borderColor: '#CFCFCF' }} />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" textAlign="center">
                  {copyright}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
