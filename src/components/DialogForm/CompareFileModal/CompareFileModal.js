import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { MultiSelect } from 'components/FormControls/Index';
import { useTranslation } from 'react-i18next';
function CompareFileModal({ compareOptions, initialValues, submitCompareFn, formType }) {
  const { t } = useTranslation();
  const [initial, setInitial] = useState(initialValues);
  const [isRefresh, setIsRefresh] = useState(false);
  if (isRefresh) {
    return null;
  }
  return (
    <div>
      <Formik initialValues={initial} onSubmit={(value) => submitCompareFn(value)}>
        {({ setFieldValue, values }) => (
          <Form id={formType}>
            <MultiSelect
              name={'driveItemIDSource'}
              value={initial?.driveItemIDSource}
              label={t('second_version_label')}
              options={compareOptions}
              isClearable={false}
              placeholder={t('current_version_placeholder')}
              onChange={(item) => {
                setFieldValue('driveItemIDSource', item?.value ? item.value : '');
              }}
            />
            <MultiSelect
              name={'driveItemIDTarget'}
              value={initial?.driveItemIDTarget}
              label={t('current_version_label')}
              options={compareOptions}
              isClearable={false}
              placeholder={t('second_version_placeholder')}
              showSyncIcon={true}
              updateToggleValue={async () => {
                if (values) {
                  let swapObj = {
                    driveItemIDSource: values?.driveItemIDTarget ? values?.driveItemIDTarget : '',
                    driveItemIDTarget: values?.driveItemIDSource ? values?.driveItemIDSource : ''
                  };
                  setInitial(swapObj);
                  setIsRefresh(true);
                  setTimeout(() => {
                    setIsRefresh(false);
                  }, 10);
                }
              }}
              onChange={(item) => {
                setFieldValue('driveItemIDTarget', item?.value ? item.value : '');
              }}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
}

CompareFileModal.propTypes = {
  compareOptions: PropTypes.array,
  submitCompareFn: PropTypes.func,
  initialValues: PropTypes.any,
  formType: PropTypes.any
};

export default CompareFileModal;
