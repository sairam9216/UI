/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { getBezierPath, getSmoothStepPath, getStraightPath } from 'reactflow';

export default function CustomEdge(props) {
  const { sourceX, sourcePosition, targetX, targetY, targetPosition, id, style, markerEnd } = props;
  let sourceY = props.sourceY - 25;
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
