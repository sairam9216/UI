import React from 'react';
import CopyDocument from './CopyDocument';
import PropTypes from 'prop-types';
import { useGetAllProjectDropdownQuery } from 'store/API/projectApi';
import { useDocumentCopyMutation } from 'store/API/documentApi';
import ResponseHandler from 'utils/ResponseHandler';
import { Loader } from 'components';
import { getSharePointUrl } from 'utils';

function CopyDocumentContainer({ formType, projectInfo, close }) {
  const { driveItemID, name } = projectInfo;
  const [documentCopy, { isLoading: copyLoading }] = useDocumentCopyMutation();
  const { data: allDropdown } = useGetAllProjectDropdownQuery();
  const projectsOptions = allDropdown?.data?.map((item) => {
    return {
      label: item.name,
      value: item.projectID
    };
  });
  const initialValues = {
    name: name,
    projectID: '',
    driveItemID: driveItemID,
    source: 'UI'
  };
  const submitDocument = async (value) => {
    const documentInfo = await documentCopy(value);
    if (documentInfo?.data && documentInfo?.data?.status) {
      const url = getSharePointUrl(documentInfo?.data?.data?.webUrl);
      window.location.href = url;
    } else {
      ResponseHandler(documentInfo, close);
    }
  };

  return (
    <>
      <CopyDocument
        submitDocument={submitDocument}
        projects={projectsOptions}
        formType={formType}
        projectInfo={projectInfo}
        initialValues={initialValues}
      />
      {copyLoading && <Loader />}
    </>
  );
}

CopyDocumentContainer.propTypes = {
  formType: PropTypes.string,
  projects: PropTypes.array,
  projectInfo: PropTypes.any,
  close: PropTypes.func
};

export default CopyDocumentContainer;
