import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import { InputField, MultiSelect, DatePicker, AddItemInput } from 'components/FormControls/Index';
import { useTranslation } from 'react-i18next';

const CreateProject = ({
  validationSchema,
  initialValues,
  submitProject,
  formType,
  type,
  users
}) => {
  const { t } = useTranslation();
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value) => submitProject(value, { type })}>
        {() => (
          <Form id={formType}>
            <Grid item xs={12}>
              <InputField
                name="name"
                label={t('project_name')}
                placeholder={t('project_name')}
                tooltip
                tooltipMessage={t('tooltip_project_name')}
              />
              <MultiSelect
                name={'owners'}
                value={initialValues?.owners}
                label={t('project_owner')}
                options={users}
                isMulti
                isCreatable
                placeholder={t('add_email')}
              />
              <AddItemInput
                name={'counterParties1List'}
                tooltipMessage={t('tooltip_counter_parties_first')}
                btnLabel={t('add')}
              />
              <DatePicker
                label={t('estimated_project_date')}
                name={'estimatedCompletionDate'}
                minDate={new Date()}
              />
              <InputField
                name="description"
                label={t('description')}
                placeholder={t('add_description')}
                multiline={true}
                rows={3}
              />
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

CreateProject.propTypes = {
  initialValues: PropTypes.any,
  type: PropTypes.any,
  formType: PropTypes.any,
  validationSchema: PropTypes.any,
  submitProject: PropTypes.any,
  users: PropTypes.array
};
export default CreateProject;
