import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import useStyle from './style';
import Tooltip from '@mui/material/Tooltip';
import { Box } from '@mui/material';
import { PopoverModal } from 'components';
const AvatarGroupList = ({ max, avatarArray }) => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const openMoreList = (e) => {
    e?.stopPropagation();
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e) => {
    e?.stopPropagation();
    setAnchorEl(null);
  };
  return (
    <>
      <AvatarGroup className={'d_flex_align'} onClick={(e) => e.stopPropagation()}>
        {avatarArray?.slice(0, max - 1)?.map((avatar, index) => {
          return (
            <Tooltip
              title={avatar}
              key={index}
              arrow
              placement="top"
              onClick={(e) => e.stopPropagation()}>
              <Avatar
                alt={avatar}
                src="/static/images/avatar/1.jpg"
                className={classes.userImage}
              />
            </Tooltip>
          );
        })}
      </AvatarGroup>
      {avatarArray?.length >= max ? (
        <Box
          className={`d_flex d_flex_align d_flex_content_center moreBtn ${classes.userImage} `}
          aria-describedby={id}
          onClick={(e) => openMoreList(e)}>
          + {avatarArray.length - max + 1}
        </Box>
      ) : (
        ''
      )}
      <PopoverModal
        open={open}
        anchorEl={anchorEl}
        id={id}
        handleClose={(e) => handleClose(e)}
        className={`${classes.avtarModal}`}>
        {avatarArray?.map((item, index) => {
          return (
            <Box
              className={`d_flex d_flex_align ${classes.avatarList}`}
              key={index}
              onClick={(e) => e.stopPropagation()}>
              <Avatar
                className={`text_upperCase ${classes.popupAvtar}`}
                alt={item}
                src={item}
                sx={{ width: 24, height: 24 }}
              />
              <span className={classes.title}>{item}</span>
            </Box>
          );
        })}
      </PopoverModal>
    </>
  );
};

AvatarGroupList.propTypes = {
  max: PropTypes.number,
  avatarArray: PropTypes.array
};

export default AvatarGroupList;
