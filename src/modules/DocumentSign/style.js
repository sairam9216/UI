import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    sideBar: {
      borderRight: `1px solid ${theme.palette.common.borderColor}`,
      background: theme.palette.common.backgroundCard
    },
    sidebarIcon: {
      minWidth: '2.25rem'
    },
    documentBox: {
      minHeight: 'calc(100vh - 126px)',
      overflow: 'auto',
      border: `1px solid ${theme.palette.common.borderColor}`
    }
  };
});

export default useStyle;
