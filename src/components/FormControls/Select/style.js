import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  helperText: {
    '&.MuiFormHelperText-root': {
      lineHeight: 0.66,
      marginLeft: theme.spacing(0)
    }
  },
  inputLabel: {
    '&.MuiInputLabel-root': {
      marginBottom: theme.spacing(0.8),
      color: theme.palette.common.themeFontColor,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(18),
      fontFamily: theme.typography.fontFamily
    }
  },
  fieldRow: {
    marginTop: theme.spacing(2),
    '&:first-child': {
      marginTop: theme.spacing(0)
    }
  },
  labelAsterisk: {
    color: theme.error
  },
  selectField: {
    fontSize: theme.typography.pxToRem(14),
    '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      fontSize: theme.typography.pxToRem(10),
      borderColor: theme.palette.common.tableHeadingBackground,
      borderRadius: 4,
      borderWidth: '1px'
    },
    '& .MuiSelect-select': {
      padding: theme.spacing(1.5),
      color: theme.palette.secondary.main
    }
  },
  selectMenu: {
    backgroundColor: theme.backgroundColorPrimary,
    color: theme.palette.common.black,
    boxShadow: theme.shadows,
    '& ul': {
      padding: theme.spacing(0),
      '& li': {
        minHeight: 'auto',
        padding: theme.spacing(1),
        fontSize: theme.typography.pxToRem(14),
        color: theme.palette.secondary.main,
        '&.Mui-selected': {
          backgroundColor: theme.palette.common.secondaryBtnColor,
          color: theme.palette.primary.main
        }
      }
    }
  },
  textField: {
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
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
    '& input::placeholder': {
      fontSize: theme.typography.pxToRem(14)
    }
  }
}));
export default useStyles;
