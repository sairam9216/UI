import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    linkText: {
      color: theme.palette.common.linkColor,
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(16),
      flexShrink: '0',
      '& svg': {
        color: theme.palette.common.linkColor
      }
    }
  };
});

export default useStyle;
