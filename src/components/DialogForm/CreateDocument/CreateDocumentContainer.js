import React from 'react';
import PropTypes from 'prop-types';
import CreateDocument from './CreateDocument';
import * as Yup from 'yup';
import i18n from 'i18next';
import { useAddDocumentMutation } from 'store/API/documentApi';
import AlertMessage from 'utils/AlertMessage';
import ResponseHandler from 'utils/ResponseHandler';
import { Loader } from 'components';
import { useNavigate } from 'react-router-dom';
import { getSharePointUrl } from 'utils';

const FILE_SIZE = 50 * 1024 * 1024;
const SUPPORTED_FORMATS = [
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/msword'
];

const DocumentCreateSchema = Yup.object().shape({
  projectID: Yup.string().trim().required(i18n.t('error.project_is_required')),
  docName: Yup.string()
    .trim()
    .min(2, i18n.t('error.document_title_too_short'))
    .max(100, i18n.t('error.max_allow_hundred_character'))
    .required(i18n.t('error.document_title_is_required')),
  file: Yup.mixed()
    .required(i18n.t('error.document_is_required'))
    .test('fileSize', 'Max file size 50 MB', (value) => value && value[0].size <= FILE_SIZE)
    .test(
      'fileFormat',
      'File is not valid format only allow .doc or .docx file',
      (value) => value && SUPPORTED_FORMATS.includes(value[0].type)
    )
});

const CreateDocumentContainer = ({
  projects,
  formType,
  close,
  uploadDocumentData,
  selectedProjectID
}) => {
  const [addDocument, { isLoading: addLoading }] = useAddDocumentMutation();
  let navigate = useNavigate();
  const projectsOptions = projects?.map((item) => {
    return {
      label: item.name,
      value: item.projectID
    };
  });

  const SubmitDocument = async (value, formName) => {
    try {
      const formData = new FormData();
      const [file] = value.file;
      formData.append('file', file);
      formData.append('projectID', value.projectID);
      formData.append('Name', value.docName);
      formData.append('source', 'UI');
      const documentInfo = await addDocument(formData);
      if (documentInfo?.data && documentInfo?.data?.status) {
        close();
        if (formName === 'negotiation-project') {
          localStorage.setItem('subject', value?.docName);
          localStorage.setItem('UploadDocumentID', documentInfo?.data?.data?.id);
          navigate(`/project-documents/${value.projectID}`, { replace: true });
        } else {
          window.location.href = getSharePointUrl(documentInfo?.data?.data?.webUrl);
        }
      } else {
        ResponseHandler(documentInfo, close);
      }
    } catch (error) {
      AlertMessage(error, 'error');
    }
  };

  return (
    <>
      <CreateDocument
        validationSchema={DocumentCreateSchema}
        submitDocument={SubmitDocument}
        projects={projectsOptions}
        formType={formType}
        uploadDocumentData={uploadDocumentData}
        selectedProjectID={selectedProjectID}
      />
      {addLoading && <Loader />}
    </>
  );
};

CreateDocumentContainer.propTypes = {
  projects: PropTypes.array,
  formType: PropTypes.string,
  close: PropTypes.func,
  uploadDocumentData: PropTypes.any,
  selectedProjectID: PropTypes.any
};
CreateDocumentContainer.defaultProps = {
  projects: [],
  formType: '',
  close: () => {},
  uploadDocumentData: [],
  selectedProjectID: ''
};
export default CreateDocumentContainer;
