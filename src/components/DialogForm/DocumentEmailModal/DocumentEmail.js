import React from 'react';
import { Box } from '@mui/material';
import useStyle from './style';
import PropTypes from 'prop-types';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useSelector } from 'react-redux';

const DocumentEmail = ({ closeModal, itemInfo, documentLinkClick }) => {
  const classes = useStyle();
  const { user } = useSelector((state) => state.userData);

  return (
    <Box className={`${classes.emailInner}`}>
      <Box className={`pointer ${classes.closeIcon}`} onClick={closeModal}>
        <CancelRoundedIcon />
      </Box>
      <Box sx={{ mb: 3 }}>
        <Box component="p">To: {user?.name}</Box>
        <Box component="span" className={`pointer ${classes.linkText}`}>
          {user?.username}
        </Box>
      </Box>

      <Box className={`d_flex d_flex_align`} sx={{ mb: 6 }}>
        <Box component="p" className={`pointer ${classes.bargainingText}`}>
          Bargaining
        </Box>
        <Box component="label" sx={{ ml: 0.5 }} className={`pointer ${classes.tableText}`}>
          Table
        </Box>
      </Box>
      <Box component="p" sx={{ mb: 4 }}>
        {itemInfo?.message}
      </Box>
      <Box component="p">From: {itemInfo?.fromUser}</Box>
      <Box component="p" sx={{ mb: 6 }}>
        {itemInfo?.fromUserEmail}
      </Box>
      <Box component="p" sx={{ mb: 4 }}>
        To access the document simply click the access button below. You can also cut and paste the
        link provided into any web browser.
      </Box>
      <Box sx={{ mb: 4 }}>
        <a
          className={`pointer ${classes.linkbutton}`}
          onClick={(e) => {
            documentLinkClick(e, itemInfo);
          }}>
          Access document on the Bargaining Table
        </a>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Box className="p">Use below link for the open the document in browser</Box>
        <a
          className={`pointer ${classes.linkText}`}
          onClick={(e) => {
            documentLinkClick(e, itemInfo);
          }}>
          bargainingtable.io/documentlink
        </a>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Box className="p">Download Bargaining Table add-in from microsoft market place</Box>
        <a href="" className={`pointer ${classes.linkText}`}>
          bargainingtable.io/add-in
        </a>
      </Box>
    </Box>
  );
};

DocumentEmail.propTypes = {
  closeModal: PropTypes.any,
  itemInfo: PropTypes.any,
  documentLinkClick: PropTypes.any
};
export default DocumentEmail;
