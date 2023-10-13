import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    labelContainer: {
      marginBottom: 10
    },
    documentNameTitle: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: 500,
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1.5)
    },
    listLabel: {
      marginLeft: 10,
      fontSize: theme.typography.pxToRem(14),
      cursor: 'pointer'
    },
    linkText: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(16),
      marginBottom: theme.spacing(1.5),
      marginLeft: theme.spacing(2)
    }
  };
});

export default useStyle;
