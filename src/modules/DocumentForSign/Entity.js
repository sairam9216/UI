/* eslint-disable */
import React from 'react';
import { Box, Grid } from '@mui/material';
import { CommonButton, InputField } from 'components/FormControls/Index';
import useStyles from './style';
import { SignatureIcon } from 'utils/images';
import CloseIcon from '@mui/icons-material/Close';

const EntityPart = ({
  handleChange,
  item,
  index,
  signLabel,
  handleEntityChange,
  changeInnerLabel,
  removeForm,
  removeActionState
}) => {
  const classes = useStyles();
  return (
    <Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            {item?.entities && item?.entities?.map((field, arrIndex) => {
              return (
                <Box key={arrIndex}>
                    <Box className="d_flex d_flex_content_between">
                      <Box className={classes.radionBtnContainer}>
                        {signLabel?.map((list, i) => {
                          return (
                            <label className={classes.signLabel} key={i}>
                              <input
                                type="radio"
                                name={`signLabelBy`}
                                value={list?.value}
                                checked={list?.value == 'Entity'}
                                onChange={(e) => changeInnerLabel(e, item, arrIndex)}
                              />
                              <span className={list?.value == 'Entity' ? 'active' : ''}>
                                {list?.value}
                              </span>
                            </label>
                          );
                        })}
                      </Box>
                      {index !=0 && arrIndex === 0 ? (
                        <Box component="span" className="pointer" onClick={() => removeForm(item)}>
                          <CloseIcon />
                        </Box>
                      ) : (
                        ''
                      )}
                  </Box>
                  <Box sx={{ mb: 2 }} key={arrIndex}>
                    <InputField
                      placeholder={'Entity Name'}
                      name={'entityName'}
                      value={field?.entityName}
                      required
                      onChange={(e) => handleEntityChange(e, field, item)}
                    />
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Grid>
        
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
          <Box className="d_flex d_flex_content_between">
                  <Box className={classes.radionBtnContainer}>
                    {signLabel?.map((list, i) => {
                      return (
                        <label className={classes.signLabel} key={i}>
                          <input
                            type="radio"
                            name={`signLabelBy`}
                            value={list?.value}
                            checked={list?.value == 'Individual'}
                            onChange={(e) => changeInnerLabel(e, item,0)}
                          />
                          <span className={list?.value == 'Individual' ? 'active' : ''}>
                            {list?.value}
                          </span>
                        </label>
                      );
                    })}
                  </Box>
                  {item?.entities.length === 0 && index !=0 ? (
                        <Box component="span" className="pointer" onClick={() => removeForm(item)}>
                          <CloseIcon />
                        </Box>
                      ) : (
                        ''
                      )}
                  </Box>
      
                  
            
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item sm={12} lg={6}>
          {item?.entities.length === 0 ? (<Box sx={{ mb: 2, borderBottom: 1 }}>
              <SignatureIcon />
            </Box>):(<Box sx={{ mb: 2 }}>
              <span>By :</span>
              <Box
                component="span"
                sx={{
                  borderBottom: 1,
                  width: 120,
                  ml: 1,
                  display: 'inline-block'
                }}></Box>
            </Box>)}

          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} lg={6}>
            <InputField
              placeholder={item?.entities.length === 0 ? 'Name': 'Individual Name'}
              name={`name`}
              required
              value={item?.name}
              onChange={(e) => handleChange(e, index)}
            />
          </Grid>
          {item?.entities.length > 0 && (
            <Grid item xs={12} sm={12} lg={6}>
              <InputField
                placeholder={'Title'}
                name={'title'}
                value={item?.title}
                required
                onChange={(e) => handleChange(e, index)}
              />
            </Grid>
          )}

          <Grid item xs={12} sm={12} lg={item?.entities.length === 0 ? 6 :12}>
            <Box sx={{ mb: 2 }}>
              <InputField
                placeholder={'Email'}
                name={`email`}
                type={'email'}
                value={item?.email}
                required
                onChange={(e) => handleChange(e, index)}
              />
            </Box>
          </Grid>
                
        </Grid>
      </Box>
    </Box>
  );
};

export default EntityPart;
