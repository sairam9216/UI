import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
    background: theme.palette.common.tableHeadingBackground
  },
  pageTitle: {
    color: theme.palette.primary.textColor,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(24),
    lineHeight: theme.typography.pxToRem(28),
    marginBottom: theme.spacing(0.5)
  },
  pageSubtitle: {
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(14)
  },
  projectContent: {
    marginTop: theme.spacing(-6),
    paddingBottom: theme.spacing(3)
  },
  linkText: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(16),
    marginBottom: theme.spacing(1.5)
  }
}));

export default useStyles;
