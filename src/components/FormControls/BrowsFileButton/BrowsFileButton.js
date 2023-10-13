import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Box, InputLabel } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import useStyles from './style';
import FileIcon from './FileIcon';
import { useTranslation } from 'react-i18next';

const BrowsFileButton = ({ label, setupDocument, customClass }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length) {
      setupDocument(acceptedFiles);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    accept: {
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.doc', '.docx']
    }
  });
  return (
    <Box className={classes.fieldRow}>
      {label && (
        <InputLabel className={classes.inputLabel}>
          {t('uploading_documents')} {label}
        </InputLabel>
      )}
      <div className={classes.dragContainer} {...getRootProps()}>
        <Box className={`fileWrapper ${classes.fileWrapper} ${customClass}`}>
          <FileIcon />
          <input {...getInputProps()} />
          <h5 className={classes.dragTitle}>
            {t('drag_drop_file')}
            <label className={`browsLabel ${classes.label}`}> {t('browse')} </label>
          </h5>
          {/* <p className={classes.sizeText}>{t('allow_only_file')}</p> */}
        </Box>
      </div>
    </Box>
  );
};

BrowsFileButton.propTypes = {
  label: PropTypes.string,
  setupDocument: PropTypes.func,
  customClass: PropTypes.string
};

export default BrowsFileButton;
