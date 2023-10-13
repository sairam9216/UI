import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => {
  return {
    heightFull: {
      //height: 'calc(100vh - 125px)',
      height: 1056,
      overflow: 'auto',
      paddingRight: theme.spacing(2),
      '&::-webkit-scrollbar': {
        width: '5px',
        height: '8px',
        background: '#F5F5F5'
      },
      '&::-webkit-scrollbar-track': {
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '10px',
        backgroundColor: '#555',
        '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,.3)'
      }
    },
    sideBar: {
      borderRight: `1px solid ${theme.palette.common.borderColor}`,
      padding: theme.spacing(3, 1, 0)
    },
    pageThumbnail: {
      marginBottom: theme.spacing(2),
      borderRadius: theme.spacing(1),
      '&:last-child': {
        marginBottom: 0
      }
    },
    sidebarTitle: {
      fontSize: theme.typography.pxToRem(14),
      fontWeight: 500,
      marginBottom: theme.spacing(1)
    },
    documentNameTitle: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: 500,
      marginTop: theme.spacing(1.5),
      marginBottom: theme.spacing(1.5)
    },
    pageListImage: {
      borderRadius: theme.spacing(1),
      border: `1px solid ${theme.palette.common.borderColor}`,
      '&.activeThnumb': {
        borderColor: theme.palette.primary.main
      }
    },
    imageFullWidth: {
      width: '100%'
    },
    signContent: {
      border: `1px solid ${theme.palette.common.borderColor}`
      // width: '100%',
      // height: '100%'
    },
    signRightSide: {
      height: '100%',
      '& .MuiInputBase-input': {
        background: theme.palette.common.backgroundWhite
      }
    },
    formBox: {
      padding: theme.spacing(2),
      background: '#E8ECF4',
      marginBottom: theme.spacing(1.5)
    },
    radionBtnContainer: {
      background: theme.palette.common.backgroundWhite,
      borderRadius: theme.spacing(1.5),
      marginBottom: theme.spacing(1.5)
    },
    addSignatory: {
      color: theme.palette.common.linkColor,
      marginTop: theme.spacing(1),
      fontSize: theme.typography.pxToRem(12)
    },
    switcheBox: {
      '& *': {
        fontSize: theme.typography.pxToRem(12)
      }
    },
    signateureText: {
      color: theme.palette.common.borderDark,
      fontSize: theme.typography.pxToRem(24)
    },
    signLabel: {
      position: 'relative',
      // background: theme.palette.common.backgroundWhite,
      '& input': {
        display: 'none',
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        '&:checked': {
          '& + span': {
            background: theme.palette.common.backgroundExtra,
            color: theme.palette.common.textWhite
          }
        }
      },
      '& span': {
        color: '#707070',
        padding: theme.spacing(0.5, 1.5),
        fontSize: theme.typography.pxToRem(12),
        borderRadius: theme.spacing(1.5),
        '&.active': {
          background: theme.palette.common.backgroundExtra,
          color: theme.palette.common.textWhite
        }
      }
    },
    textField: {
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        fontSize: theme.typography.pxToRem(10),
        borderColor: theme.palette.common.tableHeadingBackground,
        borderRadius: 4,
        borderWidth: '1px',
        '&:focus-visible': {
          borderColor: theme.palette.common.themeBackground
        },
        '& .MuiOutLinedInput-input': {
          color: theme.palette.secondary.main
        }
      },
      '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.common.tableHeadingBackground
      },
      '& .Mui-disabled': {
        WebkitTextFillColor: theme.palette.common.themeBackground
      },
      '& .MuiOutlinedInput-root': {
        background: theme.palette.common.backgroundWhite
      },
      '& .MuiInputBase-input': {
        background: theme.palette.common.backgroundWhite,
        padding: theme.spacing(1.4),
        fontSize: theme.typography.pxToRem(12)
      },
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main
      }
    },
    dragCustomField: {
      width: '100%',
      padding: 0,
      verticalAlign: 'middle',
      height: 27,
      '& .MuiInputBase-input': {
        padding: 0,
        fontSize: theme.typography.pxToRem(12),
        fontFamily: theme.typography.fontFamily
      },
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderRadius: 0,
        borderWidth: 0
      }
    },
    removeItem: {
      fontSize: theme.typography.pxToRem(12),
      color: theme.palette.common.textOrange
    },
    dragItem: {
      border: `1px solid #B8860B`,
      background: theme.palette.common.backgroundWhite,
      padding: 3,
      maxWidth: 130,
      height: 25,
      display: '-webkit-box',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '-webkit-line-clamp': '1',
      '-webkit-box-orient': 'vertical',
      backgroundColor: '#FFE186'
    },
    removeDrag: {
      position: 'absolute',
      right: '-10px',
      top: '-10px',
      zIndex: 2
    },
    errorText: {
      fontSize: theme.typography.pxToRem(10),
      color: theme.error
    },
    dragPTitle: {
      display: '-webkit-box',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      '-webkit-line-clamp': '1',
      '-webkit-box-orient': 'vertical',
      wordBreak: 'break-all',
      fontSize: 12
    },
    dragIcon: {
      marginTop: 5
    },
    signHereIcon: {
      marginTop: 5
    }
  };
});

export default useStyle;
