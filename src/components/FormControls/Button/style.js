import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    '&.MuiButton-root': {
      background: theme.palette.primary.background,
      color: theme.palette.common.white,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.spacing(0.5),
      boxShadow: theme.shadows,
      fontWeight: theme.typography.fontWeightMedium,
      fontFamily: theme.typography.fontFamily,
      textAlign: 'center',
      cursor: 'pointer',
      flexShrink: '0',
      '&.MuiButton-sizeLarge': {
        height: '45px'
      }
    },
    '&.btnSecondary': {
      background: theme.palette.common.tableHeadingBackground,
      color: theme.palette.common.themeFontColor,
      boxShadow: 'none',
      '&.btnSecondary:hover': {
        background: theme.palette.primary.main,
        color: theme.palette.common.white
      }
    },
    '&.MuiButton-root:hover': {
      boxShadow: 'none'
    },
    '&.deleteBtn': {
      background: theme.error,
      '&.MuiButton-root:hover': {
        background: theme.error
      }
    }
  },
  IconButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.common.backgroundWhite,
    '&:last-child': { marginRight: theme.spacing(0) },
    '&.bgButton': {
      background: theme.palette.primary.background
    }
  }
}));

export default useStyles;
