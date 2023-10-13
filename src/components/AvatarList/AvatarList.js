import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import useStyle from './style';
import { Box } from '@mui/material';
import { AvatarGroupList } from 'components';

function AvatarList({ max, avatarArray }) {
  const classes = useStyle();
  let avatarMinLength = 3;
  if (avatarArray.length > 3) {
    avatarMinLength = 2;
  }
  return (
    <>
      {avatarArray?.slice(0, avatarMinLength)?.map((avatar, i) => {
        return (
          <Box className={`d_flex d_flex_align ${classes.avatarListRow}`} key={i}>
            <Avatar
              alt={avatar}
              src="/static/images/avatar/1.jpg"
              className={classes.userImage}
              sx={{ mr: 1 }}
            />
            <p className={`d_flex d_flex_align wordBreak singleLine ${classes.partyName}`}>
              {avatar}
            </p>
          </Box>
        );
      })}
      {avatarArray.length > 3 ? (
        <Box className={`d_flex d_flex_align`}>
          <AvatarGroupList max={max} avatarArray={avatarArray?.slice(2, avatarArray.length)} />
        </Box>
      ) : (
        ''
      )}
    </>
  );
}

AvatarList.propTypes = {
  max: PropTypes.number,
  avatarArray: PropTypes.array
};

export default AvatarList;
