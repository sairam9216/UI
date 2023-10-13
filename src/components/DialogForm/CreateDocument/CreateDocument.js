import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { MultiSelect, InputField, FileUpload } from 'components/FormControls/Index';
import { useTranslation } from 'react-i18next';

const CreateDocument = ({
  formType,
  validationSchema,
  projects,
  submitDocument,
  uploadDocumentData,
  selectedProjectID
}) => {
  const { t } = useTranslation();
  const initialValues = {
    docName: '',
    projectID: selectedProjectID,
    file: ''
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value) => submitDocument(value, formType)}>
        {({ setFieldValue }) => (
          <Form id={formType}>
            {!selectedProjectID && (
              <MultiSelect
                name={'projectID'}
                label={t('project')}
                placeholder={t('select_project')}
                options={projects}
                value={initialValues?.projectID}
                onChange={(item) => {
                  setFieldValue('projectID', item?.value ? item.value : '');
                }}
              />
            )}
            <InputField label={t('title')} placeholder={t('title')} name={'docName'} />
            <FileUpload
              name="file"
              selectedFile={uploadDocumentData}
              setFieldValue={async (fileObj) => {
                setFieldValue('file', fileObj);
                if (fileObj) {
                  let fileName = fileObj[0].name.split('.');
                  setFieldValue('docName', fileName[0]);
                }
              }}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};
CreateDocument.propTypes = {
  formType: PropTypes.string,
  validationSchema: PropTypes.any,
  submitDocument: PropTypes.func,
  projects: PropTypes.array,
  uploadDocumentData: PropTypes.any,
  selectedProjectID: PropTypes.any
};
export default CreateDocument;
