import React from 'react';
import { Box } from '@mui/material';
import FileIcon from './FileIcon';
import useStyles from './style';
import { useTranslation } from 'react-i18next';

function DisabledFile() {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.disableDragContainer}>
      <Box className={`fileWrapper ${classes.fileWrapper}`}>
        <FileIcon />
        <h5 className={classes.dragTitle}>
          {t('drag_drop_file')}
          <label className={`browsLabel`}> {t('browse')} </label>
        </h5>
      </Box>
    </div>
  );
}

export default DisabledFile;
