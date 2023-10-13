import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  noDataFound: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    textAlign: 'center',
    padding: theme.spacing(6, 3)
  }
}));

export default useStyles;
