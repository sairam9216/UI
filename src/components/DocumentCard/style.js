import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    documentCard: {
      borderRadius: theme.spacing(1),
      border: `1px solid ${theme.palette.common.tableHeadingBackground}`,
      background: theme.palette.common.cardBackground,
      overflow: 'hidden',
      '&:hover': {
        borderColor: theme.palette.primary.main,
        '& .cardImage': {
          '&::before': {
            opacity: '1'
          }
        },
        '& .iconWrapper': {
          opacity: '1'
        }
      },
      '& .cardImage': {
        background: theme.palette.common.backgroundWhite,
        '&::before': {
          position: 'absolute',
          content: `''`,
          inset: '0',
          width: '100%',
          height: '100%',
          background: theme.palette.primary.gradient,
          opacity: '0'
        },
        '& img': {
          objectFit: 'cover',
          display: 'block',
          margin: 'auto'
        }
      },
      '& .cardDescription': {
        padding: theme.spacing(1.5, 2)
      },
      '& .docTitle': {
        fontSize: theme.typography.pxToRem(16),
        color: theme.palette.primary.textColor
      },
      '& .subTitle': {
        fontSize: theme.typography.pxToRem(14),
        color: theme.palette.secondary.main
      },
      '& .generateBtn': {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        transition: '0.2s ease',
        color: theme.palette.common.textWhite,
        zIndex: '2',
        [theme.breakpoints.down('sm')]: {
          opacity: '1'
        },
        '&:hover': {
          opacity: '1'
        }
      }
    },
    emptyCard: {
      background: theme.palette.common.textWhite
    },
    iconButton: {
      color: theme.palette.common.textWhite,
      width: '2.5rem',
      height: '2.5rem',
      borderRadius: theme.spacing(5),
      background: theme.palette.primary.main,
      margin: theme.spacing(0.5),
      flexShrink: '0'
    },
    iconWrapper: {
      position: 'absolute',
      right: theme.spacing(1),
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      transition: '0.2s ease',
      zIndex: '2',
      opacity: '0'
    },
    docListImage: {
      border: `1px solid ${theme.palette.common.cardBackground}`,
      padding: theme.spacing(0.5),
      borderRadius: theme.spacing(0.5),
      flexShrink: '0',
      maxHeight: theme.typography.pxToRem(70),
      maxWidth: '3.2rem',
      [theme.breakpoints.down('sm')]: {
        maxHeight: theme.typography.pxToRem(115),
        maxWidth: '5.3rem'
      }
    },
    docLabel: {
      fontSize: theme.typography.pxToRem(12),
      color: theme.palette.secondary.main
    },
    docListDesc: {
      fontSize: theme.typography.pxToRem(14),
      color: theme.palette.primary.textColor,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.pxToRem(12)
      }
    },
    // Detail Modal
    label: {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(20),
      color: theme.palette.secondary.main,
      minWidth: '120px',
      marginRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(0.3)
      }
    },
    description: {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(20),
      color: theme.palette.secondary.main,
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(0, 0, 1, 0),
        width: '100%'
      }
    }
  };
});

export default useStyle;
