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
    marginBottom: theme.spacing(1),
    position: 'relative',
    '&:first-child': {
      marginTop: theme.spacing(0)
    }
  },
  addIcon: {
    position: 'absolute',
    top: '0',
    right: '0',
    background: theme.palette.primary.main,
    color: theme.palette.common.textWhite,
    borderRadius: theme.spacing(5)
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
    flexGrow: '1',
    borderRight: `1px solid ${theme.palette.common.tableHeadingBackground}`,
    '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      fontSize: theme.typography.pxToRem(10),
      borderColor: theme.palette.common.tableHeadingBackground,
      borderRadius: 4,
      borderWidth: '0',
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
  addItem: {
    background: theme.palette.common.fieldBackground,
    padding: theme.spacing(1.3, 2)
  },
  errorText: {
    color: theme.error,
    fontSize: theme.typography.pxToRem(12)
  },
  itemRow: {
    border: `1px solid ${theme.palette.common.tableHeadingBackground}`,
    borderRadius: theme.spacing(0.5),
    marginTop: 10
  },
  chipItem: {
    margin: `0 5px 5px 0 !important`,
    '& .MuiChip-root': {
      margin: (0, 0.5, 0.5, 0)
    }
  }
}));
export default useStyle;
