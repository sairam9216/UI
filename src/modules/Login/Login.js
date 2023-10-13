import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import { Formik, Form } from 'formik';
import { CommonButton } from 'components/FormControls/Index';
import useStyles from './style';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const Login = ({ signInWithMicrosoft }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className="d_flex d_flex_align d_flex_content_center" style={{ minHeight: '100vh' }}>
      <Formik>
        {() => (
          <Form id="login-form" className={classes.loginForm}>
            <div>
              <Box className={`text_center ${classes.tableBtn}`}>
                <Link to="/login">
                  Bargaining <label className={`text_upperCase pointer`}>Table</label>
                </Link>
              </Box>
              <div className={classes.LoginForm_Title}>
                {/* <h2 className="title">LOG IN</h2> */}
              </div>
              <div>
                <Box className="text_center">
                  <CommonButton
                    fullWidth
                    btnLabel={t('login')}
                    onClick={signInWithMicrosoft}
                    className={classes.loginBtn}
                  />
                </Box>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

Login.propTypes = {
  signInWithMicrosoft: PropTypes.any
};
export default Login;
