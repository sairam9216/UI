/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { memo } from 'react';
import { Box } from './Box.js';
export const BoxDragPreview = memo(function BoxDragPreview({ type, userName }) {
  return (
    <div style={{ display: 'inline-block' }}>
      <Box type={type} userName={userName} preview />
    </div>
  );
});
