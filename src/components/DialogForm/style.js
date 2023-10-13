import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    padding: `${theme.spacing(1.12, 2)} `,
    fontFamily: theme.typography.fontFamily,
    background: theme.palette.primary.background,
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(1, 2)} `
    }
  },
  headingTxt: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.common.themeBackground,
    fontFamily: theme.typography.fontFamily
  },
  dialogContainer: {
    '& .MuiDialog-container': {
      '& .MuiPaper-root': {
        background: theme.backgroundColorPrimary
      },
      '& .MuiDialogContent-root': {
        [theme.breakpoints.down('sm')]: {
          padding: theme.spacing(2)
        }
      }
    },
    '& .MuiDialogTitle-root': {
      boxShadow: theme.shadows
    }
  },
  modalSizeCustom: {
    maxWidth: '720px',
    '& .MuiDialogContent-root': {
      overflowY: 'hidden'
    }
  },
  dialogHeader: {
    '&.MuiGrid-root': {
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  },
  dialogContent: {
    padding: theme.spacing(3, 3.5)
  },
  closeModalButton: {
    cursor: 'pointer',
    display: 'flex',
    color: theme.palette.common.textWhite
  },
  modalHeader: {
    '& .MuiTypography-root': {
      fontWeight: theme.typography.fontWeightMedium,
      textTransform: 'capitalize',
      color: theme.palette.common.themeFontColor
    }
  },
  dialogAction: {
    display: 'flex',
    '&.MuiGrid-root': {
      margin: theme.spacing(1, 1)
    }
  },
  sendBtn: {
    marginTop: theme.spacing(2)
  },
  modalInner: {
    margin: theme.spacing(2),
    width: '100%'
  }
}));

export default useStyles;
