import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  addItem: {
    background: theme.palette.common.fieldBackground,
    padding: theme.spacing(2)
  }
}));

export default useStyle;
