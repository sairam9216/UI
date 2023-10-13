import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import useStyle from './style';
import { Box } from '@mui/system';
import { CloseOutlined } from '@mui/icons-material';

const HistorySidebar = () => {
  const classes = useStyle();
  const [expanded, setExpanded] = React.useState(false);
  const [innerExpanded, setInnerExpanded] = React.useState(false);

  const expandFirst = (e) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  const expandSecond = (e) => {
    e.stopPropagation();
    setInnerExpanded(!innerExpanded);
  };

  return (
    <div className={classes.historyInner}>
      <Box className={`d_flex d_flex_content_between ${classes.sidebarHeader}`}>
        <h4 className={classes.sidebarTitle}>Document History</h4>
        <span className="pointer">
          <CloseOutlined className={classes.closeModalButton} onClick={close} fontSize="small" />
        </span>
      </Box>
      <ul className={classes.sidebarContentInner}>
        <li className={`d_flex `} onClick={(e) => expandFirst(e)}>
          <span className={`${classes.expand} ${classes.square} `}>
            {expanded ? <RemoveRoundedIcon /> : <AddOutlinedIcon />}
          </span>
          <ul
            className={` ${classes.borderLeft} ${expanded ? 'activeFirst' : ''}`}
            onClick={(e) => e.stopPropagation()}>
            <li className={`d_flex ${classes.divider}`}>
              <div className={`d_flex`}>
                <span className={` ${classes.circle}  `}>
                  <ModeEditOutlineOutlinedIcon fontSize="small" />
                </span>
                <span className={`${classes.line} arrowLine`}></span>
              </div>
              <Box className={classes.userWrap}>
                <p className={classes.userName}>Tom Jesper</p>
                <p className={classes.userRole}>Document Creator</p>
              </Box>
            </li>
            <li className={`d_flex ${classes.divider}`}>
              <div className={`d_flex`}>
                <span className={` ${classes.circle}  `}>
                  <ChatOutlinedIcon fontSize="small" />
                </span>
                <span className={`${classes.line} arrowLine`}></span>
              </div>
              <Box className={classes.userWrap}>
                <p className={classes.userName}>Tom Jesper</p>
                <p className={classes.userRole}>Document Creator</p>
              </Box>
            </li>
            <li className={`d_flex ${classes.divider}`}>
              <div className={`d_flex`}>
                <span className={` ${classes.circle}  `}>
                  <ModeEditOutlineOutlinedIcon fontSize="small" />
                </span>
                <span className={`${classes.line} arrowLine`}></span>
              </div>
              <Box className={classes.userWrap}>
                <p className={classes.userName}>Tom Jesper</p>
                <p className={classes.userRole}>Document Creator</p>
              </Box>
            </li>
            <li className={`d_flex ${classes.divider}`} onClick={(e) => expandSecond(e)}>
              <span className={`${classes.expand} ${classes.square} `}>
                {innerExpanded ? <RemoveRoundedIcon /> : <AddOutlinedIcon />}
              </span>
              <ul
                className={` ${classes.borderLeft} ${innerExpanded ? 'activeFirst' : ''}`}
                onClick={(e) => e.stopPropagation()}>
                <li className={`d_flex ${classes.divider}`}>
                  <div className={`d_flex`}>
                    <span className={` ${classes.circle}  `}>
                      <ShareOutlinedIcon fontSize="small" />
                    </span>
                    <span className={`${classes.line} arrowLine`}></span>
                  </div>
                  <Box className={classes.userWrap}>
                    <p className={classes.userName}>Tom Jesper</p>
                    <p className={classes.userRole}>Document Creator</p>
                  </Box>
                </li>
                <li className={`d_flex ${classes.divider}`}>
                  <div className={`d_flex`}>
                    <span className={` ${classes.circle}  `}>
                      <VisibilityOutlinedIcon fontSize="small" />
                    </span>
                    <span className={`${classes.line} arrowLine`}></span>
                  </div>
                  <Box className={classes.userWrap}>
                    <p className={classes.userName}>Tom Jesper</p>
                    <p className={classes.userRole}>Document Creator</p>
                  </Box>
                </li>
              </ul>
            </li>
            <li className={`d_flex ${classes.divider}`}>
              <div className={`d_flex`}>
                <span className={` ${classes.circle}  `}>
                  <ModeEditOutlineOutlinedIcon fontSize="small" />
                </span>
                <span className={`${classes.line} arrowLine`}></span>
              </div>
              <Box className={classes.userWrap}>
                <p className={classes.userName}>Tom Jesper</p>
                <p className={classes.userRole}>Document Creator</p>
              </Box>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default HistorySidebar;
