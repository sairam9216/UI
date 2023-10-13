import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  modalTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(20)
  },
  detailContent: {
    '& p': {
      marginBottom: theme.spacing(2.5),
      fontSize: theme.typography.pxToRem(14),
      '&:last-child': {
        marginBottom: theme.spacing(0)
      }
    }
  }
}));

export default useStyles;
