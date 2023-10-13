import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, InputLabel, FormHelperText } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import useStyles from './style';
import FileIcon from './FileIcon';
import CancelSharpIcon from '@mui/icons-material/CancelSharp';
import { useField, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';

const FileUpload = ({ label, name, setFieldValue, selectedFile }) => {
  const [field, meta] = useField(name);
  const classes = useStyles();
  const { t } = useTranslation();
  const [fileSelected, setFileSelected] = useState(null);
  useEffect(() => {
    if (selectedFile?.length) {
      setFieldValue(selectedFile);
      setFileSelected(selectedFile[0]);
    } else {
      setFieldValue('');
      setFileSelected(null);
    }
  }, [selectedFile]);

  const configTextField = {
    ...field
  };
  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
  }

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length) {
      setFieldValue(acceptedFiles);
      setFileSelected(acceptedFiles[0]);
    } else {
      setFieldValue('');
      setFileSelected(null);
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
  const removeFile = (e) => {
    e.stopPropagation();
    setFileSelected(null);
    setFieldValue('');
    selectedFile[0] = '';
  };

  return (
    <Box className={classes.fieldRow}>
      {label && (
        <InputLabel className={classes.inputLabel}> Uploading Documents {label} </InputLabel>
      )}
      <Box className={classes.fileWrapper}>
        <div {...getRootProps()}>
          {fileSelected && fileSelected?.name && (
            <CancelSharpIcon className={classes.removeDoc} onClick={(e) => removeFile(e)} />
          )}
          <FileIcon />
          <input {...getInputProps()} type="file" name={name} />
          <h5 className={classes.dragTitle}>
            {t('drag_drop_file')} <label className={classes.label}>Browse</label>
          </h5>
          {/* {fileSelected === null && (
            <p className={classes.sizeText}>Allow only .doc or .docx file</p>
          )} */}
          {fileSelected && fileSelected?.name && (
            <p className={classes.sizeText}>
              File Selected: <span>{fileSelected?.name}</span>
            </p>
          )}
        </div>
      </Box>
      <FormHelperText className={classes.error}>
        <ErrorMessage name={name} />
      </FormHelperText>
    </Box>
  );
};

FileUpload.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  setFieldValue: PropTypes.func,
  selectedFile: PropTypes.any
};

export default FileUpload;
