import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    profileOuter: {
      background: theme.palette.common.themeBackgroundLight
    },
    profileInner: {
      background: theme.palette.common.backgroundWhite
    },
    photoLink: {
      color: theme.palette.common.linkColorExtra,
      fontSize: theme.typography.pxToRem(16)
    },
    title: {
      fontSize: theme.typography.pxToRem(18)
    }
  };
});

export default useStyle;
