import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { MultiSelect, InputField } from 'components/FormControls/Index';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import i18n from 'i18next';
function CopyDocument({ formType, submitDocument, projects, initialValues }) {
  const { t } = useTranslation();

  const validationSchema = Yup.object().shape({
    projectID: Yup.string().trim().required(i18n.t('error.project_is_required')),
    name: Yup.string()
      .trim()
      .min(2, i18n.t('error.document_title_too_short'))
      .max(250, i18n.t('error.max_allow_two_fifty_character'))
      .required(i18n.t('error.document_title_is_required'))
  });
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value) => submitDocument(value)}>
        {({ setFieldValue }) => (
          <Form id={formType}>
            <MultiSelect
              name={'projectID'}
              label={t('project')}
              placeholder={t('select_project')}
              options={projects}
              value={initialValues?.ProjectID}
              onChange={(item) => {
                setFieldValue('ProjectID', item?.value ? item.value : '');
              }}
            />
            <InputField label={t('title')} placeholder={t('title')} name={'name'} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
CopyDocument.propTypes = {
  formType: PropTypes.string,
  submitDocument: PropTypes.func,
  projects: PropTypes.array,
  initialValues: PropTypes.object
};
export default CopyDocument;
