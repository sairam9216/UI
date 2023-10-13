import { makeStyles } from '@mui/styles';
const useStyle = makeStyles((theme) => {
  return {
    userName: {
      color: theme.palette.primary.main,
      textTransform: 'uppercase'
    },
    userEmail: {
      color: theme.palette.secondary.main
    },
    userInfo: {
      marginRight: theme.spacing(1.5)
    }
  };
});

export default useStyle;
