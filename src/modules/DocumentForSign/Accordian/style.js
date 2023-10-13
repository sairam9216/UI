import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    listButton: {
      border: `1px solid ${theme.palette.common.secondaryBtnColor}`
    },
    content: {
      background: '#E8ECF4',
      padding: theme.spacing(2)
    },
    dragItem: {
      marginBottom: theme.spacing(1.3),
      border: `1px solid`,
      borderStyle: 'dashed',
      background: theme.palette.common.backgroundWhite,
      paddingLeft: theme.spacing(1)
    },
    dragIcon: {
      minWidth: 'auto',
      marginTop: 5
    },
    titleDropdown: {
      fontSize: theme.typography.pxToRem(16),
      fontWeight: theme.typography.fontWeightMedium
    },
    subtitleDropdown: {
      fontSize: theme.typography.pxToRem(14)
    },
    dragTitle: {
      '& *': {
        fontSize: theme.typography.pxToRem(14)
      }
    },
    editIcon: {
      marginRight: theme.spacing(1),
      fontSize: theme.typography.pxToRem(16)
    },
    icon: {
      color: theme.palette.common.themeDark
    },
    signHereIcon: {
      marginTop: 5
    }
  };
});

export default useStyle;
