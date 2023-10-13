import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  infoIcon: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    borderRadius: theme.spacing(4),
    background: 'rgba(255, 255, 255, 0.2)',
    border: '8px solid rgba(255, 255, 255, 0.1)',
    margin: '0 auto'
  },
  infoLogo: {
    margin: theme.spacing(4, 0)
  },
  infoLabel: {
    color: theme.palette.primary.textColor,
    background: theme.palette.common.backgroundWhite,
    padding: theme.spacing(0.5, 1),
    borderRadius: theme.spacing(0.5)
  },
  linktext: {
    color: theme.palette.common.textWhite,
    fontWeight: theme.typography.fontWeightMedium
  },
  infoButton: {
    fontSize: theme.spacing(2),
    textTransform: 'unset',
    display: 'block',
    margin: '0 auto',
    color: theme.palette.common.linkColorExtra,
    background: theme.palette.common.backgroundWhite,
    width: '100%',
    '&:hover': {
      background: theme.palette.common.linkColorExtra,
      color: theme.palette.common.textWhite
    }
  },
  infoButtons: {
    fontSize: theme.spacing(2),
    textTransform: 'unset',
    display: 'block',
    margin: '0 auto',
    color: theme.palette.common.linkColorExtra,
    background: theme.palette.common.backgroundWhite,
    width: '100%',
    padding: 10,
    '&:hover': {
      background: theme.palette.common.linkColorExtra,
      color: theme.palette.common.textWhite
    }
  },
  checkBoxWhite: {
    color: theme.palette.common.textWhite,
    '& svg': {
      color: theme.palette.common.textWhite
    }
  }
}));

export default useStyle;
