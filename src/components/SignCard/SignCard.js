import React from 'react';
import useStyle from './style';
import { Card, Box } from '@mui/material';
import PropTypes from 'prop-types';
import { AvatarGroupList } from 'components';
import { getFormatedDateWithTime } from 'utils';

const SignCard = ({ templateData }) => {
  const classes = useStyle();
  const { projectName, documentName, signers, modifiedDate, combinedPDFDriveItemID } = templateData;
  const namesArrayList = signers.map((i) => {
    return i.name;
  });
  return (
    <Card className={classes.cardMain}>
      <Box
        className={`relative pointer d_flex flex_direction_col d_flex_content_between ${classes.signContent}`}>
        <div className={'d_flex flex_direction_row d_flex_content_between'}>
          <div>
            <h4 className={classes.signTitle}>{projectName}</h4>
          </div>
          {!combinedPDFDriveItemID && <span className={classes.badgeLabel}>Pending</span>}
        </div>
        <Box>
          <h4 className={`${classes.signSubTitle}`}>{documentName}</h4>
        </Box>
        <Box sx={{ mb: 1 }}>
          <h4 className={classes.signTitle}>Sign By</h4>
          <Box className={`d_flex d_flex_align`}>
            <AvatarGroupList max={4} avatarArray={namesArrayList} />
          </Box>
        </Box>
        <p className={classes.dateLabel}>
          {getFormatedDateWithTime(modifiedDate, 'MMMM Do YYYY, hh:mm a')}
        </p>
      </Box>
    </Card>
  );
};
SignCard.propTypes = {
  templateData: PropTypes.object
};
export default SignCard;
