import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    pageTitle: {
      fontSize: theme.typography.pxToRem(24),
      lineHeight: theme.typography.pxToRem(18),
      margin: theme.spacing(4, 0, 3)
    },
    notificationContent: {
      padding: theme.spacing(3),
      border: `1px solid ${theme.palette.secondary.gradient}`,
      borderRadius: theme.spacing(0.5)
    },
    listRow: {
      marginBottom: theme.spacing(4)
    },
    icon: {
      marginRight: theme.spacing(2)
    },
    title: {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: theme.spacing(1)
    },
    subtitle: {
      fontSize: theme.typography.pxToRem(13),
      color: theme.palette.secondary.main
    }
  };
});

export default useStyle;
