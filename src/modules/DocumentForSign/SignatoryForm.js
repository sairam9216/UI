/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';
import { Formik, Form } from 'formik';
import { CommonButton } from 'components/FormControls/Index';
import useStyles from './style';
import EntityPart from './Entity';

function SignatoryForm({
  foramData,
  saveSignatory,
  addSignatory,
  signLabel,
  handleChange,
  validationSchema,
  removeForm,
  handleEntityChange,
  changeInnerLabel,
  action,
  cancleUpate,
  removeActionState
}) {
  const classes = useStyles();

  return (
    <div>
      <Formik
        initialValues={foramData}
        onSubmit={(value) => {
          if(action === 'update'){
            saveSignatory(value)
          }else{
            saveSignatory()
          }
        }}
        validationSchema={validationSchema}>
        {({ errors, values }) => (
          <Form id="saveSignatory">
            {foramData?.map((item, index) => {
              return (
                <Box key={index}>
                  <Box className={classes.formBox}>
                    <Box>
                     <EntityPart
                        item={item}
                        handleChange={handleChange}
                        index={index}
                        signLabel={signLabel}
                        changeInnerLabel={changeInnerLabel}
                        handleEntityChange={handleEntityChange}
                        errors={errors}
                        removeForm={removeForm}
                        removeActionState={removeActionState}
                      />
                    </Box>
                    
                  </Box>
                </Box>
              );
            })}
            {action === 'create' && (<p className={`pointer ${classes.addSignatory}`} onClick={() => addSignatory()}>
              + Add Another Signatory
            </p>)}
            <Box className="d_flex" sx={{ my: 3 }}>
              <Box sx={{ mr: 1 }}>
                <CommonButton
                  btnLabel="Save"
                  size="small"
                  type="submit"
                  form="saveSignatory"></CommonButton>
              </Box>
              {action === 'update' && (
              <Box>
                <CommonButton
                  btnLabel="Cancel"
                  size="small"
                  className="btnSecondary"
                  onClick={cancleUpate}
                  ></CommonButton>
              </Box>
              )}
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default SignatoryForm;
