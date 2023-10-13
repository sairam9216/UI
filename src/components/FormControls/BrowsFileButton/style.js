import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  fieldRow: {
    height: '100%'
  },
  inputLabel: {
    '&.MuiInputLabel-root': {
      marginBottom: theme.spacing(1),
      color: theme.palette.common.themeFontColor,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(14)
    }
  },
  fileWrapper: {
    // border: `1px dashed ${theme.palette.common.tableHeadingBackground}`,
    backgroundColor: theme.palette.common.themeBackground,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(3),
    textAlign: 'center',
    position: 'relative',
    cursor: 'pointer',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: `repeating-linear-gradient(1deg, ${theme.palette.primary.main}, ${theme.palette.primary.main} 11px, transparent 11px, transparent 25px, ${theme.palette.primary.main} 25px), repeating-linear-gradient(91deg, ${theme.palette.primary.main}, ${theme.palette.primary.main} 11px, transparent 11px, transparent 25px, ${theme.palette.primary.main} 25px), repeating-linear-gradient(181deg, ${theme.palette.primary.main}, ${theme.palette.primary.main} 11px, transparent 11px, transparent 25px, ${theme.palette.primary.main} 25px), repeating-linear-gradient(271deg, ${theme.palette.primary.main}, ${theme.palette.primary.main} 11px, transparent 11px, transparent 25px, ${theme.palette.primary.main} 25px)`,
    backgroundSize: '1px 100%, 100% 1px, 1px 100% , 100% 1px',
    backgroundPosition: '0 0, 0 0, 100% 0, 0 100%',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 1)
    }
  },
  input: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: '0',
    right: '0',
    top: '0',
    bottom: '0',
    opacity: '0',
    cursor: 'pointer'
  },
  dragTitle: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(16),
    lineHeight: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(13),
      lineHeight: theme.typography.pxToRem(16)
    }
  },
  label: {
    color: theme.palette.common.linkColor,
    cursor: 'pointer',
    textDecoration: 'underline'
  },
  sizeText: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(14),
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(12)
    }
  },
  dragContainer: {
    width: '100%',
    height: '100%'
  },
  disableDragContainer: {
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    '& .fileWrapper': {
      backgroundColor: 'lightgray'
    },
    '& .browsLabel': {
      color: 'gray!important',
      textDecoration: 'underline'
    }
  }
}));

export default useStyles;
