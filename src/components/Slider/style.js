import { makeStyles } from '@mui/styles';

const useStyle = makeStyles((theme) => ({
  customSlider: {
    margin: theme.spacing(0, -1),
    '&.dotSLider': {
      paddingBottom: theme.spacing(2)
    },
    // same height
    '& .slick-track': {
      display: 'flex !important',
      marginLeft: theme.spacing(0)
    },
    '& .slick-slide': {
      height: 'inherit !important'
    },
    '& .slick-slide > div > div': {
      height: '100%'
    },
    '& .slick-slide > div': {
      height: '100%'
    },
    // Dots
    '& .slick-dots': {
      '& li': {
        cursor: 'unset',
        '&.slick-active': {
          '& button': {
            background: theme.palette.primary.main
          }
        }
      },
      '& button': {
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: '50%',
        width: '10px',
        height: '10px',
        position: 'relative',
        background: theme.palette.common.tableHeadingBackground,
        '&:before': {
          display: 'none'
        }
      }
    },
    '& .slick-prev': {
      left: '-5px',
      width: '30px',
      height: '30px',
      zIndex: '3',
      background: '#fff',
      borderRadius: '50%',
      border: '1px solid #DFDFDF',
      [theme.breakpoints.down('sm')]: {
        left: '0'
      },
      '&:before': {
        fontSize: 0,
        width: '7px',
        height: '7px',
        border: `1px solid ${theme.palette.primary.main}`,
        content: '',
        display: 'inline-block',
        transform: 'rotate(45deg)',
        borderRight: 'transparent',
        borderTop: 'transparent',
        marginLeft: '3px'
      }
    },
    '& .slick-next': {
      right: '-5px',
      width: '30px',
      height: '30px',
      zIndex: '3',
      background: '#fff',
      borderRadius: '50%',
      border: '1px solid #DFDFDF',
      [theme.breakpoints.down('sm')]: {
        right: '0'
      },
      '&:before': {
        fontSize: 0,
        width: '7px',
        height: '7px',
        border: `1px solid ${theme.palette.primary.main}`,
        content: '',
        display: 'inline-block',
        transform: 'rotate(45deg)',
        borderLeft: 'transparent',
        borderBottom: 'transparent',
        marginRight: '3px'
      }
    }
  }
}));

export default useStyle;
