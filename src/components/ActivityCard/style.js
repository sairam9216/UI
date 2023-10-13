import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  activityUser: {
    padding: theme.spacing(2, 0),
    margin: theme.spacing(0, 3),
    borderBottom: `1px solid ${theme.palette.common.tableHeadingBackground}`,
    wordBreak: 'break-all',
    '&:last-child': {
      border: 'none'
    }
  },
  activityUserProfile: {
    width: '30px',
    height: '30px',
    overflow: 'hidden'
  },
  activityImage: {
    objectFit: 'cover',
    width: ' 100%',
    height: '100%'
  },
  activityUserDescription: {
    paddingLeft: theme.spacing(1.5),
    width: 'calc(100% - 30px)'
  },
  activityUserName: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(0.7),
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(16)
  },
  activityUserStatus: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(12)
  }
}));

export default useStyles;
