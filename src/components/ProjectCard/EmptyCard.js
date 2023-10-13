import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import useStyle from './style';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';
import { ButtonIcon } from 'components/FormControls/Index';

const EmptyCard = ({ actionClick }) => {
  const classes = useStyle();
  const { t } = useTranslation();

  return (
    <Box className={classes.cardMain}>
      <Box className={classes.cardInner}>
        <Box className={classes.cardInnerBorder} onClick={(e) => actionClick(e)}>
          <Box className={classes.EmptyCard}>
            <Box className={'text_center'}>
              <ButtonIcon
                aria-label={'Share'}
                size={'medium'}
                Icon={<AddIcon fontSize="medium" />}
                buttonClick={(e) => actionClick(e)}
                className={'bgButton'}
              />
              <h3 className={classes.createButton}>{t('create_new_project')}</h3>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

EmptyCard.propTypes = {
  actionClick: PropTypes.func,
  formType: PropTypes.string
};
export default EmptyCard;
