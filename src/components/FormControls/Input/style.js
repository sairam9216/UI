import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  helperText: {
    '&.MuiFormHelperText-root': {
      lineHeight: '0.75rem',
      marginLeft: theme.spacing(0)
    }
  },
  fieldRow: {
    marginTop: theme.spacing(2),
    '&:first-child': {
      marginTop: theme.spacing(0)
    }
  },
  inputLabel: {
    '&.MuiInputLabel-root': {
      marginBottom: theme.spacing(0.5),
      color: theme.palette.common.themeFontColor,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(14),
      fontFamily: theme.typography.fontFamily
    }
  },
  labelAsterisk: {
    color: theme.error
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
      background: theme.palette.common.fieldBackground
    },
    '& .MuiInputBase-input': {
      background: theme.palette.common.fieldBackground
    },
    '& .MuiSvgIcon-root': {
      color: theme.palette.primary.main
    }
  },
  input: {
    color: theme.palette.common.fontColorLightBlack,
    padding: theme.spacing(1.6),
    background: theme.palette.common.fieldBackground,
    borderRadius: theme.spacing(0.5),
    fontSize: theme.typography.pxToRem(14)
  },
  textArea: {
    color: theme.palette.common.fontColorLightBlack,
    background: theme.palette.common.backgroundWhite,
    borderRadius: theme.spacing(0.5),
    fontSize: theme.typography.pxToRem(14)
  },
  selectMenu: {
    backgroundColor: theme.backgroundColorPrimary,
    color: theme.palette.common.black,
    boxShadow: theme.shadows
  }
}));
export default useStyle;
