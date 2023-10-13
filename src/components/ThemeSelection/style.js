import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    heading: {
      background: theme.palette.primary.background,
      color: theme.palette.common.white
    }
  };
});

export default useStyle;
