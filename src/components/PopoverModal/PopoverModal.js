import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';
function PopoverModal({ children, open, handleClose, anchorEl, id }) {
  return (
    <Popover
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center'
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}>
      {children}
    </Popover>
  );
}
PopoverModal.propTypes = {
  open: PropTypes.bool,
  id: PropTypes.string,
  anchorEl: PropTypes.object,
  children: PropTypes.any,
  handleClose: PropTypes.func
};
export default PopoverModal;
