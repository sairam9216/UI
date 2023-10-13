/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import useStyle from './style';
import cardBg from './cardBg.png';
import LanIcon from '@mui/icons-material/Lan';
import { useNavigate } from 'react-router-dom';
import DocumentHistoryTreeIcon from 'assets/images/document_history_tree_icon';

const ProjectDocumentCard = ({
  activeIndex,
  docInfo,
  docLinkClick,
  activeCard
}) => {
  const classes = useStyle();
  const navigate = useNavigate();

  return (
    <Box
      className={`relative pointer ${classes.cardMain} ${classes.docTopCardMain} ${
        activeCard && 'activeCard'
      }`}
      style={{width: '15.625rem', height: '20.454rem'}}
      onClick={(e) => {
        docLinkClick(e, activeIndex);
      }}>
      <Box className={`relative docImgWrap ${classes.docImgWrap}`}>
        <img
          src={docInfo?.thumbnail ? docInfo?.thumbnail : cardBg}
          alt="document"
          className={classes.docImg}
        />
      </Box>
      <Box
        className={`d_flex d_flex_content_between flex_direction_col docInfoTop ${
          classes.docInfoTop
        } ${activeCard && 'activeCard'}`}>
        <div>
          {docInfo?.name && (
            <p className={`wordwrap twoLine ${classes.documentTitle}`}>{docInfo.name}</p>
          )}
        </div>
        <div>
          <div className="d_flex d_flex_content_between">
            <span className={'d_flex d_flex_align'} onClick={() => {
                  navigate(
                    `/document-history-detail/${docInfo?.documentID}/${docInfo?.driveItemID}`
                  );
                }}>
              <DocumentHistoryTreeIcon />
              <span className={`draftText ${classes.draftText}`}>Full Document History</span>
            </span>
          </div>
        </div>
      </Box>
    </Box>
  );
};

ProjectDocumentCard.propTypes = {
  activeIndex: PropTypes.number,
  docInfo: PropTypes.any,
  docLinkClick: PropTypes.any,
  activeCard: PropTypes.bool
};
export default ProjectDocumentCard;
