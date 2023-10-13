import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { CloseOutlined } from '@mui/icons-material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Box from '@mui/material/Box';
import useStyle from './style';
import { CommonButton } from 'components/FormControls/Index';

const ZoomDocument = React.memo(
  ({ thumbnail, close, copyClick, documentName, isCopy, isEdit, editClick }) => {
    const classes = useStyle();
    const [thumbUrl, setThumbUrl] = React.useState('');
    useEffect(() => {
      setThumbUrl(thumbnail);
    }, [thumbnail]);

    return (
      <div className={classes.zoomModal}>
        <Box className={'d_flex d_flex_align d_flex_content_between'} sx={{ mb: 1 }}>
          {isCopy && (
            <CommonButton
              startIcon={<ContentCopyIcon />}
              btnLabel={documentName}
              size="medium"
              onClick={copyClick}
            />
            // <div className={`d_flex d_flex_align pointer ${classes.copyTitle}`} onClick={copyClick}>
            //   <ContentCopyIcon className={classes.icon} fontSize="Medium" sx={{ mr: 1 }} />
            //   <p className={classes.docName}>{documentName}</p>
            // </div>
          )}
          {isEdit && (
            <CommonButton
              startIcon={<EditRoundedIcon />}
              btnLabel={documentName}
              size="medium"
              onClick={editClick}
            />
            // <div className={`d_flex d_flex_align pointer ${classes.copyTitle}`} onClick={editClick}>
            //   <EditRoundedIcon className={classes.icon} fontSize="Medium" sx={{ mr: 1 }} />
            //   <p className={classes.docName}>{documentName}</p>
            // </div>
          )}
          <CloseOutlined className={'pointer closeIcon'} fontSize="small" onClick={() => close()} />
        </Box>
        <div className={classes.iframeWrap}>
          <iframe
            src={thumbUrl ? thumbUrl : ''}
            title="document template"
            frameBorder="0"
            width={'100%'}
            height={'600'}></iframe>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.thumbnail === nextProps.thumbnail;
  }
);
ZoomDocument.displayName = 'ZoomDocument';
ZoomDocument.propTypes = {
  documentName: PropTypes.string,
  thumbnail: PropTypes.string,
  close: PropTypes.func,
  copyClick: PropTypes.func,
  editClick: PropTypes.func,
  isCopy: PropTypes.bool,
  isEdit: PropTypes.bool
};

export default ZoomDocument;
