/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { memo } from 'react';
import useStyles from './style';
import GetAppIcon from '@mui/icons-material/GetApp';
import { TextField } from '@mui/material';

export const Box = memo(function Box({
  id,
  preview,
  type,
  customValue,
  handleDragedCustom,
  updateDrageList,
  userName
}) {
  const classes = useStyles();
  return (
    <div
      role={preview ? 'BoxPreview' : 'Box'}
      className={`${classes.dragItem}`}
      style={
        type === 'Signature'
          ? { height: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }
          : {}
      }>
      {type === 'Custom' ? (
        <TextField
          value={customValue}
          placeholder={'Custom Text (' + userName + ')'}
          autoComplete="Off"
          className={classes.dragCustomField}
          onChange={(e) => handleDragedCustom(e, id)}
          onBlur={updateDrageList}
        />
      ) : (
        <>
          {type === 'Signature' ? (
            <>
              <p className={classes.dragPTitle}>{'Sign (' + userName + ')'}</p>
              <GetAppIcon />
            </>
          ) : (
            <p className={classes.dragPTitle}>{type + ' (' + userName + ')'}</p>
          )}
        </>
      )}
    </div>
  );
});
