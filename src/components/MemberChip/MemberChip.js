import React from 'react';
import PropTypes from 'prop-types';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Avatar } from '@mui/material';
import useStyle from './style';
import Tooltip from '@mui/material/Tooltip';
const MemberChip = ({ member, enableRemove }) => {
  const { image, displayName, project, email } = member;
  const classes = useStyle();
  return (
    <div className={classes.chipMain}>
      <div className={`d_flex d_flex_align pointer ${classes.chip}`}>
        <Avatar alt={displayName} src={image} sx={{ width: 24, height: 24 }} />
        <Tooltip title={email} arrow>
          <Box className={classes.textWrap}>
            <p className={classes.name}>{displayName}</p>
            <p className={classes.subtitle}>{project}</p>
          </Box>
        </Tooltip>
        {enableRemove && <CloseRoundedIcon fontSize="small" className={classes.remove} />}
      </div>
    </div>
  );
};
MemberChip.propTypes = {
  member: PropTypes.object,
  enableRemove: PropTypes.bool
};
export default MemberChip;
