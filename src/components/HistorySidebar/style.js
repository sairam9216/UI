import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  historyInner: {
    padding: theme.spacing(2.5),
    background: theme.palette.common.backgroundWhite,
    maxWidth: '300px',
    width: '100%'
  },
  sidebarHeader: {
    background: theme.palette.common.secondaryBtnColor,
    padding: theme.spacing(1.5)
  },
  sidebarTitle: {
    fontWeight: theme.typography.fontWeightMedium
  },
  sidebarContentInner: {
    padding: theme.spacing(2)
  },
  square: {
    width: '25px',
    height: '25px',
    padding: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '2px',
    border: `1px solid ${theme.palette.common.tableHeadingBackground}`,
    cursor: 'pointer',
    position: 'relative',
    zIndex: '3',
    background: theme.palette.common.backgroundWhite
  },
  line: {
    width: '20px',
    height: '1px',
    marginTop: theme.spacing(1.7),
    background: theme.palette.common.tableHeadingBackground,
    position: 'relative',
    '&.arrowLine': {
      '&:after': {
        content: `''`,
        width: '8px',
        height: '8px',
        display: 'inline-block',
        borderTop: `1px solid ${theme.palette.common.tableHeadingBackground}`,
        borderRight: `1px solid ${theme.palette.common.tableHeadingBackground}`,
        position: 'absolute',
        right: '0',
        top: '50%',
        transform: 'translateY(-50%) rotate(45deg)'
      }
    }
  },
  borderLeft: {
    position: 'relative',
    paddingLeft: theme.spacing(2),
    left: theme.spacing(3),
    transition: '0.5s ease',
    height: '0',
    opacity: '0',
    '&:before': {
      position: 'absolute',
      content: `''`,
      width: theme.spacing(2),
      height: '1px',
      background: theme.palette.common.tableHeadingBackground,
      top: theme.spacing(1.5),
      left: '0'
    },
    '&.activeFirst': {
      left: theme.spacing(0),
      height: 'auto',
      opacity: '1'
    }
  },
  circle: {
    width: '30px',
    height: '30px',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    borderRadius: '50%',
    border: `1px solid ${theme.palette.common.tableHeadingBackground}`,
    background: theme.palette.common.backgroundWhite,
    position: 'relative',
    zIndex: '3',
    padding: theme.spacing(0.6),
    display: 'inline-block',
    '& .MuiSvgIcon-root': {
      width: '100%'
    }
  },
  userWrap: {
    marginLeft: theme.spacing(1)
  },
  userName: {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(18),
    color: theme.palette.primary.main
  },
  userRole: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(16),
    color: theme.palette.secondary.main
  },
  divider: {
    paddingBottom: theme.spacing(3),
    position: 'relative',
    '&:after': {
      width: '1px',
      height: '100%',
      position: 'absolute',
      left: theme.spacing(1.8),
      content: `''`,
      background: theme.palette.common.tableHeadingBackground
    },
    '&:last-child': {
      '&:after': {
        display: 'none'
      }
    }
  }
}));

export default useStyle;
