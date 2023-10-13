import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { CommonButton } from 'components/FormControls/Index';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function TableTopSection({
  headerTitle,
  headerBtnLabel,
  actionBtnClick,
  actionList,
  createBtn,
  createBtnHandler
}) {
  const [action, setAction] = React.useState('');
  const handleChange = (event) => {
    setAction(event.target.value);
  };

  return (
    <Box className="d_flex d_flex_wrap d_flex_align d_flex_content_between" sx={{ mb: 1.25 }}>
      <Typography component="h2" className="title_500">
        {headerTitle}
      </Typography>
      {actionList && (
        <Box sx={{ display: 'inline-flex' }}>
          <Select
            value={action}
            onChange={handleChange}
            displayEmpty
            size={'small'}
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ mr: 1 }}>
            <MenuItem value="">Select Option</MenuItem>
          </Select>
          <CommonButton
            btnLabel={headerBtnLabel}
            onClick={() => actionBtnClick()}
            size="medium"
            uppercase
          />
        </Box>
      )}
      {createBtn && (
        <CommonButton
          btnLabel={headerBtnLabel}
          onClick={() => createBtnHandler()}
          size="medium"
          uppercase
        />
      )}
    </Box>
  );
}
TableTopSection.propTypes = {
  headerTitle: PropTypes.string,
  headerBtnLabel: PropTypes.string,
  actionBtnClick: PropTypes.func,
  createBtnHandler: PropTypes.func,
  actionList: PropTypes.array,
  createBtn: PropTypes.bool
};
export default React.memo(TableTopSection);
