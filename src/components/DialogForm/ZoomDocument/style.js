import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  copyTitle: {},
  docName: {
    color: theme.palette.primary.main
  },
  icon: {
    color: theme.palette.primary.main
  },
  zoomModal: {
    '& .closeIcon': {
      width: '1.263rem',
      height: '1.263rem',
      background: theme.palette.primary.textColor,
      color: theme.palette.common.textWhite,
      borderRadius: theme.spacing(3),
      padding: theme.spacing(0.4),
      marginLeft: 'auto'
    }
  },
  iframeWrap: {
    // border: `1px solid ${theme.palette.secondary.gradient}`,
    // '& iframe': {
    //   width: '100%'
    // },
    position: 'relative',
    // paddingTop: '56.25%', // 16:9
    paddingTop: '75%', // 4:3
    height: '0',
    border: `1px solid ${theme.palette.secondary.gradient}`,
    '& iframe': {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%'
    }
  }
}));

export default useStyle;
