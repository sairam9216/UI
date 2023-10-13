import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import InputLabel from '@mui/material/InputLabel';
import useStyles from './style';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useField } from 'formik';

const SelectWrapper = ({ name, label, onChange, options, placeholder, displayTextKey }) => {
  const classes = useStyles();
  const [field, meta] = useField(name);
  return (
    <div className={classes.fieldRow}>
      <InputLabel className={classes.inputLabel}>{label}</InputLabel>
      <Autocomplete
        name={name}
        options={options}
        ListboxProps={{ style: { maxHeight: '10rem' } }}
        getOptionLabel={(option) => (option[displayTextKey] ? option[displayTextKey] : '')}
        defaultValue={field?.value}
        onChange={useCallback((e, v) => onChange(v))}
        size={'small'}
        autoFocus={false}
        renderInput={(params) => (
          <TextField
            classes={{ root: classes.textField }}
            {...params}
            autoFocus={false}
            variant="outlined"
            placeholder={placeholder}
            error={meta && meta.touched && meta.error ? true : false}
            helperText={meta && meta.touched && meta?.error ? meta.error : ''}
            FormHelperTextProps={{
              classes: {
                root: classes.helperText
              }
            }}
          />
        )}
      />
    </div>
  );
};
SelectWrapper.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  options: PropTypes.array,
  displayTextKey: PropTypes.string,
  placeholder: PropTypes.string
};

SelectWrapper.defaultProps = {
  name: '',
  label: '',
  value: '',
  options: [],
  displayTextKey: '',
  onChange: () => {},
  placeholder: ''
};

export default SelectWrapper;
