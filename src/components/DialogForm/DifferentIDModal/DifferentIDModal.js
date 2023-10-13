import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Button } from '@mui/material';
import useStyle from './style';
import { CustomCheckbox } from 'components/FormControls/Index';
import PropTypes from 'prop-types';

const DifferentIDModal = ({ close, continueAction }) => {
  const classes = useStyle();

  return (
    <div>
      <Box className={`d_flex d_flex_content_center d_flex_align ${classes.infoIcon}`}>
        <InfoIcon />
      </Box>
      <Box className="text_center">
        <p className={`${classes.infoLogo}`}>
          Bargaining <label className={classes.infoLabel}>Table</label>
        </p>
        <Box sx={{ mb: 2 }}>
          In order to use bargaining table on your desktop word application, you need to install the
          bargaining table add-in.
        </Box>
      </Box>
      <Box sx={{ mb: 2 }}>The following step is required given below:</Box>
      <Box>
        <Box> * Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Box>
        <Box> * Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Box>
        <Box> * Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Box>
        <Box> * Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Box>
      </Box>
      <Box sx={{ mt: 2 }}>
        <CustomCheckbox label={'Don’t show again'} className={classes.checkBoxWhite} />
      </Box>
      <Box className="text_center" sx={{ mt: 2 }}>
        <Button className={classes.infoButton} onClick={continueAction}>
          Continue
        </Button>
      </Box>
      <Box className="text_center" sx={{ mt: 2 }}>
        <Button className={classes.infoButton} onClick={close}>
          Cancel
        </Button>
      </Box>
    </div>
  );
};

DifferentIDModal.propTypes = {
  close: PropTypes.func,
  continueAction: PropTypes.func
};
export default DifferentIDModal;
