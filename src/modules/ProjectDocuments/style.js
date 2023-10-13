import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    historSidebar: {
      width: '300px'
    },
    mainProductContainer: {
      background: theme.palette.common.themeBackgroundLight,
      minHeight: 'calc(100vh - 126px)',
      '& .documentBrowse': {
        minHeight: '18rem'
      }
    },
    projectHeader: {
      background: theme.palette.common.backgroundWhite,
      padding: theme.spacing(2),
      borderRadius: theme.spacing(1),
      position: 'relative',
      zIndex: '2',
      boxShadow: '0px 0px 3px -1px rgba(0,0,0,0.29)'
    },
    themeBackground: {
      background: theme.palette.common.backgroundWhite
    },
    headerWrapper: {
      paddingTop: theme.spacing(3.4),
      position: 'relative',
      '&:after': {
        position: 'absolute',
        content: '""',
        background: theme.palette.common.tableHeadingBackground,
        height: '14rem',
        top: 0,
        left: 0,
        width: '100%'
      }
    },
    projectDocumentContent: {
      padding: theme.spacing(2.5, 3),
      '&.MuiPaper-root': {
        width: '100%',
        borderRadius: theme.spacing(0.5),
        boxShadow: 'none',
        border: `1px solid ${theme.palette.common.tableHeadingBackground}`
      }
    },
    tabContainer: {
      flexGrow: 1,
      backgroundColor: theme.palette.common.backgroundWhite,
      '& .MuiTabs-indicator': {
        display: 'none'
      }
    },
    style: {
      backgroundColor: theme.palette.common.backgroundWhite,
      color: 'black',
      textAlign: 'center',
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: '14px',
      border: '2px solid #F4F4F4',
      textTransform: 'none',
      padding: '15px 32px',
      '&.Mui-selected': {
        color: 'white',
        backgroundColor: theme.palette.primary.main
      }
    },
    // Top doc Section
    projectDetail: {
      paddingBottom: theme.spacing(1)
    },
    topFlexItem: {
      minHeight: '10.938rem'
    },
    linkText: {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: theme.typography.pxToRem(16),
      marginBottom: theme.spacing(1.5),
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    pageTitle: {
      fontSize: theme.typography.pxToRem(24),
      lineHeight: theme.typography.pxToRem(30),
      marginBottom: theme.spacing(0.5)
    },
    pageDescription: {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(20),
      color: theme.palette.secondary.main,
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(0, 0, 1, 0),
        width: '100%'
      }
    },
    flexWrap: {
      [theme.breakpoints.down('sm')]: {
        flexWrap: 'wrap'
      }
    },
    infoTop: {
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('sm')]: {
        marginBottom: '0'
      }
    },
    projectLabelRow: {
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        flexWrap: 'wrap',
        marginBottom: theme.spacing(1)
      }
    },
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
    addMember: {
      maxWidth: 'calc(100% - 120px)',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%'
      }
    },
    valueLabel: {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(20),
      color: theme.palette.primary.textColor,
      textTransform: 'capitalize'
    },
    changeText: {
      fontSize: theme.typography.pxToRem(14),
      lineHeight: theme.typography.pxToRem(20),
      color: theme.palette.common.linkColor,
      marginLeft: theme.spacing(0.8),
      cursor: 'pointer'
    },
    createBtn: {
      paddingBottom: theme.spacing(2)
    },
    labelSection: {
      paddingTop: theme.spacing(4)
    },
    docName: {
      color: theme.palette.common.linkColor
    },
    documentListCard: {
      // minWidth: '230px',
      // maxWidth: '230px',
      // width: '100%'
      // marginRight: theme.spacing(3),
      // marginBottom: theme.spacing(3)
    },
    documentSection: {
      marginTop: theme.spacing(3)
      // padding: theme.spacing(3, 2.5, 2, 2.5),
      // paddingTop: theme.spacing(3),
      // borderRadius: theme.spacing(1)
    },
    borderRight: {
      borderRight: `1px solid ${theme.palette.primary.borderPrimary}`
    },
    slickCustom: {
      '& .slick-list': {
        // paddingBottom: theme.spacing(2)
      }
    },
    titleSection: {
      margin: theme.spacing(3, 0)
    },
    searchForm: {
      '& .MuiInputBase-formControl': {
        backgroundColor: '#fff'
      },
      '& .MuiInputBase-inputTypeSearch': {
        backgroundColor: '#fff',
        fontSize: theme.typography.pxToRem(16),
        width: 250
      }
    },
    sectionTitle: {
      color: theme.palette.primary.textColor,
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: theme.typography.pxToRem(20),
      lineHeight: theme.typography.pxToRem(20),
      marginBottom: theme.spacing(1)
    },
    sectionSubTitle: {
      color: theme.palette.primary.textColor,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: theme.typography.pxToRem(20)
    },
    wrapUnset: {
      flexWrap: 'unset'
    },
    viewIcon: {
      width: 36,
      height: 36,
      padding: theme.spacing(0.75),
      borderRadius: theme.spacing(0.5),
      '&:not(:last-child)': {
        margin: theme.spacing(0, 1)
      },
      background: theme.palette.common.backgroundWhite
    },
    activeItem: {
      border: '1px solid #007CFF',
      '& svg': {
        color: '#007CFF'
      }
    },
    selectedCard: {
      backgroundColor: theme.palette.common.themeBackgroundLight,
      padding: 5,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10
    },
    iconWithTitle: {
      display: 'flex',
      marginBottom: 8,
      '& p': {
        marginLeft: theme.spacing(0.8)
      }
    },
    addDocumentContainer: { paddingTop: 10, paddingBottom: 10 },
    browseBoxContainer: { width: '15.625rem', height: '20.454rem' },
    selectedBoxContainer: {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      border: `1px solid #007CFF`,
      paddingTop: 12,
      paddingBottom: 10,
      borderBottomColor: '#F4F6FA',
      backgroundColor: '#F4F6FA',
      marginBottom: -1
    },
    existingContainer: { paddingTop: 10, paddingBottom: 10, paddingLeft: 15 }
  };
});

export default useStyle;
