import React from 'react';
import PropTypes from 'prop-types';
import { Box, IconButton } from '@mui/material';
import useStyle from './style';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getFormatedDateWithTime } from 'utils';
import { useTranslation } from 'react-i18next';
import AvatarList from 'components/AvatarList/AvatarList';
const ProjectCard = ({
  project,
  isEditable,
  actionClick,
  formType,
  cardClick,
  docLinkClick,
  itemIndex,
  notShowDoc
}) => {
  const { name, counterParties1List, documents, createdDate } = project;
  const classes = useStyle();
  const { t } = useTranslation();
  return (
    <Box className={classes.cardMain}>
      <Box className={classes.cardInner}>
        <Box
          className={classes.cardInnerBorder}
          onClick={() => (cardClick ? cardClick(project.projectID) : '')}>
          <Box className={classes.headerTop}>
            <Box>
              <h4 className={`singleLine ${classes.headerTitle}`}>{name}</h4>
            </Box>
          </Box>
          <Box>
            <Box className={classes.userInfo}>
              <Box component="label" className={classes.counterTitle} sx={{ pb: 1 }}>
                {t('counter_parties')}
              </Box>
              {counterParties1List.length > 0 ? (
                <Box className="">
                  <AvatarList max={4} avatarArray={counterParties1List} />
                </Box>
              ) : (
                <Box>
                  <p className={classes.notAvailable}>Not available</p>
                </Box>
              )}
            </Box>
          </Box>
          {!notShowDoc && (
            <Box className={classes.description}>
              {documents.length === 0 ? (
                <p>{t('no_documents_found')}</p>
              ) : (
                documents?.map((doc, Index) => {
                  return (
                    <p
                      className={classes.textUnderline}
                      key={Index}
                      onClick={(e) => docLinkClick(e, doc)}>
                      {doc?.name}
                    </p>
                  );
                })
              )}
            </Box>
          )}
          <Box
            className={`d_flex d_flex_align d_flex_content_between d_flex_wrap ${classes.dateBox}`}>
            <p className={classes.DateText}>
              {createdDate && getFormatedDateWithTime(createdDate)}
            </p>
            {isEditable && (
              <Box className={`d_flex d_flex_wrap ${classes.actionsButtons}`}>
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={(e) => actionClick(e, true, formType, 'edit', project, itemIndex)}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="delete"
                  size="small"
                  onClick={(e) => actionClick(e, true, formType, 'delete', project)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
  isEditable: PropTypes.bool,
  actionClick: PropTypes.func,
  formType: PropTypes.string,
  cardClick: PropTypes.func,
  docLinkClick: PropTypes.func,
  itemIndex: PropTypes.any,
  notShowDoc: PropTypes.bool
};

export default ProjectCard;
