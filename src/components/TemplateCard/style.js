import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  cardMain: {
    boxShadow: 'unset',
    width: '100%',
    height: '100%',
    padding: theme.spacing(0, 1),
    backgroundColor: 'transparent'
  },
  cardContent: {
    background: theme.palette.common.themeBackground,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    height: '100%',
    overflow: 'hidden',
    '&:before': {
      position: 'absolute',
      bottom: '0',
      left: '0',
      top: '0',
      width: '100%',
      height: '100%',
      content: `''`,
      background: 'rgba(0,0,0,0.5)',
      transition: '0.3s ease',
      display: 'none'
    },
    '& img': {
      width: '100%',
      objectFit: 'contain'
    },
    '&:hover': {
      '&:before': {
        display: 'block',
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      },
      '& h4': {
        [theme.breakpoints.up('sm')]: {
          marginTop: theme.spacing(0),
          opacity: '1'
        }
      },
      '& .zoomIcon, .copyTemplate': {
        opacity: '1'
      }
    },
    '& .copyTemplate': {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      transition: '0.2s ease',
      color: theme.palette.common.textWhite,
      zIndex: '2',
      opacity: '0',
      [theme.breakpoints.down('sm')]: {
        opacity: '1',
        color: theme.palette.primary.main
      },
      '&:hover': {
        color: theme.palette.primary.main,
        opacity: '1'
      }
    },
    '& .generateBtn': {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      transition: '0.2s ease',
      color: theme.palette.common.textWhite,
      zIndex: '2',
      [theme.breakpoints.down('sm')]: {
        opacity: '1'
      },
      '&:hover': {
        opacity: '1'
      }
    }
  },
  emptyCard: {
    minHeight: '11rem'
  },
  title: {
    marginTop: theme.spacing(2),
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    inset: theme.spacing(1),
    color: theme.palette.common.textWhite,
    transition: '0.6s ease',
    textAlign: 'center',
    opacity: '0',
    wordBreak: 'break-all',
    [theme.breakpoints.down('sm')]: {
      position: 'static',
      opacity: '1',
      color: theme.palette.primary.main
    }
  },
  zoomIcon: {
    position: 'absolute',
    left: theme.spacing(1),
    top: theme.spacing(1),
    transition: '0.2s ease',
    color: theme.palette.common.textWhite,
    zIndex: '2',
    opacity: '0',
    [theme.breakpoints.down('sm')]: {
      opacity: '1',
      color: theme.palette.primary.main
    },
    '&:hover': {
      color: theme.palette.primary.main,
      opacity: '1'
    }
  }
}));

export default useStyle;
