import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  cardMain: {
    boxShadow: 'unset',
    flexShrink: '0',
    minHeight: '18rem',
    margin: '0 auto',
    padding: theme.spacing(0, 1, 0.5, 1),
    backgroundColor: 'transparent',
    width: '100%',
    transition: '0.2s ease'
    // '&:hover': {
    //   '& .docInfoTop': {
    //     background: theme.palette.common.linkColor
    //   },
    //   '& .docInfoTop > *, & .draftText': {
    //     color: theme.palette.common.textWhite
    //   }
    // }
  },
  cardMainNegotionHistory: {
    minHeight: '22rem'
  },
  docTopCardMain: {
    '&.activeCard': {
      '& .docImgWrap': {
        '&:after': {
          position: 'absolute',
          content: "''",
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 124, 255, 0.25)'
        },
        boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      '& .docInfoTop': {
        // background: theme.palette.common.linkColor
      },
      '& .docInfoTop > *, & .draftText': {
        // color: theme.palette.common.textWhite
      }
    }
  },
  docImgWrap: {
    // boxShadow: '3px 3px 4px rgba(0, 0, 0, 0.25)',
    height: '100%',
    backgroundColor: theme.palette.common.backgroundWhite,
    border: `1px solid ${theme.palette.common.cardBackground}`,
    borderRadius: theme.spacing(0.5),
    overflow: 'hidden',
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
    '&.redBorder': {
      borderColor: theme.palette.common.textOrange
    }
  },
  docImg: {
    width: '100%',
    minWidth: 200,
    display: 'block'
  },
  draftText: {
    fontSize: theme.typography.pxToRem(10),
    lineHeight: theme.typography.pxToRem(14),
    color: theme.palette.secondary.main,
    marginLeft: theme.spacing(0.5)
    // marginBottom: theme.spacing(0.5)
  },
  documentTitle: {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightMedium
  },
  docInfoTop: {
    padding: theme.spacing(2.5, 1.5, 1),
    maxWidth: '85%',
    width: '100%',
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
    background: 'rgba(223, 230, 239, 0.85)',
    position: 'absolute',
    minHeight: '9rem',
    top: 0,
    left: theme.spacing(1)
  },
  docInfoBottom: {
    padding: theme.spacing(2.5, 2, 1),
    maxWidth: '90%',
    width: '100%',
    boxShadow: '0px 4px 4px rgb(0 0 0 / 25%)',
    background: theme.palette.common.cardBackground,
    position: 'absolute',
    top: 0,
    left: 0,
    minHeight: '19.5rem',
    opacity: '0.9'
  },
  carListCard: { padding: 0, margin: 0, height: '100%', boxShadow: 'inherit', overflow: 'visible' },
  cardContent: {
    background: theme.palette.common.cardBackground2,
    border: '1px solid #DFDFDF',
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    height: '100%',
    overflow: 'hidden',
    '&.alignCenter': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center'
    },
    '& .copyTemplate': {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      transition: '0.2s ease',
      color: theme.palette.primary.main,
      zIndex: '2'
    },
    '& .actionButtons': {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      transition: '0.2s ease',
      color: theme.palette.primary.main,
      zIndex: '2',
      '& a': {
        color: theme.palette.common.textWhite
      }
    },
    '&.cardContent': {
      padding: theme.spacing(4, 1.5, 1.5)
    }
  },
  docCardContent: {
    background: theme.palette.common.textWhite,
    '&:hover, &.activeDocument': {
      background: theme.palette.common.linkColorExtra,
      '& .activityLabel': {
        color: theme.palette.primary.main
      }
    },
    '&:hover *, &.activeDocument *': {
      color: theme.palette.common.textWhite
    }
  },
  descriptionContainer: {
    minHeight: 200
  },
  previewSection: {
    minHeight: 60
  },
  blankTitle: {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(20),
    wordBreak: 'break-all',
    color: theme.palette.common.themeFontColor,
    fontWeight: theme.typography.fontWeightMedium
  },
  subject: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(18)
  },
  labelText: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(16),
    wordBreak: 'break-all',
    color: theme.palette.common.textGray
  },
  textValue: {
    fontSize: theme.typography.pxToRem(13),
    lineHeight: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.primary.textColor
  },
  readMoreLink: {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(20),
    color: theme.palette.primary.main
  },
  dateTimeParagraph: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: theme.typography.fontWeightRegular,
    lineHeight: theme.typography.pxToRem(18)
  },
  title: {
    marginTop: theme.spacing(1),
    fontSize: theme.typography.pxToRem(16),
    lineHeight: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightMedium
  },
  activityLabel: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    color: theme.palette.common.themeDark,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(14),
    // background: theme.palette.common.cardBackground2,
    // padding: theme.spacing(0.2, 1.5),
    // borderRadius: theme.spacing(2),
    '&.whiteActive': {
      // background: theme.palette.common.backgroundWhite
    }
  },
  listBadge: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(18),
    background: theme.palette.common.textWhite,
    padding: theme.spacing(0.5, 2),
    borderRadius: theme.spacing(2)
  },
  textUnderline: {
    textDecoration: 'underline',
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-line-clamp': '1',
    '-webkit-box-orient': 'vertical',
    marginBottom: 10
  },
  docTitle: {
    fontSize: theme.typography.pxToRem(14),
    lineHeight: theme.typography.pxToRem(20),
    fontWeight: theme.typography.fontWeightMedium,
    marginTop: theme.spacing(1)
  },
  subtitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    color: theme.palette.primary.textColor,
    fontSize: theme.typography.pxToRem(13),
    lineHeight: theme.typography.pxToRem(20)
  },
  messageTitle: {
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
    color: theme.palette.secondary.main,
    fontSize: theme.typography.pxToRem(13),
    lineHeight: theme.typography.pxToRem(18)
  },
  corner: {
    width: 0,
    height: 0,
    borderBottom: `35px solid ${theme.palette.common.cardCorner}`,
    borderLeft: `35px solid ${theme.palette.common.backgroundWhite}`,
    position: 'absolute',
    top: '8px',
    left: '8px',
    borderBottomRightRadius: '8px',
    zIndex: 2
  },
  zoomIcon: {
    position: 'absolute',
    left: theme.spacing(1),
    top: theme.spacing(1),
    transition: '0.2s ease',
    color: theme.palette.primary.main,
    zIndex: '2'
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
  },
  wordBreak: {
    wordBreak: 'break-word'
  },
  otherLabel: {
    padding: theme.spacing(0, 0.5),
    background: theme.palette.common.backgroundWhite,
    borderRadius: theme.spacing(3),
    fontSize: theme.typography.pxToRem(10),
    display: 'inline-block'
  },
  userNameList: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(18),
    '&:hover': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  customTooltip: {
    background: theme.palette.common.backgroundWhite,
    padding: theme.spacing(1),
    color: theme.palette.common.themeDark,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(18),
    '& .MuiTooltip-arrow': {
      color: theme.palette.common.backgroundWhite
    }
  },
  readMore: {
    color: theme.palette.common.linkColorExtra
  },
  textMessage: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(18),
    color: theme.palette.common.textGray
  },
  sharebyText: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(18)
  },
  emailText: {
    color: theme.palette.common.backgroundExtra,
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: theme.typography.pxToRem(12),
    lineHeight: theme.typography.pxToRem(18)
  },
  iconsContainer: {
    textAlign: 'right',
    '& p': {
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(18),
      fontWeight: theme.typography.fontWeightMedium
    }
  }
}));

export default useStyle;
