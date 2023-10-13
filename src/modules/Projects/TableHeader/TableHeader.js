import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { CommonButton } from 'components/FormControls/Index';

function TableTopSection({ headerTitle, headerBtnLabel, actionBtnClick }) {
  return (
    <Box className="d_flex d_flex_wrap d_flex_align d_flex_content_between" sx={{ mb: 1.25 }}>
      <Typography component="h2" className="title_500">
        {headerTitle}
      </Typography>
      <CommonButton
        btnLabel={headerBtnLabel}
        onClick={() => actionBtnClick()}
        size="medium"
        uppercase
      />
    </Box>
  );
}
TableTopSection.propTypes = {
  headerTitle: PropTypes.string,
  headerBtnLabel: PropTypes.string,
  actionBtnClick: PropTypes.func
};
export default React.memo(TableTopSection);
