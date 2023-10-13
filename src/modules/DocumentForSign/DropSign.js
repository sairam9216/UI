/* eslint-disable react/prop-types */
import { useRef, useEffect, useState, useCallback } from 'react';
import { useDrop } from 'react-dnd';
import { DraggableBox } from './DraggableBox.js';
import useStyles from './style';
import { Box } from '@mui/material';
import { useGetDocumentImagesQuery } from 'store/API/documentApi';
import { Loader } from 'components';
import { getRandomValue } from 'utils/index.js';
import useWindowPosition from 'hooks/WindowPosition/WindowPosition.js';

const getTopLeftCordinateMax = (top, left) => {
  let topValue = top;
  let leftValue = left;
  if (topValue <= 0) {
    topValue = 1;
  }
  if (topValue >= 1000) {
    topValue = 1000;
  }
  if (leftValue <= 0) {
    leftValue = 1;
  }
  if (leftValue >= 700) {
    leftValue = 700;
  }
  return { topValue, leftValue };
};

const DropSign = ({ activePage, id, setDraggedList, draggedListByPage, documentName }) => {
  let fetchBigImage = { DocumentActionUserID: id, PageNo: activePage };
  const { data, isLoading, isFetching } = useGetDocumentImagesQuery(fetchBigImage);
  const classes = useStyles();
  const myRef = useRef();
  const scrollDivRef = useRef();
  const [draggedListItem, setDraggedListItem] = useState([]);
  const { scrollY } = useWindowPosition();
  useEffect(() => {
    if (draggedListByPage[activePage]) {
      setDraggedListItem(draggedListByPage[activePage]);
    } else {
      setDraggedListItem([]);
    }
  }, [draggedListByPage, activePage]);

  const moveBox = (id, left, top) => {
    const updateBoxPosition = draggedListItem.map((box) => {
      if (id === box.id) {
        const { topValue, leftValue } = getTopLeftCordinateMax(top, left);

        return { ...box, top: topValue, left: leftValue };
      }
      return box;
    });
    setDraggedList(updateBoxPosition, activePage);
  };

  const handleScroll = useCallback(() => {
    console.log('scrolling', scrollDivRef.current.scrollLeft);
  }, []);

  useEffect(() => {
    // alert(scrollDivRef.current.scrollLeft);
  }, []);

  useEffect(() => {
    const div = scrollDivRef.current;
    div.addEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const [, drop] = useDrop(
    () => ({
      accept: 'box',
      drop(item, monitor) {
        let arrayWithFilterObjects = [];
        if (draggedListItem.length > 0) {
          arrayWithFilterObjects = draggedListItem.filter((o) => o.id === item.id);
        }
        if (!arrayWithFilterObjects.length) {
          const offset = monitor.getSourceClientOffset();
          const x = myRef.current.offsetLeft;
          const y = myRef.current.offsetTop;
          let left = Math.round(offset.x - x + scrollDivRef.current.scrollLeft);
          let top = Math.round(offset.y - y + scrollY);
          const { topValue, leftValue } = getTopLeftCordinateMax(top, left);

          let dropData = {
            id: getRandomValue(),
            title: item?.name,
            entityId: item?.entityId,
            left: leftValue,
            top: topValue,
            userName: item?.userName,
            customValue: ''
          };
          let tempArray = draggedListItem;
          tempArray.push(dropData);
          setDraggedList(tempArray, activePage);
        } else {
          const delta = monitor.getDifferenceFromInitialOffset();
          let left = Math.round(item.left + delta.x);
          let top = Math.round(item.top + delta.y);
          moveBox(item.id, left, top);
          return undefined;
        }
      }
    }),
    [moveBox]
  );

  const onRemove = (id) => {
    let filteredArray = draggedListItem.filter((item) => item.id !== id);
    setDraggedList(filteredArray, activePage);
  };

  const handleDragedCustom = (e, id) => {
    const { value } = e.target;
    const filtereUpdatedArray = draggedListItem.map((item) => {
      if (item.id !== id) {
        return item;
      } else {
        return {
          ...item,
          customValue: value
        };
      }
    });
    setDraggedListItem(filtereUpdatedArray);
  };

  const updateDrageList = () => {
    setDraggedList(draggedListItem, activePage);
  };

  return (
    <div className="d_flex d_flex_content_center">
      <Box
        ref={scrollDivRef}
        style={{
          overflow: 'auto',
          display: data?.data[0] ? 'block' : 'none'
        }}>
        {documentName && <h4 className={classes.documentNameTitle}>{documentName}</h4>}
        <Box ref={myRef} className={classes.signContent} style={{ width: 818, height: 1058 }}>
          <Box
            ref={drop}
            style={{
              backgroundImage: `url(${
                data?.data[0] ? `data:image/jpeg;base64,${data?.data[0]}` : ``
              })`,
              backgroundRepeat: 'no-repeat',
              width: 816,
              height: 1056,
              position: 'relative'
            }}>
            {draggedListItem?.map((box, key) => {
              return (
                <DraggableBox
                  key={key}
                  onRemove={onRemove}
                  updateDrageList={updateDrageList}
                  handleDragedCustom={handleDragedCustom}
                  id={key}
                  {...box}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
      {(isLoading || isFetching) && <Loader />}
    </div>
  );
};

export default DropSign;
