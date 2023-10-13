/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Container, Grid, Box } from '@mui/material';
import useStyles from './style';
import SignatoryForm from './SignatoryForm';
import AccordianList from './Accordian/AccordianList';
import { CommonButton } from 'components/FormControls/Index';
import * as Yup from 'yup';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { CustomDragLayer } from './CustomDragLayer';
import DropSign from './DropSign';
import { useGetDocumentImagesQuery, DocumentApi } from 'store/API/documentApi';
import { DialogFormContainer, ConfirmationModal, Loader } from 'components';
import { useNavigate, useParams } from 'react-router-dom';
import { getRandomValue } from 'utils';
import { useDispatch } from 'react-redux';
import AlertMessage from 'utils/AlertMessage';

const docSignSchema = Yup.object().shape({
  formData: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email').required('Required')
    })
  )
});

const ItemTypes = {
  SIGN: 'Sign',
  NAME: 'Name',
  CUSTOM: 'Custom',
  TITLE: 'Title'
};
const signLabel = [
  {
    name: 'signLabel',
    value: 'Individual',
    isCheck: true
  },
  {
    name: 'signLabel',
    value: 'Entity',
    isCheck: false
  }
];

const IndividualList = [
  { name: 'Signature', type: ItemTypes.SIGN },
  { name: 'Name', type: ItemTypes.NAME },
  { name: 'Custom', type: ItemTypes.CUSTOM }
];

const EntityList = [
  { name: 'Signature', type: ItemTypes.SIGN },
  { name: 'Name', type: ItemTypes.NAME },
  { name: 'Custom', type: ItemTypes.CUSTOM },
  { name: 'Title', type: ItemTypes.TITLE }
];

