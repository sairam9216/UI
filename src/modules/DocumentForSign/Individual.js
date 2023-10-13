/* eslint-disable */
import React, { useState } from 'react';
import { Box, Switch, FormControlLabel, Grid, TextField } from '@mui/material';
import { Formik, Form, ErrorMessage, Field } from 'formik';
// import { CommonButton } from 'components/FormControls/Index';
import useStyles from './style';
// import CloseIcon from '@mui/icons-material/Close';
import { SignatureIcon } from 'utils/images';
import { useField } from 'formik';

const IndividualPart = ({ handleChange, name, email, index, errors }) => {
  const classes = useStyles();
  // const { name, email } = item;

  // const InputField = ({ name, placeholder, item, index }) => {
  //   const [field, meta] = useField(name);
  //   const configTextField = {
  //     ...field
  //   };
  //   if (meta && meta.touched && meta.error) {
  //     configTextField.error = true;
  //     configTextField.helperText = meta.error;
  //   }
  //   return (
  //     <TextField
  //       name={name}
  //       {...configTextField}
  //       // value={name}
  //       placeholder={placeholder}
  //       autoComplete="Off"
  //       className={classes.textField}
  //       fullWidth
  //       onChange={(e) => handleChange(e, index)}
  //     />
  //   );
  // };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item sm={12} lg={6}>
          <Box sx={{ mb: 2, borderBottom: 1 }}>
            <SignatureIcon />
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={6}>
          <TextField
            name="name"
            value={name}
            placeholder={'Name'}
            autoComplete="Off"
            className={classes.textField}
            fullWidth
            onChange={(e) => handleChange(e, index)}
          />
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <TextField
            name="email"
            value={email}
            placeholder={'Email'}
            autoComplete="Off"
            className={classes.textField}
            fullWidth
            onChange={(e) => handleChange(e, index)}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default IndividualPart;
