// Material UI
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    notFoundPage: {
      margin: 'auto',
      border: '1px solid gray',
      borderRadius: 20,
      padding: 20
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    contentMsg: {
      '&.MuiTypography-root': {
        fontWeight: theme.typography.h5.fontWeight,
        marginBottom: theme.spacing(2)
      }
    }
  };
});

export default useStyle;
