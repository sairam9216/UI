import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    cardMain: {
      marginBottom: theme.spacing(2),
      '&:last-child': {
        marginBottom: theme.spacing(0)
      }
    },
    CardContent: {
      '&:last-child': {
        paddingBottom: theme.spacing(2)
      }
    },
    cardRow: {
      marginBottom: theme.spacing(1),
      '&:last-child': {
        marginBottom: theme.spacing(0)
      }
    },
    cardLable: {
      color: theme.palette.primary.main,
      fontFamily: theme.typography.fontFamily,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14)
    },
    cardData: {
      fontSize: theme.typography.pxToRem(14),
      color: theme.palette.secondary.main,
      maxWidth: '70%'
    }
  };
});
export default useStyle;
