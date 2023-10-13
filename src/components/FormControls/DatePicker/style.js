import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  fieldRow: {
    marginTop: theme.spacing(2),
    '&:first-child': {
      marginTop: theme.spacing(0)
    }
  },
  inputLabel: {
    marginBottom: theme.spacing(0.5),
    color: theme.palette.common.themeFontColor,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    fontFamily: theme.typography.fontFamily
  },
  textField: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      background: theme.palette.common.fieldBackground,
      fontSize: theme.typography.pxToRem(10),
      borderColor: theme.palette.common.tableHeadingBackground,
      borderRadius: 4,
      borderWidth: '1px',
      '&:focus-visible': {
        borderColor: theme.palette.common.themeBackground
      },
      '& .MuiOutLinedInput-input': {
        color: theme.palette.secondary.main
      }
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.common.tableHeadingBackground
    },
    '& .Mui-disabled': {
      WebkitTextFillColor: theme.palette.common.themeBackground
    },
    '& .MuiOutlinedInput-root': {
      height: '45px',
      background: theme.palette.common.backgroundWhite
    },
    '& input': {
      padding: theme.spacing(1.4),
      position: 'relative',
      zIndex: '2'
    },
    '& .MuiIconButton-root': {
      position: 'relative',
      zIndex: '2'
    }
  },
  errorText: {
    color: theme.error,
    fontSize: theme.typography.pxToRem(12)
  }
}));
export default useStyle;
