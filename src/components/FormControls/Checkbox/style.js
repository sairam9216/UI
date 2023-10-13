import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  checkboxMain: {
    '& .MuiCheckbox-root': {
      padding: theme.spacing(0, 1),
      '&.Mui-checked': {
        color: theme.palette.primary.main
      }
    },
    '& .MuiTypography-root': {
      color: theme.palette.common.themeFontColor,
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(14),
      fontFamily: theme.typography.fontFamily
    }
  }
}));

export default useStyle;
