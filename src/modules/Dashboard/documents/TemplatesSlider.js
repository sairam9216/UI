import { Box } from '@mui/material';
import { SliderContainer, TemplateCard } from 'components';
import React from 'react';
import PropTypes from 'prop-types';
import useStyle from '../style';
function TemplatesSlider({
  data,
  zoomIconClick,
  copyIconClick,
  TemplateSettings,
  copy_form,
  documentCardClick
}) {
  const classes = useStyle();
  return (
    <SliderContainer settings={TemplateSettings}>
      {data?.map((template, Index) => {
        return (
          <Box key={Index} className={classes.templateCardWrap}>
            <TemplateCard
              templateTitle={template?.name}
              image={template?.thumbnail}
              isCopy
              cardClick={(e) => documentCardClick(e, template)}
              zoomClick={(e) => zoomIconClick(e, template)}
              copyClick={(e) => copyIconClick(e, true, copy_form, template)}
            />
          </Box>
        );
      })}
    </SliderContainer>
  );
}
function areEqual(prevProps, nextProps) {
  return prevProps.data === nextProps.data;
}
TemplatesSlider.propTypes = {
  data: PropTypes.any,
  zoomIconClick: PropTypes.any,
  TemplateSettings: PropTypes.any,
  copy_form: PropTypes.any,
  copyIconClick: PropTypes.any,
  documentCardClick: PropTypes.func
};
export default React.memo(TemplatesSlider, areEqual);
