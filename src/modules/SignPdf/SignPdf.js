/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link } from 'react-router-dom';
import { ArrowBack } from 'utils/images';
import Tooltip from '@mui/material/Tooltip';

import useStyle from './style';

const SignPdf = ({ data }) => {
  const { signers, pdfContent } = data;
  const { t } = useTranslation();
  const classes = useStyle();
  return (
    <>
      <Grid item sm={10}>
        <Box className={classes.linkText}>
          <Link to="/dashboard">
            <img src={ArrowBack} alt="back" /> {'Back'}
          </Link>
        </Box>
        <Box style={{ height: '85vh' }}>
          <iframe
            src={`data:application/pdf;base64,${pdfContent}`}
            width={'100%'}
            height={'100%'}
            style={{ border: 'none' }}
            download={'filename.pdf'}
          />
        </Box>
      </Grid>
      <Grid item sm={2}>
        <Box style={{ marginLeft: 20 }}>
          <Box component="h4" className={classes.documentNameTitle}>
            Signature Status
          </Box>
          <Box component="p" className="grayText">
            Signature status of each user.
          </Box>
          <Box sx={{ marginTop: 2 }}>
            {signers?.map((user, Index) => {
              return (
                <Box key={Index} className={`d_flex d_flex_align ${classes.labelContainer}`}>
                  {user.signed ? (
                    <CheckCircleOutlineIcon style={{ color: '#2AAD1B' }} />
                  ) : (
                    <HighlightOffIcon style={{ color: '#ED4B4B' }} />
                  )}
                  <Tooltip
                    title={user.email}
                    arrow
                    placement="top"
                    onClick={(e) => e.stopPropagation()}>
                    <Box component="p" className={classes.listLabel}>
                      {user.name}
                    </Box>
                  </Tooltip>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default SignPdf;
