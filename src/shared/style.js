import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    minHeight: 'calc(100vh - 126px)'
  },
  footer: {
    margin: 'auto 0 0',
    padding: theme.spacing(2, 0)
  },
  copyRightText: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.secondary.main
  }
}));

export default useStyles;
