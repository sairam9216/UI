/* eslint-disable */
import React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import { Box } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { SignHere } from 'utils/images';

import useStyles from './style';
import { useDrag } from 'react-dnd';
function AccordianList({
  editList,
  row,
  index,
  handleClick,
  IndividualList,
  EntityList,
  selectedIndex
}) {
  const classes = useStyles();
  const DraggableItem = ({ entityId, item, userName }) => {
    const [, dragRef] = useDrag({
      type: 'box',
      item: { id: item?.id, entityId, name: item?.name, type: 'box', userName: userName }
    });
    return (
      <div ref={dragRef}>
        <Box className={`cursorMove ${classes.dragItem}`} id={item?.id}>
        <Box className={`d_flex d_flex_content_between`}>
          <Box className={`d_flex d_flex_align`} style={{ padding: 5 }}>
            <Box className={classes.dragIcon}>
              <DragIndicatorIcon className={classes.icon} />
            </Box>
            <Box component="p" className={classes.dragTitle}>
              {item?.name}
            </Box>
          </Box>
          {item?.name === 'Signature' && (
            <Box className={classes.signHereIcon}>
              <SignHere />
            </Box>
          )}  
        </Box>
        </Box>
      </div>
    );
  };

  return (
    <>
      <List key={index}>
        <ListItemButton
          onClick={() => handleClick(index)}
          className={`d_flex d_flex_content_between d_flex_align_start ${classes.listButton}`}>
          <Box>
            <Box component="h4" className={classes.titleDropdown}>
              {row?.name}
            </Box>
            {row?.entities?.map((entity, i) => {
              return (
                <Box component="p" className={classes.subtitleDropdown} key={i}>
                  {entity?.entityName}
                </Box>
              );
            })}
          </Box>
          <Box className="d_flex d_flex_align">
            <BorderColorOutlinedIcon
              className={classes.editIcon}
              fontSize="small"
              onClick={(e) => editList(e, row)}
            />
            {index === selectedIndex ? <ExpandLess /> : <ExpandMore />}
          </Box>
        </ListItemButton>
        <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>
          <List component="div" className={classes.content}>
            {row?.checkedLabel == 'Individual' ? (
              <>
                {IndividualList?.map((ind, i) => {
                  return (
                    <DraggableItem entityId={row?.id} item={ind} key={i} userName={row?.name} />
                  );
                })}
              </>
            ) : (
              <>
                {EntityList?.map((ent, i) => {
                  return (
                    <DraggableItem entityId={row?.id} item={ent} key={i} userName={row?.name} />
                  );
                })}
              </>
            )}
          </List>
        </Collapse>
      </List>
    </>
  );
}

AccordianList.propTypes = {};
export default AccordianList;
