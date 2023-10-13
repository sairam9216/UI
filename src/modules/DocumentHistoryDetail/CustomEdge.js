/* eslint-disable react/prop-types */
import React from 'react';
import { getSmoothStepPath } from 'reactflow';

export default function CustomEdge(props) {
  const {
    sourceX,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    id,
    style,
    markerEnd,
    sourceHandleId
  } = props;
  let sourceY = props.sourceY;
  if (sourceHandleId === 'internal') {
    sourceY = sourceY - 25;
  }
  if (sourceHandleId === 'Compare') {
    sourceY = sourceY - 50;
  }
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  });

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
    </>
  );
}
