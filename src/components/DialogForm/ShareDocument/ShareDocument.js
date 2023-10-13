import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { MultiSelect, InputField, CommonButton } from 'components/FormControls/Index';
import { useTranslation } from 'react-i18next';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/material';
import useStyle from './style';

const ShareDocument = ({ formType, validationSchema, submitForReview, usersList, docName }) => {
  const classes = useStyle();
  const { t } = useTranslation();
  const initialValues = {
    users: [],
    subject: `${docName}  -  ${t('review')}`,
    message: ''
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value) => submitForReview(value)}>
        {() => (
          <Form id={formType}>
            <Box className={'d_flex d_flex_wrap d_flex_content_between'} sx={{ mb: 2 }}>
              <CommonButton
                form={formType}
                endIcon={<SendIcon />}
                btnLabel={t('send')}
                type="submit"
                uppercase
                className={classes.sendBtn}
              />
              <Box className={classes.usersList}>
                <MultiSelect
                  name={'users'}
                  value={initialValues?.users}
                  // label={t('to')}
                  isMulti
                  isClearable={false}
                  options={usersList}
                  placeholder={t('to')}
                  isCreatable
                  className={classes.usersListDropdown}
                />
                <Box className={classes.noBgField} sx={{ mt: 2 }}>
                  <InputField name="subject" placeholder={'subject'} />
                </Box>
              </Box>
            </Box>

            <InputField
              name="message"
              label={t('message')}
              placeholder={t('please_enter_message')}
              multiline={true}
              rows={5}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
ShareDocument.propTypes = {
  initialValues: PropTypes.any,
  type: PropTypes.any,
  formType: PropTypes.any,
  docName: PropTypes.string,
  validationSchema: PropTypes.any,
  submitForReview: PropTypes.any,
  usersList: PropTypes.array
};
export default ShareDocument;
