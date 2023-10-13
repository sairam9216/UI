import React from 'react';
import { CustomContainer } from 'components';
import { useTranslation } from 'react-i18next';
import { Grid, Container, Box } from '@mui/material';
import LanguageSelection from 'components/LanguageSelection/LanguageSelection';
import ThemeSelection from 'components/ThemeSelection/ThemeSelection';
import useStyle from './style';

const Setting = () => {
  const { t } = useTranslation();
  const classes = useStyle();

  return (
    <>
      <Box className={classes.headerWrapper}>
        <CustomContainer>
          <Box className={`text_center`}>
            <h1 className={classes.pageTitle}>{t('settings')}</h1>
            <p className={classes.pageSubtitle}> </p>
          </Box>
        </CustomContainer>
      </Box>
      <CustomContainer>
        <Grid container spacing={2} sx={{ py: 3 }}>
          <Grid item xs={12} sm={12} md={12}>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                py: 4
              }}>
              <Container maxWidth="lg">
                <Box sx={{ pt: 3 }}>
                  <LanguageSelection />
                </Box>
                <Box sx={{ pt: 3 }}>
                  <ThemeSelection />
                </Box>
              </Container>
            </Box>
          </Grid>
        </Grid>
      </CustomContainer>
    </>
  );
};

export default Setting;
