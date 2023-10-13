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
    scrollBar: {
      paddingBottom: theme.spacing(1.2),
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
        backgroundColor: '#f7f7f7',
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)'
      }
    },
    tableCell: {
      '&.MuiTableCell-root': {
        fontWeight: theme.typography.fontWeightMedium,
        color: theme.palette.common.themeBackground,
        fontFamily: theme.typography.fontFamily,
        borderBottom: 'none',
        fontSize: theme.typography.pxToRem(16),
        lineHeight: theme.typography.pxToRem(26)
      }
    },
    tableHeader: {
      background: theme.palette.primary.background
    },
    iconButton: {
      backgroundColor: '#D9D9D9',
      color: '#000000',
      width: 25,
      height: 25
    },
    accordionCell: {
      paddingTop: 0,
      paddingBottom: 0
    },
    noBorder: {
      borderBottom: 'none'
    },
    sliderDynWidth: {
      maxWidth: 1320,
      marginBottom: 20,
      margin: theme.spacing(0, -1),
      [theme.breakpoints.down('lg')]: {
        maxWidth: 880
      },
      [theme.breakpoints.down('md')]: {
        maxWidth: 660
      },
      [theme.breakpoints.between('sm')]: {
        maxWidth: 600
      }
    },
    // Modal detail card
    fromSection: {
      [theme.breakpoints.up('sm')]: {
        // width: '50%',
        // marginLeft: 'auto'
        width: '100%'
      }
    },
    label: {
      width: 100,
      fontWeight: theme.typography.fontWeightMedium
    },
    description: {
      color: theme.palette.secondary.main,
      fontSize: theme.typography.pxToRem(14)
    },
    borderTop: {
      borderTop: `1px solid ${theme.palette.common.secondaryBtnColor}`
    }
  };
});

export default useStyle;
