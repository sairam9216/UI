import { Box } from '@mui/material';
import { CommonButton } from 'components/FormControls/Index';
import React from 'react';
import { useTranslation } from 'react-i18next';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import useStyle from '../style';
import bannerImage from './../images/banner.png';
import { useMsal } from '@azure/msal-react';
import { loginRequest } from 'config';

const Banner = () => {
  const classes = useStyle();
  const { t } = useTranslation();
  const { instance } = useMsal();

  const signInWithMicrosoft = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  return (
    <Box className={classes.bannerSection}>
      <Box className={`text_center ${classes.bannerTop}`}>
        <h1 className={classes.bannerTitle}>Beautiful analytics to grow smarter</h1>
        <p className={classes.bannerSubtitle}>
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain
          more users. Trusted by over 4,000 startups.
        </p>
      </Box>
      <Box
        className={`text_center d_flex d_flex_content_center d_flex_align ${classes.buttonWrapper}`}>
        <Box className={classes.btnMargin}>
          <CommonButton
            btnLabel={'Demo'}
            className={'btnSecondary'}
            startIcon={<PlayCircleOutlineOutlinedIcon />}
            size="medium"></CommonButton>
        </Box>
        <Box className={classes.btnMargin}>
          <CommonButton
            btnLabel={t('login')}
            size="medium"
            onClick={() => signInWithMicrosoft()}></CommonButton>
        </Box>
      </Box>
      <Box className="text_center">
        <img src={bannerImage} alt="banner" width="768" />
      </Box>
    </Box>
  );
};

export default Banner;
