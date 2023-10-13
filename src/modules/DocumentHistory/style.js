import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    handleBg: {
      background: '#555'
    },
    cardInner: {
      borderWidth: 1,
      // borderColor: cardBorderColor,
      borderStyle: 'solid',
      padding: 8,
      width: 130,
      background: 'white',
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)'
    },
    uname: {
      fontSize: theme.typography.pxToRem(10),
      fontWeight: theme.typography.fontWeightMedium,
      marginTop: theme.spacing(0.5)
    },
    toName: {
      fontSize: theme.typography.pxToRem(10),
      marginTop: theme.spacing(0.5),
      color: '#51596C'
    },
    dateText: {
      fontWeight: '400',
      fontSize: 8,
      color: '#51596C'
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
    }
  };
});
export default useStyle;
