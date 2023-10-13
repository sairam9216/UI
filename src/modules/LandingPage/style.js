import { makeStyles } from '@mui/styles';
const useStyle = makeStyles((theme) => {
  return {
    headerMain: {
      backgroundColor: theme.palette.common.landingBg
    },
    headerAppBar: {
      backgroundColor: theme.palette.common.landingBg,
      padding: theme.spacing(0.4, 0),
      boxShadow: 'unset'
    },
    headerLeft: {
      display: 'flex',
      alignItems: 'center'
    },
    headerLogo: {
      fontSize: '1.25rem',
      color: theme.palette.common.themeDark
    },
    tableBtn: {
      margin: theme.spacing(0, 3, 0, 0.8),
      '& label': {
        padding: theme.spacing(0.5, 1.5),
        background: theme.palette.primary.main,
        borderRadius: theme.spacing(0.6),
        color: theme.palette.common.textWhite
      }
    },
    menuItem: {
      padding: theme.spacing(1),
      color: theme.palette.secondary.main,
      '& a': {
        color: theme.palette.secondary.main
      },
      marginRight: theme.spacing(3),
      '& .submenu': {
        listStyle: 'none',
        display: 'none',
        position: 'absolute',
        width: '10rem',
        top: '100%',
        left: '0',
        fontSize: theme.typography.pxToRem(15),
        boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.02)',
        background: theme.palette.common.backgroundWhite
      },
      '&:hover': {
        color: theme.palette.primary.main,
        '& > a': {
          color: theme.palette.primary.main
        },
        '& .submenu': {
          display: 'block'
        }
      }
    },
    submenuItem: {
      padding: theme.spacing(1, 1.5),
      '&:hover': {
        background: theme.palette.primary.main,
        '& a': {
          color: theme.palette.common.textWhite
        }
      }
    },
    loginLink: {
      marginRight: theme.spacing(4),
      '&.active': {
        background: theme.palette.primary.main,
        padding: theme.spacing(1, 2),
        borderRadius: theme.spacing(0.5),
        color: theme.palette.common.textWhite
      },
      '&:last-child': {
        marginRight: theme.spacing(0)
      }
    },
    menuToggle: {
      color: theme.palette.primary.main
    },
    // Banner Section
    bannerSection: {
      padding: theme.spacing(12, 0),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(4, 0)
      }
    },
    bannerTop: {
      marginBottom: theme.spacing(4)
    },
    bannerTitle: {
      fontSize: theme.typography.pxToRem(60),
      lineHeight: theme.typography.pxToRem(60),
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.pxToRem(34),
        lineHeight: theme.typography.pxToRem(42)
      }
    },
    bannerSubtitle: {
      fontSize: theme.typography.pxToRem(16),
      color: theme.palette.secondary.main,
      maxWidth: '48rem',
      margin: '0 auto'
    },
    btnMargin: {
      margin: theme.spacing(1)
    },
    buttonWrapper: {
      marginBottom: theme.spacing(7)
    },
    // partner
    partnerImage: {
      padding: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1)
      },
      '& img': {
        objectFit: 'contain'
      }
    },
    partnerSection: {
      padding: theme.spacing(10, 2)
    },
    partnerTitle: {
      fontSize: theme.typography.pxToRem(16),
      marginBottom: theme.spacing(5),
      color: theme.palette.secondary.main
    },
    // Feature
    featureSectionWrap: {
      '& .featureListRow': {
        marginBottom: theme.spacing(11),
        '& .featureImage': {
          '& img': {
            maxHeight: '23.5rem'
          }
        },
        '&:nth-child(odd)': {
          flexDirection: 'row-reverse',
          '& .featureDescBox ': {
            paddingLeft: theme.spacing(8),
            [theme.breakpoints.down('md')]: {
              paddingLeft: theme.spacing(2)
            }
          }
        },
        '&:nth-child(even)': {}
      }
    },
    featureSection: {
      padding: theme.spacing(10, 2),
      maxWidth: '43rem',
      margin: '0 auto'
    },
    featureTitle: {
      fontSize: theme.typography.pxToRem(16),
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(1)
    },
    featureBigTitle: {
      fontSize: theme.typography.pxToRem(30),
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: theme.spacing(1.5)
    },
    featureDesc: {
      fontSize: theme.typography.pxToRem(18),
      color: theme.palette.secondary.main
    },
    featureIcon: {
      width: '3.125rem',
      height: '3.125rem',
      borderRadius: theme.spacing(5),
      background: theme.palette.common.iconBg,
      marginBottom: theme.spacing(2),
      color: theme.palette.primary.main
    },
    featureListTitle: {
      fontSize: theme.typography.pxToRem(30),
      marginBottom: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.pxToRem(24),
        lineHeight: theme.typography.pxToRem(30)
      }
    },
    featureListSubtitle: {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(26),
      color: theme.palette.secondary.main,
      marginBottom: theme.spacing(1)
    },
    checkText: {
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(28),
      color: theme.palette.secondary.main
    },
    checkIcon: {
      minWidth: '2.5rem'
    },
    featureData: {
      maxWidth: '41rem'
    },
    // trialSection
    trialSection: {
      padding: theme.spacing(8),
      background: theme.palette.common.landingBg,
      borderRadius: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(4)
      }
    },
    trialSubtitle: {
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(26),
      color: theme.palette.secondary.main
    },
    // Project Section
    projectSection: {
      marginTop: theme.spacing(11)
    },
    projectTop: {
      marginBottom: theme.spacing(7)
    },
    projectBox: {
      padding: theme.spacing(7, 0),
      overflow: 'hidden'
    },
    projectItem: {
      borderRight: `1px solid ${theme.palette.common.cardBackground}`,
      paddingBottom: theme.spacing(2),
      // paddingRight: theme.spacing(2),
      '&:last-child': {
        borderRight: 'none',
        borderBottom: 'none'
      },
      [theme.breakpoints.down('sm')]: {
        borderRight: 'unset',
        borderBottom: `1px solid ${theme.palette.common.cardBackground}`
      }
    },
    projectNumber: {
      fontSize: theme.typography.pxToRem(50),
      color: theme.palette.primary.main,
      marginBottom: theme.spacing(1.4)
    },
    // Testimonial
    testimonialSection: {
      padding: theme.spacing(12),
      background: theme.palette.common.landingBg,
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(3)
      }
    },
    testimonialTitle: {
      fontSize: theme.typography.pxToRem(38),
      lineHeight: theme.typography.pxToRem(46),
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: theme.spacing(3.5),
      [theme.breakpoints.down('md')]: {
        fontSize: theme.typography.pxToRem(26),
        lineHeight: theme.typography.pxToRem(32)
      }
    },
    userName: {
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(26),
      marginBottom: theme.spacing(0.5)
    },
    userRole: {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(26),
      color: theme.palette.secondary.main
    },
    testimonialUser: {
      margin: `0 auto ${theme.spacing(2)} `
    },
    startupSection: {
      marginTop: theme.spacing(12),
      '& .featureImage': {
        marginRight: theme.spacing(-3),
        [theme.breakpoints.down('sm')]: {
          marginRight: theme.spacing(-2)
        },
        '& img': {
          display: 'block',
          maxHeight: '37.5rem',
          marginLeft: 'auto'
        }
      }
    },
    // Footer
    footer: {
      color: theme.palette.common.footerText,
      '& a': {
        fontSize: theme.typography.pxToRem(14),
        lineHeight: theme.typography.pxToRem(20),
        display: 'inline-block'
      },
      '& li': {
        listStyle: 'none'
      }
    },
    footerLogo: {
      marginBottom: theme.spacing(4),
      color: theme.palette.common.textWhite,
      '& label': {
        background: theme.palette.primary.main,
        textTransform: 'uppercase',
        padding: theme.spacing(0.5, 1),
        borderRadius: theme.spacing(0.5),
        fontSize: theme.typography.pxToRem(14),
        display: 'inline-block'
      }
    },
    footerMenuTitle: {
      paddingRight: theme.spacing(3),
      marginBottom: theme.spacing(1),
      fontSize: theme.typography.pxToRem(14),
      color: theme.palette.common.footerMenu,
      fontWeight: theme.typography.fontWeightMedium,
      '&:first-child': {
        paddingLeft: '0'
      },
      '&:hover': {
        color: theme.palette.common.textWhite
      }
    },
    footerTop: {
      background: theme.palette.common.footerBg,
      padding: theme.spacing(6, 0)
    },
    inputSubscribe: {
      '& .MuiInputLabel-root': {
        color: theme.palette.common.footerMenu
      }
    },
    footerBottom: {
      color: theme.palette.common.borderDark,
      background: theme.palette.common.footerBg2,
      padding: theme.spacing(4.5, 0),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(3, 0, 2)
      },
      '& p': {
        fontSize: theme.typography.pxToRem(14)
      }
    },
    footerBottomFlex: {
      [theme.breakpoints.down('sm')]: {
        '& > *': {
          width: '100%',
          textAlign: 'center'
        },
        '& .d_flex': {
          justifyContent: 'center'
        }
      }
    },
    subscribeWrap: {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2)
      }
    },
    copyRightWrap: {
      [theme.breakpoints.down('sm')]: {
        order: '2'
      }
    }
  };
});

export default useStyle;
