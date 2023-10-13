/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable */

import React, { memo, useState } from 'react';
import { Handle } from 'reactflow';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import useStyles from './style';
import { Box } from '@mui/material';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Tooltip from '@mui/material/Tooltip';
import { DocIcon, MailIcon, SendIcon, CompareIcon } from 'utils/images';
import Popover from '@mui/material/Popover';

import { getFormatedDateWithTime } from 'utils';

// import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
// eslint-disable-next-line react/display-name

export default memo(({ data, id, isConnectable }) => {
  const classes = useStyles();
  // const [isOpenMenu, setIsOpenMenu] = useState(false);
  let cardBorderColor = '#ccc';
  if (data?.cardType == 'Share') {
    cardBorderColor = '#2AAD1B';
  }
  if (data?.cardType == 'Reply' || data?.cardType == 'CompareMerge') {
    cardBorderColor = '#ED4B4B';
  }
  let lineCount = 0;
  if (data?.isDraftLineEnabled) {
    lineCount += 1;
  }

  if (data?.isShareLineEnabled) {
    lineCount += 1;
  }

  if (data?.isCompareLineEnabled) {
    lineCount += 1;
  }

  const renderHandler = () => {
    if (lineCount === 3) {
      return (
        <>
          <Handle
            type="source"
            position="bottom"
            id={'internal'}
            className={classes.handleBg}
            style={{ left: '30%' }}
            isConnectable={isConnectable}
          />
          <Handle
            type="source"
            className={classes.handleBg}
            position="bottom"
            id="Share"
            isConnectable={isConnectable}
          />
          <Handle
            type="source"
            position="bottom"
            id={'Compare'}
            className={classes.handleBg}
            style={{ left: '70%' }}
            isConnectable={isConnectable}
          />
        </>
      );
    } else if (lineCount < 2) {
      return (
        <Handle
          type="source"
          position="bottom"
          id="b"
          className={classes.handleBg}
          isConnectable={isConnectable}
        />
      );
    } else {
      return (
        <>
          {data?.isDraftLineEnabled && (
            <Handle
              type="source"
              position="bottom"
              id={'internal'}
              style={{ left: '30%' }}
              isConnectable={isConnectable}
            />
          )}
          {data?.isShareLineEnabled && (
            <Handle type="source" position="bottom" id="Share" isConnectable={isConnectable} />
          )}
          {data?.isCompareLineEnabled && (
            <Handle
              type="source"
              position="bottom"
              id={'Compare'}
              style={{ left: '70%' }}
              isConnectable={isConnectable}
            />
          )}
        </>
      );
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const getToUsers = (users) => {
    const splitUser = users;
    if (splitUser?.length > 1) {
      return (
        <>
          <p className={`${classes.textValue}`}>
            {splitUser[0]}{' '}
            <span
              className={classes.otherLabel}
              aria-owns={open ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpen}
              onMouseLeave={handlePopoverClose}>
              +{splitUser?.length - 1} {(splitUser?.length === 2)? 'Other' : 'Others'}
            </span>
            <Popover
              id="mouse-over-popover"
              open={open}
              sx={{
                pointerEvents: 'none'
              }}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'left'
              }}>
              <Box sx={{ p: 1.5 }}>
                {splitUser?.slice(1, splitUser?.length)?.map((list, index) => {
                  return (
                    <Box key={index}>
                      <p className={classes.userNameList}>{list}</p>
                    </Box>
                  );
                })}
              </Box>
            </Popover>
          </p>
        </>
      );
    } else {
      return <p className={`${classes.textValue}`}>{splitUser[0] ? splitUser[0] : ''}</p>;
    }
  };

  const getSaveText = (text) => {
    if (text == 'Draft') {
      return 'Last Saved On';
    } else if (text == 'Received') {
      return 'Received On';
    } else if (text == 'Sent') {
      return 'Sent On';
    } else {
      return;
    }
  };

  const getIcon = () => {
    if (data?.activityLabel == 'Draft') {
      return <DocIcon />;
    } else if (data?.activityLabel == 'Received') {
      return <MailIcon />;
    } else if (data?.activityLabel == 'Sent') {
      return <SendIcon />;
    } else if (data?.activityLabel == 'Sign') {
      return <DocIcon />;
    } else if (data?.activityLabel == 'CompareMerge') {
      return <CompareIcon />;
    } else{
      return null;
    }
  };

  return (
    <>
      <Handle
        type="target"
        position="top"
        className={classes.handleBg}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <div
        className={`relative d_flex flex_direction_col d_flex_content_between ${classes.cardInner}`}
        style={{
          borderColor: cardBorderColor
        }}
        onMouseEnter={() => {
          data.onNodeHover(id);
        }}
        onMouseLeave={() => {
          data.onNodeOutHover(id);
        }}>
        <div>
          <Box className={classes.listOptions}>
            {/* <Box className="arrowDown text_right" onClick={() => setIsOpenMenu(!isOpenMenu)}>
              <ArrowDropDownRoundedIcon />
            </Box>
            {isOpenMenu && (
              <ul className="options">
                <li>Add User</li>
                <li>Share</li>
                <li>Delete User</li>
                <li>Delete Doc</li>
              </ul>
            )} */}
          </Box>
          <Box className="d_flex d_flex_content_between">
            <h5 className={`twoLine ${classes.docName}`}>{data.versionLabel}</h5>
            <span>{getIcon()}</span>
          </Box>
          <div className={`singleLine wordBreak ${classes.uname}`}>{data?.userNameLabel}</div>
          <div>
            {/* <Tooltip title={`${data?.toUser}`} arrow> */}
            <p className={`wordBreak ${classes.toName}`}>
              {data?.toUser && `To: `}
              {data?.toUser && getToUsers(data?.toUserArray)}
            </p>
            {/* </Tooltip> */}
          </div>
        </div>

        <Box sx={{ mt: 0.5 }}>
          <Box>
            {data.versionLabelMerge && (
              <h5 className={`oneLine ${classes.docName}`}>
                <span className={classes.mergeText}>({data.versionLabelMerge})</span>
              </h5>
            )}
          </Box>
          {data.isEdit && (
            <div className="checkbox">
              <input
                type="checkbox"
                name="compareCard"
                htmlFor="compare"
                checked={data.isCompareSelected}
                onChange={() => {
                  data.onCompareSelect(data);
                }}
              />
              <label className="checkboxLabel" id="compare">
                Compare
              </label>
            </div>
          )}
          <div className="d_flex d_flex_content_between  d_flex_align">
            <div className={classes.dateText}>
              <label>{getSaveText(data?.activityLabel)}</label>
            </div>
            <Box sx={{ ml: 0.5 }} className={`${classes.icons}`}>
              <Box component="span" sx={{ mr: 0.5 }}>
                {data.isEdit && (
                  <BorderColorSharpIcon
                    onClick={(e) => {
                      data.onEditLink(e, data);
                    }}
                    fontSize="small"
                    style={{ cursor: 'pointer' }}
                  />
                )}
              </Box>
              <Box component="span" sx={{ pl: 0.5 }}>
                {data.isLocked && <LockOutlinedIcon fontSize="small" />}
              </Box>
            </Box>
          </div>
          <div className={classes.dateText}>
            <p> {data?.modifiedDate}</p>
            <p> {data?.modifiedDateTime}</p>
          </div>
        </Box>

        {data?.groupId !== 0 && (
          <div style={{ marginTop: 5 }}>
            <span
              className={`commonIcon d_flex d_flex_align d_flex_content_center pointer`}
              style={{ color: '#007CFF' }}>
              {data?.isExpand === true ? (
                <KeyboardDoubleArrowUpIcon onClick={() => data.hideNodesGroup(data?.groupId)} />
              ) : (
                <KeyboardDoubleArrowDownIcon onClick={() => data.showNodesGroup(data?.groupId)} />
              )}
            </span>
          </div>
        )}
      </div>

      {renderHandler()}
    </>
  );
});
