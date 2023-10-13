import React from 'react';
import { Grid, Box, Button } from '@mui/material';
import ReactCodeInput from 'react-code-input';
import { Formik, Form } from 'formik';
import { CommonButton } from 'components/FormControls/Index';

import useStyles from './style';

export const TwoFactorAuth = () => {
  const classes = useStyles();
  const props = {
    placeholder: '_',
    inputStyle: {
      marginRight: '11px',
      width: '45px',
      borderRadius: '3px',
      fontSize: '30px',
      height: '45px',
      textAlign: 'center',
      backgroundColor: 'white',
      color: '#323232',
      background: '#F4F4F4',
      border: 'none',
      '&:last-child': {
        marginRight: '0'
      }
    },
    inputStyleInvalid: {
      marginRight: '11px',
      width: '45px',
      borderRadius: '4px',
      fontSize: '30px',
      height: '45px',
      textAlign: 'center',
      color: 'red',
      border: '1px solid red'
    }
  };

  const InputChange = (value) => {
    console.log(value);
  };

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}>
      <Grid item xs={3}>
        <Formik>
          {() => (
            <Form id="login-form">
              <div className={classes.loginForm}>
                <div className={classes.LoginForm_Title}>
                  <Box sx={{ mb: 2.5 }}>
                    <h2 className="title">Two Factor Authentication</h2>
                  </Box>
                  <p>Secure code sent to your email address. Please type below.</p>
                </div>
                <div>
                  <Box sx={{ mb: 3 }}>
                    <ReactCodeInput
                      {...props}
                      type="number"
                      placeholder="_"
                      fields={6}
                      onChange={InputChange}
                    />
                  </Box>
                  <Box sx={{ mb: 2.5 }}>
                    <CommonButton fullWidth btnLabel="Submit" />
                  </Box>
                  <Box className="text_center">
                    <Button sx={{ textTransform: 'unset' }}>Resend</Button>
                  </Box>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};
