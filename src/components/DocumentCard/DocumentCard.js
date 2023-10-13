import React from 'react';
import PropTypes from 'prop-types';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { Box } from '@mui/material';
import useStyle from './style';
import { PlaceholderImg } from 'utils/images';
import { CommonButton } from 'components/FormControls/Index';
import { useTranslation } from 'react-i18next';

function DocumentCard({
  image,
  title,
  subTitle,
  zoomClick,
  isCopyEdit,
  copyClick,
  editClick,
  isEmptyThumb,
  generateThumbClick
}) {
  const classes = useStyle();
  const { t } = useTranslation();

  return (
    <div className={classes.documentCard}>
      {isEmptyThumb ? (
        <Box className={`relative d_flex d_flex_align d_flex_content_center ${classes.emptyCard}`}>
          <img src={PlaceholderImg} alt="document image" width={'50'} height={'240'} />
          <CommonButton
            className={`generateBtn pointer`}
            btnLabel={t('generate')}
            onClick={generateThumbClick}
            size={'small'}></CommonButton>
        </Box>
      ) : (
        <div className="cardImage text_center relative">
          <img src={image ? image : PlaceholderImg} alt="document" height={'240'} />
          <div
            className={`iconWrapper d_flex d_flex_align d_flex_content_center ${classes.iconWrapper}`}>
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
          </div>
        </div>
      )}
      <div className={`cardDescription`}>
        <p className={'singleLine docTitle'}>{title}</p>
        <p className={'subTitle'}>{subTitle}</p>
      </div>
    </div>
  );
}

DocumentCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  zoomClick: PropTypes.func,
  copyClick: PropTypes.func,
  editClick: PropTypes.func,
  generateThumbClick: PropTypes.func,
  subTitle: PropTypes.string,
  isCopyEdit: PropTypes.bool,
  isEmptyThumb: PropTypes.bool
};

export default DocumentCard;
