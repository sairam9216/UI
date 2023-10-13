/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import CreateProject from './CreateProject';
import * as Yup from 'yup';
import { useAddProjectMutation, useUpdateProjectMutation } from 'store/API/projectApi';
import { Loader } from 'components';
import i18n from 'i18next';
import AlertMessage from 'utils/AlertMessage';
import ResponseHandler from 'utils/ResponseHandler';
import { useNavigate } from 'react-router-dom';

let today = new Date();
today.setHours(0, 0, 0, 0);

const ProjectCreateSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, i18n.t('error.project_name_too_short'))
    .max(51, i18n.t('error.max_allow_fifty_character'))
    .required(i18n.t('error.project_name_is_required')),
  // owners: Yup.array().min(1, i18n.t('error.owner_is_required')).required(),
  owners: Yup.array()
    .transform(function (value, originalValue) {
      if (this.isType(value) && value !== null) {
        return value;
      }
      return originalValue ? originalValue.split(/[\s,]+/) : [];
    })
    .of(Yup.string().email(({ value }) => ` ${i18n.t('error.is_not_valid')}: ${value}; `))
    .min(1, i18n.t('error.owner_is_required'))
    .required(),
  description: Yup.string().max(1000, 'This field has to be grater than 1000 characters!'),
  counterParties1List: Yup.array().min(1, i18n.t('error.counter_party_is_required')).required(),
  estimatedCompletionDate: Yup.date()
    .required(i18n.t('error.estimatedCompletionDate_is_required'))
    .typeError(i18n.t('error.please_Select_Valid_Date'))
    .min(today, i18n.t('error.date_cannot_past'))
    .nullable()
  // Yup.array().test('Unique', 'Counter parties must be unique', (values) => {
  //   return new Set(values).size === values.length;
  // })
});

const CreateProjectContainer = ({
  initialValues,
  formType,
  type,
  id,
  close,
  users,
  setDefaultPagination
}) => {
  const [addProject, { isLoading: addLoading }] = useAddProjectMutation();
  const [updateProject, { isLoading: updateLoading }] = useUpdateProjectMutation();
  const navigate = useNavigate();

  const usersOptions = users?.map((item) => {
    return {
      label: `${item?.displayName} (${item?.email})`,
      value: item.email,
      Image: 'https://via.placeholder.com/150'
    };
  });

  const SubmitProject = async (value) => {
    try {
      const projectInfo = type === 'edit' ? await updateProject(value) : await addProject(value);
      if (projectInfo?.data && projectInfo?.data?.status) {
        if (type !== 'edit') {
          localStorage.setItem('openDocument', true);
          navigate(`/project-documents/${projectInfo?.data?.data?.projectID}`);
        } else {
          setDefaultPagination();
        }
      }
      ResponseHandler(projectInfo, close);
    } catch (error) {
      AlertMessage(error, 'error');
    }
  };

  return (
    <>
      <CreateProject
        validationSchema={ProjectCreateSchema}
        initialValues={initialValues}
        submitProject={SubmitProject}
        formType={formType}
        type={type}
        id={id}
        users={usersOptions}
      />
      {(addLoading || updateLoading) && <Loader />}
    </>
  );
};

CreateProjectContainer.propTypes = {
  initialValues: PropTypes.any,
  formType: PropTypes.any,
  type: PropTypes.any,
  id: PropTypes.any,
  submitProject: PropTypes.any,
  close: PropTypes.func,
  setDefaultPagination: PropTypes.func,
  users: PropTypes.array
};
CreateProjectContainer.defaultProps = {
  setDefaultPagination: () => {}
};
export default CreateProjectContainer;
