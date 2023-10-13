/* eslint-disable react/prop-types */
import { memo, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { Box } from './Box.js';
import CancelIcon from '@mui/icons-material/Cancel';
const removeDragStyle = {
  position: 'absolute',
  right: '-15px',
  top: '-12px',
  zIndex: 2,
  backgroundColor: 'white',
  borderRadius: 15
};
function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: 'absolute',
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : ''
  };
}
export const DraggableBox = memo(function DraggableBox(props) {
  const {
    id,
    title,
    left,
    top,
    onRemove,
    userName,
    handleDragedCustom,
    customValue,
    updateDrageList
  } = props;
  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: 'box',
      item: { id, left, top, title, userName },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    [id, left, top, title]
  );
  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);
  return (
    <div ref={drag} style={getStyles(left, top, isDragging)} role="DraggableBox">
      <CancelIcon
        onClick={() => {
          onRemove(id);
        }}
        className={`pointer`}
        style={removeDragStyle}
        fontSize="small"
      />
      <Box
        id={id}
        type={title}
        userName={userName}
        handleDragedCustom={handleDragedCustom}
        customValue={customValue}
        updateDrageList={updateDrageList}
      />
    </div>
  );
});
