import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  chipMain: {
    display: 'inline-block'
  },
  chip: {
    background: theme.palette.common.backgroundWhite,
    padding: theme.spacing(0.6, 0.5),
    borderRadius: theme.spacing(0.8),
    margin: theme.spacing(0, 1.3, 1.3, 0),
    border: `1px solid ${theme.palette.common.borderColor}`,
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0.8, 0.8, 0)
    }
  },
  textWrap: {
    margin: theme.spacing(0, 0.8)
  },
  name: {
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 'normal',
    color: theme.palette.primary.textColor
  },
  remove: {
    cursor: 'pointer',
    color: theme.palette.common.borderDark
  },
  subtitle: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(16)
  }
}));

export default useStyle;
