/* eslint-disable */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Box, Tooltip } from '@mui/material';
import useStyle from './style';
import { getFormatedDateWithTime } from 'utils';
import { useTranslation } from 'react-i18next';
import cardBg from './cardBg.png';
import { DocIcon, MailIcon, SendIcon, CompareIcon } from 'utils/images';
import Popover from '@mui/material/Popover';
import DocumentLockIcon from 'assets/images/document_lock_icon';
import DocumentEditIcon from 'assets/images/document_edit_icon';
const ShareDocumentInfoCard = ({
  historyInfo,
  documentListClick,
  openMail,
}) => {
  const classes = useStyle();
  const { t } = useTranslation();
  const [tooltipshow, setToolTipShow] = useState(true)

  const characterLimit = (message, limit) => {
    if (limit < message.length) {
      let limitMessage = message.substring(0, limit);
      return limitMessage;
    } else {
      return message;
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
              +{splitUser?.length - 1} {splitUser?.length === 2 ? 'Other' : 'Others'}
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
      return <p className={`wordwrap ${classes.textValue}`}>{splitUser[0] ? splitUser[0] : ''}</p>;
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

  return (
    <Card
      className={`relative pointer ${classes.cardMain} ${classes.carListCard} ${classes.cardMainNegotionHistory}`}
      onClick={(e) => {
        if (historyInfo.isSignatureCard && historyInfo.pdfurl) {
          window.open(historyInfo.pdfurl, '_blank');
        } else {
          documentListClick(e, historyInfo?.driveItemID, historyInfo?.documentActionUserID);
        }
      }}>
      <Box
        className={`${classes.docImgWrap} 
        ${
          historyInfo?.cardType == 'Reply' || historyInfo?.cardType == 'CompareMerge'
            ? 'redBorder'
            : ''
        }
        `}>
        <img
          src={historyInfo?.thumbnail ? historyInfo?.thumbnail : cardBg}
          alt="document"
          height="340"
          className={classes.docImg}
        />
      </Box>
      <Box className={`d_flex d_flex_content_between flex_direction_col ${classes.docInfoBottom}`}>
        <Box>
          <Box style={{position: 'absolute', right: 10, top: 10}}>
            <span>
              {historyInfo?.activityLabel == 'Draft' ? <DocIcon /> : ''}
              <label onClick={(e) => e.stopPropagation()}>
                {historyInfo?.activityLabel == 'Received' ? (
                  <>
                  {tooltipshow ? (
                    <Tooltip
                    classes={{ tooltip: classes.customTooltip }}
                    arrow
                    title={
                      <Box className={classes.tooltipInner}>
                        <Box component="p" sx={{ mb: 1.2, width: 200 }} className={classes.textMessage}>
                          {characterLimit(historyInfo?.message,50)}
                          <span className={`pointer ${classes.readMore}`} onClick={() => {
                            openMail(historyInfo);
                            setToolTipShow(false);
                            setTimeout(()=>{
                              setToolTipShow(true);
                            },200)
                          }}> Read More...</span>
                        </Box>
                        <Box component="p" className={classes.sharebyText}>
                          Shared by {historyInfo?.fromUser}
                        </Box>
                        <Box component="p" className={`link ${classes.emailText}`}>
                        {historyInfo?.fromUserEmail}
                        </Box>
                      </Box>
                    }
                    placement="top">
                    <span className={`pointer`}>
                      <MailIcon />
                    </span>
                  </Tooltip>
                  ):(
                    <span className={`pointer`}>
                    <MailIcon />
                  </span>
                  )}
                  </>
                ) : (
                  ''
                )}
              </label>
              {historyInfo?.activityLabel == 'Sent' ? <SendIcon /> : ''}
              {historyInfo?.activityLabel == 'Sign' ? <DocIcon /> : ''}
              {historyInfo?.activityLabel == 'CompareMerge' ? <CompareIcon /> : ''}
            </span>
          </Box>
          {historyInfo.isLocked === false && historyInfo.isSignatureCard === false && (
            <p className={`${classes.activityLabel} whiteActive`}>{historyInfo.usernameLabel}</p>
          )}
          {!historyInfo.fromUser && !historyInfo.toUser ? <p className={classes.subtitle}></p> : ''}

          {historyInfo.isSignatureCard && (
            <span className={`${classes.activityLabel} whiteActive`}>Signed</span>
          )}
          {historyInfo.fromUser && (
            <Box sx={{ mb: 0.5 }}>
              <label className={classes.labelText}>From :</label>
              <p className={`singleLine ${classes.textValue}`}>{historyInfo.fromUser}</p>
            </Box>
          )}
          {historyInfo.toUser && (
            <Box sx={{ mb: 0.5 }}>
              <label className={classes.labelText}>To :</label>
              {getToUsers(historyInfo.toUserArray)}
            </Box>
          )}
          {historyInfo?.subject && (
            <Box sx={{ mb: 0.5 }}>
              <label className={classes.labelText}>Subject : </label>
              <p className={`twoLine ${classes.textValue} ${classes.wordBreak}`}>
                {historyInfo.subject}
              </p>
            </Box>
          )}
        </Box>
        <Box className={`d_flex d_flex_content_between flex_direction_col`}>
          <Box className={`d_flex d_flex_content_between`}>
            <Box>
              <label className={classes.labelText}>{getSaveText(historyInfo?.activityLabel)}</label>
              <Box>
                <p className={classes.textValue}>
                  {getFormatedDateWithTime(historyInfo.activityDate, 'MMMM Do YYYY')}
                </p>
                <p className={classes.textValue}>
                  {getFormatedDateWithTime(historyInfo.activityDate, 'hh:mm a')}
                </p>
              </Box>
            </Box>
            <Box sx={{ ml: 0.5 }} className={`${classes.iconsContainer}`}>
              <p>{historyInfo.versionLabel}</p>
              <Box component="span" sx={{ mr: 0.5 }}>
               <DocumentEditIcon/> 
              </Box>
              {historyInfo.isLocked && <Box component="span" sx={{ pl: 0.5 }}>
                <DocumentLockIcon />
              </Box>}
            </Box>
            
          </Box>
          
        </Box>
      </Box>
    </Card>
  );
};

ShareDocumentInfoCard.propTypes = {
  historyInfo: PropTypes.any,
  documentListClick: PropTypes.any,
  openMail: PropTypes.func
};
export default ShareDocumentInfoCard;
