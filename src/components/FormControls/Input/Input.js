import React from 'react';
import PropTypes from 'prop-types';
import { InputLabel, TextField } from '@mui/material';
import { useField } from 'formik';
import useStyles from './style';
import InputAdornment from '@mui/material/InputAdornment';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Tooltip from '@mui/material/Tooltip';
const CustomTextField = ({ name, label, multiline, rows, tooltip, tooltipMessage, ...rest }) => {
  const classes = useStyles();
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...rest,
    size: 'small',
    multiline: multiline,
    rows: rows,
    className: classes.textField
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return (
    <div className={classes.fieldRow}>
      {label && <InputLabel className={classes.inputLabel}> {label} </InputLabel>}

      <TextField
        {...rest}
        autoComplete="Off"
        className={classes.textField}
        FormHelperTextProps={{
          classes: {
            root: classes.helperText
          }
        }}
        InputProps={{
          classes: { input: multiline ? classes.textArea : classes.input },
          endAdornment: tooltip && (
            <Tooltip title={tooltipMessage} placement="top-end">
              <InputAdornment position="end">
                <HelpOutlineOutlinedIcon fontSize="small" />
              </InputAdornment>
            </Tooltip>
          )
        }}
        SelectProps={{
          MenuProps: {
            classes: { paper: classes.selectMenu }
          }
        }}
        {...configTextField}
        fullWidth
        multiline={multiline}
        rows={rows}
      />
    </div>
  );
};

CustomTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  tooltip: PropTypes.bool,
  rest: PropTypes.object,
  variant: PropTypes.string,
  tooltipMessage: PropTypes.string
};

CustomTextField.defaultProps = {
  name: '',
  label: '',
  multiline: false,
  tooltip: false,
  rows: 1,
  rest: {},
  variant: 'outlined',
  tooltipMessage: ''
};

export default CustomTextField;
