import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  cardMain: {
    boxShadow: 'unset',
    padding: theme.spacing(0, 1, 3)
  },
  cardImage: {
    margin: '0 auto'
  },
  cardContent: {
    padding: theme.spacing(3.7, 5),
    background: theme.palette.common.backgroundWhite,
    borderRadius: theme.spacing(1),
    boxShadow: theme.cardShadow,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4, 2)
    }
  },
  docData: {
    marginLeft: theme.spacing(2.5)
  },
  title: {
    fontSize: theme.typography.pxToRem(20),
    lineHeight: theme.typography.pxToRem(24),
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.common.textWhite,
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.pxToRem(18),
      lineHeight: theme.typography.pxToRem(24)
    }
  },
  subtitle: {
    marginTop: theme.spacing(0.5),
    fontSize: theme.typography.pxToRem(13),
    lineHeight: theme.typography.pxToRem(16),
    color: theme.palette.common.textWhite
  }
}));

export default useStyle;
