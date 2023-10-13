import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  loginForm: {
    padding: theme.spacing(3, 3.8),
    border: `1px solid ${theme.palette.common.borderColor}`,
    borderRadius: theme.spacing(1.2),
    maxWidth: '390px',
    width: '95%',
    background: theme.palette.common.backgroundWhite,
    margin: '0 auto'
  },
  LoginForm_Title: {
    textAlign: 'center',
    marginBottom: theme.spacing(3)
  },
  signupRow: {
    color: theme.palette.secondary.main
  },
  tableBtn: {
    fontSize: theme.typography.pxToRem(20),
    marginBottom: theme.spacing(4),
    '& label': {
      padding: theme.spacing(0.5, 1.5),
      background: theme.palette.primary.main,
      borderRadius: theme.spacing(0.6),
      color: theme.palette.common.textWhite,
      fontSize: theme.typography.pxToRem(18)
    }
  },
  loginBtn: {
    fontSize: theme.typography.pxToRem(18)
  }
}));

export default useStyles;
