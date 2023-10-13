import { CustomContainer } from 'components';
import React, { useState } from 'react';
import useStyle from '../style';
import { Link } from 'react-router-dom';
import { CommonButton, InputField } from 'components/FormControls/Index';
import { Formik, Form } from 'formik';
import { Box } from '@mui/material';

function Footer() {
  const classes = useStyle();
  const [footerMenus] = useState([
    {
      menuTitle: 'Overview',
      url: ''
    },
    {
      menuTitle: 'Features',
      url: ''
    },
    {
      menuTitle: 'Pricing',
      url: '/pricing'
    },
    {
      menuTitle: 'Careers',
      url: ''
    },
    {
      menuTitle: 'Help',
      url: ''
    },
    {
      menuTitle: 'Privacy',
      url: ''
    }
  ]);
  const [footerBottomMenues] = useState([
    {
      menuTitle: 'Terms',
      url: ''
    },
    {
      menuTitle: 'Privacy',
      url: ''
    },
    {
      menuTitle: 'Cookies',
      url: '/'
    }
  ]);
  const initialValues = {
    subscribe: ''
  };
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <CustomContainer>
          <div className="d_flex d_flex_wrap d_flex_content_between d_flex_align">
            <div className="">
              <div className={`${classes.ColumnFirst}`}>
                <Link to="/" className={classes.footerLogo}>
                  Bargaining <label className="pointer">Table</label>
                </Link>
                {/* <p>Design amazing digital experiences that create more happy in the world.</p> */}
              </div>
              <div className="d_flex d_flex_wrap">
                {footerMenus?.map((menu, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Link to="/" className={classes.footerMenuTitle}>
                        {menu?.menuTitle}
                      </Link>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
            <div className={classes.subscribeWrap}>
              <Formik initialValues={initialValues}>
                {() => (
                  <Form id={'subscribr-form'}>
                    <div className="d_flex d_flex_align_end">
                      <Box sx={{ p: 1 }} className={classes.inputSubscribe}>
                        <InputField
                          label="Stay up to date"
                          name={'subscribe'}
                          placeholder={'Enter your email'}
                          className="inputField"
                        />
                      </Box>
                      <Box sx={{ p: 1 }}>
                        <CommonButton btnLabel="Subscribe"></CommonButton>
                      </Box>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </CustomContainer>
      </div>
      <div className={classes.footerBottom}>
        <CustomContainer>
          <div
            className={`d_flex d_flex_wrap d_flex_align d_flex_content_between ${classes.footerBottomFlex}`}>
            <div className={classes.copyRightWrap}>
              <p>&copy; {new Date().getFullYear()} Bargaining Table. All rights reserved.</p>
            </div>
            <div>
              <ul className="d_flex d_flex_align">
                {footerBottomMenues?.map((menu, i) => {
                  return (
                    <li key={i}>
                      <a href="#" className={classes.footerMenuTitle}>
                        {menu?.menuTitle}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </CustomContainer>
      </div>
    </footer>
  );
}

export default Footer;
