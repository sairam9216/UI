import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  sendBtn: {
    marginTop: theme.spacing(1.3),
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'column-reverse'
    },
    '& span': {
      marginLeft: 0
    },
    '&.MuiButton-sizeLarge.MuiButton-root': {
      height: 'unset',
      maxHeight: 99,
      [theme.breakpoints.down('sm')]: {
        order: '2'
      }
    }
  },
  usersList: {
    width: 'calc(100% - 110px)',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  fieldLabel: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(14),
    fontFamily: theme.typography.fontFamily
  },
  noBgField: {
    // borderBottom: `1px solid ${theme.palette.common.secondaryBtnColor}`,
    '& *, .MuiOutlinedInput-root, .MuiInputBase-input': {
      background: 'none',
      border: 'none'
    },
    '& .MuiInputBase-input': {
      borderBottom: `1px solid ${theme.palette.common.secondaryBtnColor}`,
      borderRadius: 0,
      padding: theme.spacing(1)
    }
  }
}));

export default useStyles;
