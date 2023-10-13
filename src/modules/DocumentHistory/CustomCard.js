/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import { Handle } from 'reactflow';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import useStyles from './style';
import { Box } from '@mui/material';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';

// eslint-disable-next-line react/display-name
export default memo(({ data, id, isConnectable }) => {
  const classes = useStyles();

  let cardBorderColor = '#E8ECF4';
  if (data?.cardType == 'share') {
    cardBorderColor = '#2AAD1B';
  }
  if (data?.cardType == 'redline') {
    cardBorderColor = '#ED4B4B';
  }
  if (data?.cardType == 'compare') {
    cardBorderColor = '#ff0000';
  }
  return (
    <>
      <Handle
        type="target"
        position="top"
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
        className={classes.handleBg}
      />
      <div
        className={classes.cardInner}
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
          <div className="checkbox">
            <input type="checkbox" name="compareCard" htmlFor="compare" />
            <label className="checkboxLabel" id="compare">
              Compare
            </label>
          </div>
          <div className={`singleLine wordBreak ${classes.uname}`}>{data.name}</div>
          <div>
            <p className={`threeLine wordBreak ${classes.toName}`}>
              To: Jane Cooper, Robert Fox, Kristin Watson
            </p>
          </div>
        </div>
        <Box sx={{ mt: 2 }}>
          <div className="d_flex d_flex_content_between">
            <h5 className={`twoLine ${classes.docName}`}>{data.versionLabel}</h5>
            <Box sx={{ ml: 0.5 }} className={`${classes.icons}`}>
              <BorderColorSharpIcon fontSize="small" />
            </Box>
          </div>
          <div className={classes.dateText}>{data?.modified_date}</div>
        </Box>
        {data?.groupId && (
          <div style={{ marginTop: 5 }}>
            <span
              className={`commonIcon d_flex d_flex_align d_flex_content_center pointer`}
              style={{ color: '#007CFF' }}>
              {data?.isExpand ? (
                <KeyboardDoubleArrowUpIcon onClick={() => data.hideNodesGroup(data?.groupId)} />
              ) : (
                <KeyboardDoubleArrowDownIcon onClick={() => data.showNodesGroup(data?.groupId)} />
              )}
            </span>
          </div>
        )}
      </div>
      <Handle
        type="source"
        position="bottom"
        id={'green'}
        style={{ background: '#00ff00', left: '30%' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="bottom"
        id="internal"
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position="bottom"
        id={'compare'}
        style={{ background: '#ff0000', left: '70%' }}
        isConnectable={isConnectable}
      />
    </>
  );
});
