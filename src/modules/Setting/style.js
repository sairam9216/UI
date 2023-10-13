import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    headerWrapper: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(10),
      background: theme.palette.common.tableHeadingBackground
    },
    pageTitle: {
      color: theme.palette.primary.textColor,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(24),
      lineHeight: theme.typography.pxToRem(28),
      marginBottom: theme.spacing(1)
    },
    pageSubtitle: {
      color: theme.palette.secondary.main,
      fontSize: theme.typography.pxToRem(14)
    }
  };
});

export default useStyle;
