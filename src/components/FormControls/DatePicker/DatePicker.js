import React from 'react';
import PropTypes from 'prop-types';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import TextField from '@mui/material/TextField';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Box, InputLabel } from '@mui/material';
import useStyle from './style';
import { useField, useFormikContext } from 'formik';
import moment from 'moment';

const DatePicker = ({ label, name, minDate }) => {
  const [field, meta] = useField(name);
  const { setFieldValue } = useFormikContext();
  const classes = useStyle();

  //handleChange method
  const handleChange = (value) => {
    setFieldValue(name, moment.utc(value).format());
  };

  // const onKeyDown = (e) => {
  //   e.preventDefault();
  // };

  return (
    <Box className={classes.fieldRow}>
      {label && <InputLabel className={classes.inputLabel}> {label} </InputLabel>}
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          inputFormat="MM/dd/yyyy"
          value={field?.value}
          minDate={minDate}
          onChange={(date) => handleChange(date)}
          InputProps={{ readOnly: true }}
          renderInput={(params) => (
            <TextField
              name={name}
              autoComplete="Off"
              fullWidth
              {...params}
              className={classes.textField}
              // onKeyDown={onKeyDown}
            />
          )}
        />
      </LocalizationProvider>
      <p className={classes.errorText}>{meta && meta.touched && meta?.error ? meta.error : ''}</p>
    </Box>
  );
};
DatePicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  minDate: PropTypes.any,
  onChange: PropTypes.func
};
export default DatePicker;
