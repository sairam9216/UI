import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    handleBg: {
      background: '#555',
      position: 'absolute!important'
    },
    cardInner: {
      borderWidth: 1,
      // borderColor: cardBorderColor,
      borderStyle: 'solid',
      padding: 8,
      width: 115,
      height: 165,
      background: theme.palette.common.backgroundWhite,
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
      '& .checkboxLabel': {
        color: theme.palette.common.textGray
      }
    },
    uname: {
      fontSize: theme.typography.pxToRem(8)
      // marginTop: theme.spacing(0.5)
    },
    toName: {
      fontSize: theme.typography.pxToRem(8),
      // marginTop: theme.spacing(0.5),
      color: theme.palette.common.textGray
    },
    dateText: {
      fontWeight: '400',
      fontSize: 8,
      color: theme.palette.common.textGray
    },
    docName: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightMedium,
      marginBottom: theme.spacing(1)
    },
    icons: {
      '& svg': {
        fontSize: theme.typography.pxToRem(13)
      }
    },
    mergeText: {
      color: theme.palette.common.textOrange,
      fontSize: theme.typography.pxToRem(9)
    },
    listOptions: {
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: '3',
      '& .options': {
        background: '#E8ECF4',
        // display: 'none',
        listStyle: 'none',
        position: 'absolute',
        right: 0,
        width: 60,
        top: 20,
        '& li': {
          fontSize: theme.typography.pxToRem(9),
          lineHeight: theme.typography.pxToRem(10),
          padding: theme.spacing(0.5, 0.4),
          '&:hover': {
            background: theme.palette.common.borderDark,
            color: theme.palette.common.textWhite
          }
        }
      }
    },
    otherLabel: {
      padding: theme.spacing(0, 0.5),
      background: theme.palette.common.cardBackground,
      borderRadius: theme.spacing(3),
      fontSize: theme.typography.pxToRem(8),
      display: 'inline-block'
    },
    userNameList: {
      fontSize: theme.typography.pxToRem(10),
      lineHeight: theme.typography.pxToRem(16),
      '&:hover': {
        fontWeight: theme.typography.fontWeightMedium
      }
    }
  };
});
export default useStyle;
