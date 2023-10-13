import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  closeIcon: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  linkbutton: {
    background: theme.palette.common.linkColorExtra,
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(0.5),
    color: theme.palette.common.textWhite
  },
  emailInner: {
    fontSize: theme.typography.pxToRem(15)
  },
  linkText: {
    color: theme.palette.common.linkColorExtra
  },
  bargainingText: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.common.linkColor
  },
  tableText: {
    background: theme.palette.common.linkColor,
    padding: theme.spacing(0.5, 1.5),
    borderRadius: theme.spacing(0.5),
    color: theme.palette.common.textWhite
  }
}));

export default useStyle;