function DocumentForSign() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [accordian, setAccordian] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState('');
  let { id } = useParams();
  const [activePage, setActivePage] = useState(1);
  const [draggedArray, setDraggedArray] = useState({});
  const [draggedArrayState, setDraggedArrayState] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isRightSideBarHide, setIsRightSideBarHide] = useState(true);
  const [notAddedSignatureList, setNotAddedSignatureList] = useState([]);
  const [documentName, setDocumentName] = useState('');
  const [removeActionState, setRemoveActionState] = useState(false);
  const [removeFormDataItem, setRemoveFormDataItem] = useState(null);
  const [isConfirmRemoveAsk, setIsConfirmRemoveAsk] = useState(false);



  const defaultValues = {
    formData: [
      {
        checkedLabel: 'Individual',
        id: getRandomValue(),
        name: '',
        email: '',
        title: '',
        entities: []
      }
    ]
  };

  const { data, isLoading: thumbLoading, error } = useGetDocumentImagesQuery({ DocumentActionUserID: id });
  const [foramData, setFormData] = useState(defaultValues?.formData);
  const [editData, setEditData] = useState([]);

  const editList = (e, row) => {
    e.stopPropagation();
    let rowData = foramData?.filter((item) => item?.id == row?.id);
    let tempEditItem = JSON.parse(JSON.stringify(rowData));
    setEditData(tempEditItem);
  };

  const handleChange = (e, index, item) => {
    const { name, value } = e.target;
    if (editData.length > 0) {
      let tempUpdateArray = editData.map((item, i) => {
        if (i === index) {
          item[name] = value;
        }
        return item;
      });
      setEditData(tempUpdateArray);
    } else{
      const updateArray = foramData.map((item, i) => {
        if (i === index) {
          item[name] = value;
        }
        return item;
      });
      setFormData(updateArray);
    }
  };

  const setDraggedList = (itemList, activePage) => {
    let draggedArrayTempList = draggedArray;
    draggedArrayTempList[activePage] = itemList;
    setDraggedArray(draggedArrayTempList);
    setDraggedArrayState(!draggedArrayState);
  };

  const getDraftSignatureData = async () => {
    setLoading(true);
    try {
      const result = await dispatch(DocumentApi.endpoints.getDocumentSignatureDraft.initiate({ DocumentActionUserID: id, uid: getRandomValue() }));
      if (result?.data?.status && result?.data?.data) {
        setDocumentName(result?.data?.data?.documentName);
        let draftData = result?.data?.data;
        let mapData = JSON.parse(draftData?.mapping);
        if (Object.keys(mapData?.placeholder).length > 0) {
          setDraggedArray(mapData?.placeholder);
          setDraggedArrayState(!draggedArrayState);
        }
        if (mapData?.entities && mapData?.entities.length > 0) {
          let entityListFilter = mapData?.entities.filter((obj) => obj.name !== '' && obj.email !=='');
          if(entityListFilter.length > 0){
            setFormData(entityListFilter);
            setAccordian(true);
          }
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
    setIsRightSideBarHide(false);
  };

  const saveSignatory = async (updateformData, verifiedPlacehoder, showAccordion = true) => {
    try {
      setLoading(true);
      let draggedArrayUpdatedChanged = verifiedPlacehoder ? verifiedPlacehoder : null;
      let postFormDataa =  updateformData ? updateformData : foramData;
      console.log(updateformData, foramData)
      if(!draggedArrayUpdatedChanged){
        draggedArrayUpdatedChanged = {};
        if (Object.keys(draggedArray).length > 0) {
          for (const [key, value] of Object.entries(draggedArray)) {
            let pageItemList = value.map((obj) => {
                let userName = postFormDataa.filter((fdata) => obj.entityId === fdata.id)[0]?.name;
                return {
                  ...obj,  
                  userName: userName,
                };
            });
            draggedArrayUpdatedChanged[key] = pageItemList;
          }
          setDraggedArray(draggedArrayUpdatedChanged);
          setDraggedArrayState(!draggedArrayState);
        }
      }
     
      
      let postData = {};
      postData.placeholder = draggedArrayUpdatedChanged;
      postData.entities = postFormDataa;
      console.log(postData, '----postData');
      const result = await dispatch(
        DocumentApi.endpoints.documentSignatureSaveDraft.initiate({
          documentActionUserID: id,
          mapping: JSON.stringify(postData),
          isDraft: true,
          uid: getRandomValue()
        })
      );
      setLoading(false);
      setAccordian(showAccordion);
    } catch (error) {
      setLoading(false);
    }

  };

  const sendForSignature = async () => {
    try {
      setLoading(true);
      let postData = {};
      postData.placeholder = draggedArray;
      postData.entities = foramData;
      const result = await dispatch(
        DocumentApi.endpoints.documentSignatureSaveDraft.initiate({
          documentActionUserID: id,
          mapping: JSON.stringify(postData),
          isDraft: false
        })
      );
      if (result?.data?.status) {
        AlertMessage(result?.data?.message, 'success');
        navigate('/dashboard', { replace: true });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDraftSignatureData();
  }, []);

  // Add Submit
  const addSignatory = () => {
    let newData = {
        checkedLabel: 'Individual',
        id: getRandomValue(),
        name: '',
        email: '',
        title: '',
        entities: []
      }
    setFormData([...foramData, newData]);
  };

  // Update
  const updateSignatory = (value) => {
    let itemObject = value[0];
    const updatedArray = foramData.map((item) => {
      if (item.id !== itemObject.id) {
        return item;
      } else {
        return {
          ...itemObject,
        };
      }
    });
    setFormData(updatedArray);
    setTimeout(()=>{
      let verifiedPlacehoder = {};
      if (Object.keys(draggedArray).length > 0) {
        for (const [key, value] of Object.entries(draggedArray)) {

          let pageItemList = value.map((obj) => {
            if (obj.entityId !== itemObject.id) {
              return obj;
            } else {
              return {
                ...obj,  
                userName: itemObject.name,
              };
            }
          });
          verifiedPlacehoder[key] = pageItemList;
        }
        setDraggedArray(verifiedPlacehoder);
        setDraggedArrayState(!draggedArrayState);
      }

      saveSignatory(updatedArray, verifiedPlacehoder);
    },100);
    
    setEditData([]);
  };

  // Accordian
  const handleClick = (index) => {
    if (selectedIndex === index) {
      setSelectedIndex('');
    } else {
      setSelectedIndex(index);
    }
  };

  const cancleUpate = () => {
    setEditData([]);
  };

  const removeForm = (item) => {
      setRemoveFormDataItem(item);
      setIsConfirmRemoveAsk(true);
  };

  const ConfirmYes = () => {
    let item = removeFormDataItem;
    let updateformData = foramData.filter((obj) => obj.id !== item.id);
    setRemoveActionState(true);
    setFormData(updateformData);
    setIsConfirmRemoveAsk(false);
    setRemoveFormDataItem(null);
    let verifiedPlacehoder = {};
    if (Object.keys(draggedArray).length > 0) {
      for (const [key, value] of Object.entries(draggedArray)) {
          let pageItemList =  value.filter((obj) => obj.entityId !== item.id);
          if(pageItemList.length > 0){
            verifiedPlacehoder[key] = pageItemList;
          }
      }
      setDraggedArray(verifiedPlacehoder);
      setDraggedArrayState(!draggedArrayState);
    }

    let sendData = updateformData.filter((obj) => obj.name !== '' && obj.email !=='');
    saveSignatory(sendData, verifiedPlacehoder, false);
  }

  const backSignatory = () => {
    setAccordian(false);
    addSignatory();
  };

  useEffect(() => {
    if (error !== undefined && error) {
      AlertMessage(error?.data?.message, 'error');
      navigate('/dashboard');
    }
  }, [error]);


  // Entity type
  const handleEntityChange = (e, list, parent) => {
    const { value } = e?.target;
    if(editData.length > 0){
      let updateEntities = editData?.map((item) => {
        if (item?.id == parent?.id) {
          const ind = item.entities.findIndex((entity) => entity.id === list.id);
          if (ind > -1) {
            item.entities[ind].entityName = value;
            item.entities[ind].id = getRandomValue();
          }
        }
        return item;
      });
      setEditData(updateEntities);
    }
    else
    {
      let updateEntities = foramData?.map((item) => {
        if (item?.id == parent?.id) {
          const ind = item.entities.findIndex((entity) => entity.id === list.id);
          if (ind > -1) {
            item.entities[ind].entityName = value;
          }
        }
        return item;
      });
      setFormData(updateEntities);
    }
  };
  // Change inner label
  const changeInnerLabel = (e, parent,arrIndex) => {
    let updateFormData;
    if (editData.length > 0) {
      updateFormData = editData?.map((item) => {
        if (item?.id == parent?.id) {
          if (e?.target?.value === 'Entity') {
            item.checkedLabel = 'Entity',
            item.entities = [
              ...item.entities,
              { id: getRandomValue(), entityName: ''}
            ];
          }
          else
          {
            if(arrIndex === 0){
              item.checkedLabel = 'Individual',
              item.entities = [];
              item.title = '';
            }
            else{
              const entitiyItemList = item.entities;
              const removeItemList = entitiyItemList.splice(arrIndex)
              item.checkedLabel = 'Entity',
              item.entities = entitiyItemList;
            }
          }
        }
        return item;
      });
      setEditData(updateFormData);
    }
    else{
      updateFormData = foramData?.map((item) => {
        if (item?.id == parent?.id) {
          if (e?.target?.value === 'Entity') {
            item.checkedLabel = 'Entity',
            item.entities = [
              ...item.entities,
              { id: getRandomValue(), entityName: ''}
            ];
          }
          else
          {
            if(arrIndex === 0){
              item.checkedLabel = 'Individual',
              item.entities = [];
            }
            else{
              const entitiyItemList = item.entities;
              const removeItemList = entitiyItemList.splice(arrIndex)
              item.checkedLabel = 'Entity',
              item.entities = entitiyItemList;
            }
            
          }
        }
        return item;
      });
      setFormData(updateFormData);

    }  
    
  };

  const signatureVerified = () => {
    let signUser = {};
    if (Object.keys(draggedArray).length > 0) {
      for (const [key, value] of Object.entries(draggedArray)) {
        value.forEach((val) => {
          if (val.title === 'Signature') {
            signUser[val.entityId] = val.userName;
          }
        });
      }
    }

    if (Object.keys(signUser).length > 0) {
      let notAddedSignatureListArray = [];
      if (foramData.length > 0) {
        foramData.forEach((val) => {
          if (!signUser[val.id]) {
            notAddedSignatureListArray.push(val.name);
          }
        });
      }

      setNotAddedSignatureList(notAddedSignatureListArray);
      if (notAddedSignatureListArray.length === 0) {
        sendForSignature();
      } else {
        setShowConfirmation(true);
      }
    } else {
      AlertMessage('Please add at least one person signature', 'error');
    }
  };

  return (
    <Container maxWidth="xxl">
      <Grid container spacing={2}>
        <Grid item sm={2}>

          {data?.data && (
            <Box className={classes.sideBar}>
                      <h4 className={`${classes.sidebarTitle} text_center`}>Non Disclosure Agreement</h4>

              <Box className={`${classes.heightFull} text_center`}>
                {data?.data?.map((item, i) => {
                  return (
                    <Box
                      className={classes.pageThumbnail}
                      key={i}>
                      <Box
                        variant="outlined"
                        className={`pointer`}
                        onClick={() => setActivePage(i + 1)}>
                        <img
                          alt=""
                          src={`data:image/jpeg;base64,${item}`}
                          width="210"
                          height="250"
                          className={`${classes.pageListImage} ${
                            i + 1 === activePage ? 'activeThnumb' : ''
                          }`}
                        />
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}
        </Grid>
        <>
          <DndProvider backend={HTML5Backend}>
           
            <Grid item sm={7}>
              {data ? (
               <DropSign
                  key={draggedArrayState}
                  activePage={activePage}
                  setDraggedList={setDraggedList}
                  draggedListByPage={draggedArray}
                  id={id}
                  documentName={documentName}
                />
              ) : (
                ''
              )}
              <CustomDragLayer />
            </Grid>
            <Grid item sm={3}>
              <Box
                className={classes.signRightSide}
                style={{ display: isRightSideBarHide ? 'none' : 'block' }}>
                {editData.length > 0 ? (
                  <Box>
                    <Box component="h4" className={classes.documentNameTitle}>
                    Update Detail
                        </Box>
                    <Box className={`${classes.heightFull}`}>
                    <SignatoryForm
                              foramData={editData}
                              saveSignatory={updateSignatory}
                              addSignatory={addSignatory}
                              signLabel={signLabel}
                              handleChange={handleChange}
                              validationSchema={docSignSchema}
                              removeForm={removeForm}
                              handleEntityChange={handleEntityChange}
                              changeInnerLabel={changeInnerLabel}
                              action={'update'}
                              cancleUpate={cancleUpate}
                            />
                    </Box>
                  </Box>
                ) : (
                  <>
                    {showConfirmation === false ? (
                      <Box>
                        <Box component="h4" className={classes.documentNameTitle}>
                          Who is signing the document
                        </Box>
                        {accordian ? (
                          <Box className={`${classes.heightFull}`}>
                            {foramData?.map((row, index) => {
                              return (
                                <AccordianList
                                  editList={editList}
                                  row={row}
                                  index={index}
                                  key={index}
                                  handleClick={handleClick}
                                  IndividualList={IndividualList}
                                  EntityList={EntityList}
                                  selectedIndex={selectedIndex}
                                />
                              );
                            })}
                            <p
                              className={`pointer ${classes.addSignatory}`}
                              onClick={() => backSignatory()}>
                              + Add Another Signatory
                            </p>
                            <Box className="d_flex" sx={{ my: 3 }}>
                              <Box sx={{ mr: 1 }}>
                                <CommonButton
                                  btnLabel="Send for Signature"
                                  type="submit"
                                  size="small"
                                  onClick={signatureVerified}></CommonButton>
                              </Box>
                            </Box>
                          </Box>
                        ) : (
                          <Box className={`${classes.heightFull}`}>

                            <SignatoryForm
                              foramData={foramData}
                              saveSignatory={saveSignatory}
                              addSignatory={addSignatory}
                              signLabel={signLabel}
                              handleChange={handleChange}
                              validationSchema={docSignSchema}
                              removeForm={removeForm}
                              handleEntityChange={handleEntityChange}
                              changeInnerLabel={changeInnerLabel}
                              action={'create'}
                              removeActionState={removeActionState}            
                            />
                          </Box>
                        )}
                      </Box>
                    ) : (
                      <Box>
                        <Box component="h4" className={classes.documentNameTitle}>
                          Send For Signature
                        </Box>
                        <Box component="p" className="grayText">
                          You have not added {notAddedSignatureList.length} users signature in the
                          document.
                        </Box>
                        <Box sx={{ margin: 2 }}>
                          {notAddedSignatureList?.map((value, index) => {
                            return <Box key={index} component="p">{`${index + 1}. ${value}`}</Box>;
                          })}
                        </Box>
                        <Box component="p" className="grayText">
                          Do you want to send without {notAddedSignatureList.length} person sign or
                          you would like to add signature.
                        </Box>
                        <Box className="d_flex" sx={{ my: 3 }}>
                          <Box sx={{ mr: 1 }}>
                            <CommonButton
                              btnLabel="Send Without"
                              size="small"
                              type="submit"
                              onClick={sendForSignature}></CommonButton>
                          </Box>
                          <Box>
                            <CommonButton
                              btnLabel="Add Signature"
                              size="small"
                              className="btnSecondary"
                              onClick={() => setShowConfirmation(false)}></CommonButton>
                          </Box>
                        </Box>
                      </Box>
                    )}
                  </>
                )}
              </Box>
            </Grid>
          </DndProvider>
        </>
      </Grid>
      {isConfirmRemoveAsk && (
          <DialogFormContainer
            open={isConfirmRemoveAsk}
            dialogSize={'xs'}
            isHeader={false}
            isFooter={true}
            isConfirmFooter={true}
            footerBtnFirstLabel={'Yes'}
            footerBtnSecondLabel={'No'}
            ConfirmYes={ConfirmYes}
            formType="remove-sign-form"
            close={(e) => setIsConfirmRemoveAsk(false)}>
            <Box className="text_center">
              <ConfirmationModal
                title={'Are you sure want to delete?'}
                descriptionFirst={''}
                descriptionSecond={''}
              />
            </Box>
          </DialogFormContainer>
        )}
      {(thumbLoading || loading) && <Loader />}
    </Container>
  );
}

export default DocumentForSign;
