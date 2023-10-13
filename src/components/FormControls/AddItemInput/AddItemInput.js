import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { InputLabel, TextField, Box } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import useStyles from './style';
import InputAdornment from '@mui/material/InputAdornment';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTranslation } from 'react-i18next';

const AddItemInput = ({ name, multiline, rows, tooltip, tooltipMessage }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [field, meta] = useField(name);
  // const [textValue, setTextValue] = useState('');
  const [itemArray, setItemArray] = useState(field?.value?.length ? field?.value : ['']);
  const { setFieldValue } = useFormikContext();
  const configTextField = {
    size: 'small',
    multiline: multiline,
    rows: rows,
    className: classes.textField
  };
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
  }
  //handleChange method

  const handleChangeAdd = (e, index) => {
    const { value } = e.target;
    // setTextValue(value);
    const updateArray = itemArray.map((item, i) => {
      if (i === index) {
        item = value;
      }
      return item;
    });
    setItemArray(updateArray);
    setFieldValue(
      name,
      updateArray.filter((e) => e)
    );
  };

  const addItemClick = () => {
    setItemArray([...itemArray, '']);
    setFieldValue(
      name,
      itemArray.filter((e) => e)
    );
    // setTextValue('');
    forceUpdate();
  };

  const removeItemClick = (e, index) => {
    const newArray = itemArray.filter((item, idx) => idx !== index);
    setItemArray(newArray);
    setFieldValue(
      name,
      newArray.filter((e) => e)
    );
  };

  return (
    <>
      {itemArray?.map((item, index) => {
        return (
          <div className={classes.fieldRow} key={index}>
            <InputLabel className={classes.inputLabel}>{t('counter_party')}</InputLabel>
            <Box className={`d_flex ${classes.itemRow}`}>
              <TextField
                {...field}
                placeholder={t(`Counter Party`)}
                autoComplete="Off"
                className={classes.textField}
                value={item}
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
                fullWidth
                onChange={(e) => handleChangeAdd(e, index)}
              />
              <Box className={`d_flex pointer plusIconSection ${classes.addItem}`}>
                {index === 0 ? (
                  <>
                    <AddIcon onClick={addItemClick} className={classes.addIcon} />
                    <Tooltip title={tooltipMessage} placement="top-end">
                      <InputAdornment position="end">
                        <HelpOutlineOutlinedIcon fontSize="small" />
                      </InputAdornment>
                    </Tooltip>
                  </>
                ) : (
                  <>
                    <RemoveIcon onClick={(e) => removeItemClick(e, index)} />
                  </>
                )}
              </Box>
            </Box>
          </div>
        );
      })}
      <p className={classes.errorText}>{meta && meta?.error && meta?.touched ? meta.error : ''}</p>
    </>
  );
};

AddItemInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  Required: PropTypes.bool,
  tooltip: PropTypes.bool,
  rest: PropTypes.object,
  variant: PropTypes.string,
  tooltipMessage: PropTypes.string,
  addItem: PropTypes.func
};

AddItemInput.defaultProps = {
  name: '',
  label: '',
  multiline: false,
  Required: false,
  tooltip: false,
  rows: 1,
  rest: {},
  variant: 'outlined',
  tooltipMessage: '',
  btnLabel: ''
};

export default AddItemInput;
