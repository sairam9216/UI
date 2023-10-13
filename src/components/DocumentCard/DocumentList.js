import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import useStyle from './style';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { getFormatedDate } from 'utils';

const DocumentList = ({ document, isCopyEdit, editClick, copyClick, zoomClick }) => {
  const { thumbnail, name, projectName, owner, createdDate } = document;
  const classes = useStyle();

  return (
    <>
      <Grid item xs={12} sm={5} md={4}>
        <Box className="d_flex d_flex_align_start" sx={{ p: 1.5 }}>
          <Box className={classes.docListImage}>
            <img src={thumbnail} alt="document Image" width={'50'} height={'60'} />
          </Box>
          <Box sx={{ p: 1 }}>
            <label className={classes.docLabel}>Document Name</label>
            <p className={classes.docListDesc}>{name} Bargaining Table</p>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <Box sx={{ p: 1 }}>
          <label className={classes.docLabel}>Project Name</label>
          <p className={classes.docListDesc}>{projectName}testing Project</p>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <Box sx={{ p: 1 }}>
          <label className={classes.docLabel}>Author</label>
          <p className={classes.docListDesc}>{owner} - </p>
        </Box>
      </Grid>
      <Grid item xs={6} sm={5} md={2}>
        <Box sx={{ p: 1 }}>
          <label className={classes.docLabel}>Last Updated</label>
          <p className={classes.docListDesc}>{getFormatedDate(createdDate)}</p>
        </Box>
      </Grid>
      <Grid item xs={6} sm={3} md={2}>
        <Box sx={{ p: 1 }} className={` d_flex d_flex_align `}>
          {isCopyEdit ? (
            <span
              className={`commonIcon d_flex d_flex_align d_flex_content_center pointer ${classes.iconButton}`}>
              <EditRoundedIcon fontSize="small" onClick={editClick} />
            </span>
          ) : (
            <span
              className={`commonIcon d_flex d_flex_align d_flex_content_center pointer ${classes.iconButton}`}>
              <ContentCopyIcon fontSize="small" onClick={copyClick} />
            </span>
          )}
          <span
            className={`commonIcon d_flex d_flex_align d_flex_content_center pointer ${classes.iconButton}`}>
            <ZoomInIcon onClick={() => zoomClick()} />
          </span>
        </Box>
      </Grid>
    </>
  );
};

DocumentList.propTypes = {
  document: PropTypes.Obj,
  zoomClick: PropTypes.func,
  isCopyEdit: PropTypes.bool,
  copyClick: PropTypes.func,
  editClick: PropTypes.func
};

export default React.memo(DocumentList);
