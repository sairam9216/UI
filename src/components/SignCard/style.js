import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  cardMain: {
    boxShadow: 'unset',
    width: '100%',
    height: '100%',
    padding: theme.spacing(0, 1),
    backgroundColor: 'transparent',
    minHeight: '12.5rem'
  },
  signContent: {
    background: theme.palette.common.themeBackground,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    height: '100%',
    overflow: 'hidden'
  },
  signTitle: {
    marginBottom: theme.spacing(0.6),
    fontSize: theme.typography.pxToRem(11),
    lineHeight: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightMedium,
    wordBreak: 'break-all',
    color: theme.palette.secondary.main
  },
  signSubTitle: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(16),
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(1.5),
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    'white-space': 'initial',
    display: '-webkit-box',
    '-webkit-line-clamp': '4',
    '-webkit-box-orient': 'vertical',
    'word-break': 'break-all'
  },
  dateLabel: {
    color: '#1F2430',
    fontSize: theme.typography.pxToRem(10)
  },
  badgeLabel: {
    color: '#fff',
    backgroundColor: '#f44336',
    borderRadius: 15,
    padding: '2px 4px',
    textAlign: 'center',
    fontSize: 10,
    height: 20
  }
}));

export default useStyle;
