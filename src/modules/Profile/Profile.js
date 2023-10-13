/* eslint-disable */
import { CustomContainer } from 'components';
import React, { useState } from 'react';
import { Avatar, Box, Button, Grid } from '@mui/material';
import { CommonButton, InputField } from 'components/FormControls/Index';
import { Formik, Form } from 'formik';
import useStyle from './style';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().trim().required(),
  lastName: Yup.string().trim().required(),
  company: Yup.string().trim().required()
});
const Profile = ({ initialValues, updateProfile, handleImageChange, previewUrl }) => {
  const classes = useStyle();

  return (
    <Box className={classes.profileOuter} sx={{ py: 4.5 }}>
      <CustomContainer maxWidth="sm">
        <Box sx={{ p: 2.5 }} className={classes.profileInner}>
          <Box component="p" sx={{ mb: 2.5 }} className={classes.title}>
            My Profile
          </Box>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(value) => updateProfile(value)}>
            {() => (
              <Form id="profile-form">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <Box className="d_flex d_flex_align">
                      <Box sx={{ mr: 1 }}>
                        <Avatar alt="Profile" src={previewUrl?.photoBase64} sx={{ width: 80, height: 80 }} />
                      </Box>
                      <Box component="label" className={`pointer ${classes.photoLink}`}>
                        Add Photo
                        <input
                          type="file"
                          name="profile"
                          hidden
                          onChange={(e) => handleImageChange(e)}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box>
                      <InputField name={'firstName'} label="First  Name" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box>
                      <InputField name={'lastName'} label="Last  Name" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box>
                      <InputField name={'company'} label="Company" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box>
                      <InputField name={'title'} label="Title" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box>
                      <InputField name={'primaryContact'} label="Primary contact" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box>
                      <InputField name={'secondaryContact'} label="Secondary contact" />
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Box>
                      <InputField name={'email'} label="Email Address" disabled />
                    </Box>
                  </Grid>
                </Grid>
                <Box sx={{ mt: 2.5, pb: 3, borderBottom: 1 }}>
                  <CommonButton btnLabel="Save Change" type="submit" form="profile-form" />
                </Box>
              </Form>
            )}
          </Formik>
          <Box sx={{ py: 2.5 }}>
            <Box component="p" sx={{ mb: 2.5 }}>
              Delete account
            </Box>
            <Box component="p" sx={{ mb: 2.5 }}>
              This will remove all your data from our system and is not reversible.
            </Box>
            <Box>
              <Button variant="outlined" type="submit" color="error" form={'profile-form'}>
                Delete My Account
              </Button>
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Profile;
