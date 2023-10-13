import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    tableBox: {
      backgroundColor: theme.palette.common.backgroundWhite,
      borderRadius: theme.spacing(0.5),
      border: `1px solid ${theme.palette.common.tableHeadingBackground}`,
      marginBottom: theme.spacing(2.5),
      '&:last-child': {
        marginBottom: 0
      }
    },
    tableCell: {
      '&.MuiTableCell-root': {
        fontWeight: theme.typography.fontWeightMedium,
        padding: theme.spacing(1, 2),
        color: theme.palette.common.themeFontColor,
        fontFamily: theme.typography.fontFamily
      }
    },
    tableHeader: {
      background: theme.palette.primary.background
    },
    cellContent: {
      padding: theme.spacing(2),
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      color: theme.palette.secondary.main,
      lineHeight: '1.125rem'
    },
    stripeBg: {
      '&:nth-child(even)': {
        background: theme.palette.common.themeBackground
      }
    },
    noData: {
      '&.MuiBox-root': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50px'
      }
    },
    iconButton: {
      '&.MuiButtonBase-root': {
        '&:hover': {
          backgroundColor: 'inherit'
        }
      }
    },
    menuItem: {
      backgroundColor: 'red'
    },
    selectDropdown: {
      backgroundColor: 'red',
      color: 'red'
    },
    cardWrap: {
      '&:last-child': {
        marginBottom: 0
      }
    }
  };
});

export default useStyle;
