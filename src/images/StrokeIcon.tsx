import React from 'react';

const StrokeIcon: React.FC = () => {
  return (
    <svg
      className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      stroke="currentColor"
    >
      <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke"/>
    </svg>
  )
}

export default StrokeIcon
