import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  notificationContent: {
    maxHeight: '25rem',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      width: '5px',
      height: '8px',
      background: '#F5F5F5'
    },
    '&::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
    },
    '&::-webkit-scrollbar-thumb': {
      borderRadius: '10px',
      backgroundColor: '#555',
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)'
    }
  },
  notificationBox: {
    maxWidth: '20.625rem'
  },
  notificationHeader: {
    padding: theme.spacing(2),
    borderBottom: `1px solid ${theme.palette.secondary.gradient}`
  },
  clearAll: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(12)
  },
  listRow: {
    padding: theme.spacing(2),
    '&:hover': {
      background: theme.palette.common.backgroundCard
    }
  },
  title: {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(18),
    color: theme.palette.primary.main
  },
  subtitle: {
    fontSize: theme.typography.pxToRem(13),
    color: theme.palette.secondary.main
  },
  viewAll: {
    padding: theme.spacing(1),
    fontSize: theme.typography.pxToRem(14),
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.main,
    borderTop: `1px solid ${theme.palette.secondary.gradient}`
  }
}));

export default useStyle;
