'use client';

import { createTheme } from '@mui/material/styles';

import colors from './base/colors';
import breakpoints from './base/breakpooints';
import typography from './base/typography';
import globals from './base/globals';

const theme = createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ...globals,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.scrollStart': {
            '& .MuiAppBar-root': {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
            },
            '& .MuiToolbar-root': { padding: '0.5rem 0' },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          '& .MuiToolbar-root': {
            padding: '1.813rem 0',
            transition: 'all .5s ease-in-out',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '& .swiper': {
            '& .swiper-pagination-bullet': {
              width: '0.813rem',
              height: '0.813rem',
              margin: '0 0.625rem',
              backgroundColor: '#D9D9D9',
              '&.swiper-pagination-bullet-active': {
                backgroundColor: colors.primary.main,
              },
            },
          },
          '& .navSwiper': {
            padding: '1rem',
            margin: '0 0 0 -1rem',
          },
          '& .swiper-button-next': {
            '&:after': {
              display: 'none',
            },
          },
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          height: '100%',
          padding: '1rem',
          borderRadius: '0.938rem',
          "&[color='secondary']": {
            backgroundColor: colors.secondary.light,
            '& .MuiCardActions-root': {
              margin: '0 0.875rem',
              padding: '0.875rem 0 0.375rem',
              borderTop: '1px solid',
              borderColor: colors.grey[400],
              justifyContent: 'flex-end',
            },
          },
          '&.iconCard': {
            padding: '2.75rem 0.5rem 2.25rem',
            textAlign: 'center',
            backgroundColor: 'white',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
            '& .MuiBox-root': {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '3.125rem',
              marginBottom: '1rem',
            },
          },
          '&:hover': {
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
          },
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '.75rem 0 1.438rem',
          margin: '0 .875rem',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '1rem 0',
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          borderRadius: '0.938rem',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '.5rem 0 0',
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          textTransform: 'none',
          whiteSpace: 'nowrap',
          borderRadius: '1.563rem',
          flexShrink: '0',
          '&.MuiButton-sizeMedium': {
            padding: '0.75rem 3.187rem',
            borderRadius: '1.563rem',
          },
          '&.MuiButton-textPrimary': {
            padding: '0',
            '&:hover': {
              backgroundColor: 'transparent',
            },
          },
          '& .MuiButton-endIcon': {
            marginLeft: '0.813rem',
          },
        },
        primary: {
          //backgroundColor: theme.palette.primary.main
          text: {},
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&.MuiIconButton-colorSecondary': {
            borderRadius: '0.313rem',
            backgroundColor: colors.secondary.light,
            '&.MuiIconButton-sizeMedium': {
              width: '35px',
              height: '35px',
            },
          },
          '&.MuiIconButton-sizeLarge': {
            width: '70px',
            height: '70px',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          marginTop: '0.5rem',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          padding: '0.5rem 0',
          fontSize: '0.938rem',
          '& .MuiLink-root': {},
        },
      },
    },
  },
});

export default theme;
