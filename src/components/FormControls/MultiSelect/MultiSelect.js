import React from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';
import useStyle from './style';
import { Box, InputLabel } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import Select, { components } from 'react-select';
import CachedIcon from '@mui/icons-material/Cached';
const MultiSelect = ({
  label,
  name,
  options,
  placeholder,
  isMulti,
  isClearable,
  isCreatable,
  showSyncIcon,
  updateToggleValue
}) => {
  const { Option } = components;
  const [field, meta] = useField(name);
  const classes = useStyle();
  const { setFieldValue } = useFormikContext();

  //handleChange method
  const handleChange = (val) => {
    if (val) {
      if (val?.value) {
        // Single select
        setFieldValue(name, val?.value);
      } else {
        // Multi select
        let values = val?.map((item) => item?.value);
        setFieldValue(name, values);
      }
    } else {
      setFieldValue(name, '');
    }
  };
  const styles = {
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        fontSize: '0.813rem',
        color: '#b7b7b7'
      };
    },
    option: (provided, state) => {
      if (state.data.__isNew__) {
        return {
          ...provided,
          backgroundColor: 'transparent',
          fontSize: '0.813rem'
        };
      } else {
        return {
          ...provided,
          fontWeight: 'normal',
          color: state.isSelected || state.isFocused ? '#fff' : '#000',
          fontSize: '0.813rem',
          wordBreak: 'break-all',
          ':active': {
            backgroundColor: '#0E4394',
            color: 'white'
          },
          ':hover': {
            backgroundColor: '#0E4394',
            color: 'white'
          },
          backgroundColor: state.isSelected || state.isFocused ? '#0E4394' : 'white'
        };
      }
    },
    control: (styles) => ({
      // should be option, not control
      ...styles,
      borderColor: '#DFDFDF',
      backgroundColor: '#f3f5f9',
      minHeight: '2.813rem',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#DFDFDF'
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: '0.813rem'
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    // Selected value parent
    multiValue: (base) => ({
      ...base,
      alignItems: 'center',
      borderRadius: '15px'
    })
  };

  // Createble options

  const creatableStyle = {
    ...styles,
    control: () => ({
      background: 'none',
      border: 0,
      boxShadow: 'none',
      // borderBottom: '1px solid #DFDFDF',
      borderRadius: 0
    }),
    multiValue: (base) => ({
      ...base,
      borderRadius: '5px',
      background: '#fff',
      border: '1px solid #DFDFDF'
    }),
    multiValueRemove: (base) => ({
      ...base,
      '&:hover': { backgroundColor: 'transparent', color: '#000', cursor: 'pointer' }
    })
  };

  const getSingleLabel = () => {
    return options.filter((item) => item.value === field?.value);
  };

  const getMultiLabel = () => {
    return field?.value?.map((val) => {
      return options.find((item) => item?.value === val);
    });
  };

  const IconOption = (props) => {
    const { data } = props;
    return (
      <Option {...props}>
        {data?.Image ? (
          <img
            src={data?.Image}
            style={{ height: '15px', width: '15px', borderRadius: '50%', marginRight: '10px' }}
          />
        ) : (
          ''
        )}
        {data?.label}
      </Option>
    );
  };

  const formatCreateLabel = (userInput) => {
    let chekData = options.filter((item) =>
      item.value.toLowerCase().match(userInput.toLowerCase())
    );
    if (chekData?.length === 0) {
      return (
        <span className={classes.addNewLabel}>
          Add New Email: <b className={classes.addUserValue}>{userInput}</b>
        </span>
      );
    } else {
      return true;
    }
  };

  return (
    <Box className={classes.fieldRow}>
      <Box className={classes.labelRow}>
        <InputLabel className={classes.inputLabel}> {label} </InputLabel>
        {showSyncIcon && <CachedIcon className={classes.toggleIcon} onClick={updateToggleValue} />}
      </Box>
      {isCreatable ? (
        <CreatableSelect
          defaultValue={isMulti ? getMultiLabel() : getSingleLabel()}
          className={classes.creatableDropdown}
          onChange={(value) => {
            handleChange(value);
          }}
          styles={creatableStyle}
          options={options}
          isMulti={isMulti}
          formatCreateLabel={formatCreateLabel}
          isClearable={false}
          name={name}
          menuPosition={'fixed'}
          placeholder={placeholder}
          components={{
            Option: IconOption,
            DropdownIndicator: () => null,
            IndicatorSeparator: () => null
          }}
          // components={{ DropdownIndicator: () => null, IndicatorSeparator: () => null }}
        />
      ) : (
        <Select
          defaultValue={isMulti ? getMultiLabel() : getSingleLabel()}
          className={classes.multiSelect}
          onChange={(value) => {
            handleChange(value);
          }}
          styles={styles}
          options={options}
          isMulti={isMulti}
          isClearable={isClearable}
          name={name}
          menuPosition={'fixed'}
          placeholder={placeholder}
          components={{ Option: IconOption }}
        />
      )}
      <p className={classes.errorText}>{meta && meta.touched && meta?.error ? meta.error : ''}</p>
    </Box>
  );
};

MultiSelect.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.array,
  isMulti: PropTypes.bool,
  isClearable: PropTypes.bool,
  isCreatable: PropTypes.bool,
  value: PropTypes.any,
  data: PropTypes.object,
  showSyncIcon: PropTypes.bool,
  updateToggleValue: PropTypes.func
};

MultiSelect.defaultProps = {
  label: '',
  placeholder: 'Select...',
  name: '',
  options: [],
  isMulti: false,
  isClearable: true,
  isCreatable: false,
  value: [],
  showSyncIcon: false
};

export default MultiSelect;
