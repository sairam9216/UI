import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  loginForm: {
    padding: theme.spacing(3, 3.8),
    border: `1px solid ${theme.palette.common.borderColor}`,
    borderRadius: theme.spacing(1.2),
    maxWidth: '390px',
    background: theme.palette.common.backgroundWhite
  },
  LoginForm_Title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3)
  }
}));

export default useStyles;
