/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetDocumentHistoryDetailQuery,
  useGetDocumentCompareOptionsQuery,
  useDocumentCompareMutation
} from 'store/API/documentApi';
import AlertMessage from 'utils/AlertMessage';
import Loader from 'components/Loader/Loader';
import DocumentHistoryDetail from './DocumentHistoryDetail';
import { getFormatedDateWithTime, getRandomValue, getSharePointUrl } from 'utils';
import { MarkerType } from 'reactflow';
import { CompareFileModal, DialogFormContainer } from 'components';
import ResponseHandler from 'utils/ResponseHandler';
import useGetDocumentOpenLink from 'hooks/GetDocumentOpenLink/GetDocumentOpenLink';
import { CommonButton } from 'components/FormControls/Index';
import { CloseOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';
import i18n from 'i18nextInit';

const uid = getRandomValue();
function DocumentHistoryDetailContainer() {
  const navigate = useNavigate();
  const [documentHistoryData, setDocumentHistoryData] = useState(null);
  const { id, driveItemID } = useParams();
  const [compareOptions, setCompareOptions] = useState([]);
  const [isCompareOpen, setIsOpenCompare] = useState(false);
  const { isLoading, data, error } = useGetDocumentHistoryDetailQuery({
    DocumentID: id,
    uid: uid
  });
  const [resetCompareSelected, setResetCompareSelected] = useState(false);
  const { data: compareData } = useGetDocumentCompareOptionsQuery(driveItemID);
  const initialValues = { driveItemIDSource: '', driveItemIDTarget: '' };
  const [initialCompareValue, setInitialCompareValue] = useState(initialValues);
  const [documentCompare, { isLoading: compareLoading }] = useDocumentCompareMutation();
  const {
    isLinkClickLoading,
    documentLinkClick,
    isAskForViewOrCreateDocumentModal,
    hideAskForViewOrCreateModal,
    documentViewEditLink,
    documentCreateCopyLink
  } = useGetDocumentOpenLink();

  useEffect(() => {
    if (compareData && compareData?.status) {
      let options = compareData?.data?.target?.map((list) => {
        return {
          label: list?.activityLabel + ' ' + getFormatedDateWithTime(list?.activityDate),
          value: list?.driveItemID
        };
      });
      setCompareOptions(options);
    }
  }, [compareData]);

  useEffect(() => {
    if (data && data?.status) {
      let nodeList = data?.data?.nodes;
      let edgeList = data?.data?.edges;
      let tempHoverEdgesList = data?.data?.hoverEdges;

      let newNodeList = [];
      nodeList.forEach((node) => {
        let nodeDetail = { ...node };
        nodeDetail.id = node.id.toString();
        nodeDetail.type = 'CustomCard';
        nodeDetail.position = { x: 0, y: 0 };
        nodeDetail.modifiedDate = getFormatedDateWithTime(node.modifiedDate, 'MMMM Do YYYY');
        nodeDetail.modifiedDateTime = getFormatedDateWithTime(node.modifiedDate, 'hh:mm a');
        nodeDetail.isShareLineEnabled =
          edgeList.filter(
            (x) => x.source == nodeDetail.id && (x.edgeType == 'Share' || x.edgeType == 'Reply')
          ).length > 0
            ? true
            : false;

        nodeDetail.isCompareLineEnabled =
          edgeList.filter((x) => x.source == nodeDetail.id && x.edgeType == 'Compare').length > 0
            ? true
            : false;
        nodeDetail.isDraftLineEnabled =
          edgeList.filter((x) => x.source == nodeDetail.id && x.edgeType == 'Draft').length > 0
            ? true
            : false;
        nodeDetail.data = { ...nodeDetail, isCompareSelected: false };
        newNodeList.push(nodeDetail);
      });

      let updateEdgesList = [];
      edgeList.forEach((edge) => {
        let edgeDetail = { ...edge };
        edgeDetail.id = edge.id.toString() + '_' + Math.random();
        edgeDetail.type = 'custom';
        edgeDetail.sourceHandle = 'internal';
        edgeDetail.style = { stroke: 'black' };
        edgeDetail.markerEnd = {
          type: MarkerType.Arrow,
          color: 'black'
        };
        if (edgeDetail.edgeType == 'Share' || edgeDetail.edgeType == 'Reply') {
          edgeDetail.style = { stroke: 'green', strokeDasharray: 2 };
          edgeDetail.markerEnd = { type: MarkerType.Arrow, color: 'green' };
          edgeDetail.sourceHandle = 'Share';
        }
        if (edgeDetail.edgeType == 'Compare') {
          edgeDetail.style = { stroke: 'red' };
          edgeDetail.markerEnd = { type: MarkerType.Arrow, color: 'red' };
          edgeDetail.sourceHandle = 'Compare';
        }
        if (edgeDetail.edgeType == 'individual') {
          edgeDetail.style = { stroke: 'transparent' };
          edgeDetail.markerEnd = { type: MarkerType.Arrow, color: 'transparent' };
        }
        edgeDetail.markerEnd = { ...edgeDetail.markerEnd, type: MarkerType.Arrow };
        updateEdgesList.push(edgeDetail);
      });

      let hoverEdgesList = [];
      tempHoverEdgesList.forEach((edge) => {
        let edgeDetail = { ...edge };
        edgeDetail.sourceHandle = 'Share';
        edgeDetail.type = 'smartstep';
        edgeDetail.style = { stroke: 'red', strokeDasharray: 2 };
        if (edgeDetail.edgeType === 'CompareMerge') {
          edgeDetail.style = { stroke: 'red' };
        }
        edgeDetail.markerEnd = {
          type: MarkerType.Arrow,
          color: 'red'
        };
        edgeDetail.isHoverEdge = true;
        hoverEdgesList.push(edgeDetail);
      });
      setDocumentHistoryData({
        nodes: newNodeList,
        edges: updateEdgesList,
        hoverEdgesList: hoverEdgesList
      });
    }
  }, [data]);

  useEffect(() => {
    if (error) {
      if (error?.status === 400) {
        AlertMessage(error.data.message, 'error');
        navigate('/dashboard');
      }
    }
  }, [error]);

  const showCompareModal = (data) => {
    let targetId = data[0]['driveItemID'];
    let sourceId = data[1]['driveItemID'];

    if(data[0]['versionLabel'] && data[1]['versionLabel']){
      if(parseInt(data[0]['versionLabel'].slice(1)) > parseInt(data[1]['versionLabel'].slice(1))){
        sourceId = data[0]['driveItemID'];
        targetId =  data[1]['driveItemID'];
      }
    }
    setInitialCompareValue({ driveItemIDSource: sourceId, driveItemIDTarget: targetId });
    setResetCompareSelected(false);
    setIsOpenCompare(true);
  };

  const closeCompareModal = () => {
    setIsOpenCompare(false);
    setResetCompareSelected(true);
  };

  const submitCompareFn = async (value) => {
    if(value.driveItemIDSource === value.driveItemIDTarget)
    {
      AlertMessage('Base Version and Changed Version are same please select different option','error')
    }
    else
    {
      const documentCompareInfo = await documentCompare(value);
      closeCompareModal();
      if (documentCompareInfo?.data && documentCompareInfo?.data?.status) {
        window.location.href = getSharePointUrl(documentCompareInfo?.data?.data?.webUrl);
      } else {
        if (documentCompareInfo?.error && documentCompareInfo?.error?.data?.message === 'TrackChangesError') {
            AlertMessage('One or More of the selected documents contains track changes. You can not compare a document that has track changes.', 'error');
        }
        else{
           ResponseHandler(documentCompareInfo);
        } 
      }
    }
  };

  return (
    <>
      {documentHistoryData && (
        <DocumentHistoryDetail
          initialNodes={documentHistoryData?.nodes}
          initialEdges={documentHistoryData?.edges}
          hoverEdgesList={documentHistoryData?.hoverEdgesList}
          showCompareModal={showCompareModal}
          resetCompareSelected={resetCompareSelected}
          documentLinkClick={documentLinkClick}
        />
      )}

      <DialogFormContainer
        open={isCompareOpen}
        dialogSize={'sm'}
        isHeader
        headerTitle={'Compare Documents'}
        isFooter
        footerBtnFirstLabel={'Compare'}
        footerBtnSecondLabel={'Cancel'}
        formType={'compareForm'}
        close={closeCompareModal}>
        <CompareFileModal
          formType={'compareForm'}
          compareOptions={compareOptions}
          initialValues={initialCompareValue}
          submitCompareFn={submitCompareFn}
        />
      </DialogFormContainer>
      {isAskForViewOrCreateDocumentModal && (
        <DialogFormContainer
          open={isAskForViewOrCreateDocumentModal}
          dialogSize={'xs'}
          isFooter={false}
          close={() => hideAskForViewOrCreateModal()}>
          <Box>
            <Box className="text_right">
              <CloseOutlined
                className={'pointer'}
                onClick={() => hideAskForViewOrCreateModal()}
                fontSize="small"
              />
            </Box>
            <Box className="text_center">
              <Box sx={{ mb: 2 }}>{i18n.t('copy_editing_text_message')}</Box>
              <Box className="d_flex d_flex_content_center">
                <Box sx={{ m: 1 }}>
                  <CommonButton
                    size="medium"
                    btnLabel={'Create New Version'}
                    onClick={() => documentCreateCopyLink()}
                  />
                </Box>
                <Box sx={{ m: 1 }}>
                  <CommonButton
                    size="medium"
                    btnLabel={'Open Read Only'}
                    onClick={() => documentViewEditLink()}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogFormContainer>
      )}
      {(isLoading || compareLoading || isLinkClickLoading) && <Loader />}
    </>
  );
}

export default DocumentHistoryDetailContainer;
