import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    headerWrapper: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
      background: theme.palette.common.tableHeadingBackground
    },
    pageTitle: {
      color: theme.palette.primary.textColor,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(24),
      lineHeight: theme.typography.pxToRem(28),
      marginBottom: theme.spacing(0.5)
    },
    sectionTitle: {
      color: theme.palette.primary.textColor,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(24),
      lineHeight: theme.typography.pxToRem(28),
      marginBottom: theme.spacing(2)
    },
    pageSubtitle: {
      color: theme.palette.secondary.main,
      fontSize: theme.typography.pxToRem(14)
    },
    projectContent: {
      paddingBottom: theme.spacing(3)
    },
    docListViewWrap: {
      border: `1px solid ${theme.palette.common.cardBackground}`,
      borderRadius: theme.spacing(1),
      marginTop: theme.spacing(2)
    },
    titleSection: {
      margin: theme.spacing(3, 0)
    },
    listBorderBottom: {
      borderBottom: `1px solid ${theme.palette.common.cardBackground}`,
      '&:last-child': {
        border: 'none'
      }
    },
    wrapUnset: {
      flexWrap: 'unset'
    },
    linkText: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(16),
      marginBottom: theme.spacing(1.5)
    },
    viewIcon: {
      border: `1px solid ${theme.palette.common.tableHeadingBackground}`,
      padding: theme.spacing(1),
      borderRadius: theme.spacing(0.5),
      '&:not(:last-child)': {
        margin: theme.spacing(0, 1)
      }
    },
    activeItem: {
      background: theme.palette.common.tableHeadingBackground
    }
  };
});

export default useStyle;
