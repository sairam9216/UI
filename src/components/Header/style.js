import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  headerLeft: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1
  },
  headerLogo: {
    fontSize: '1.25rem',
    color: theme.palette.common.themeDark
  },
  tableBtn: {
    margin: theme.spacing(0, 3, 0, 0.8),
    '& label': {
      padding: theme.spacing(0.5, 1.5),
      background: theme.palette.primary.main,
      borderRadius: theme.spacing(0.6),
      color: theme.palette.common.textWhite
    }
  },
  btnDark: {
    background: theme.palette.common.themeDark,
    '&.MuiButton-root': {
      background: theme.palette.common.themeDark
    }
  },
  devTxt: {
    margin: '0 auto',
    '& p': {
      color: 'red',
      fontWeight: 'bold'
    }
  },
  NotificationIcon: {
    paddingRight: theme.spacing(2)
  },
  MenubarIcon: {
    color: theme.palette.primary.main
  },
  SidebarIcon: {
    minWidth: theme.spacing(4)
  },
  headerAppBar: {
    backgroundColor: theme.palette.common.headerBgColor,
    padding: theme.spacing(0.4, 0),
    boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.02)'
  }
}));

export default useStyle;
