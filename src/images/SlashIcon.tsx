import React from 'react';

type Props = {
  width?: number
  height?: number
}

const SlashIcon: React.FC<Props> = ({ width = 16, height = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="h-5 w-4 text-gray-300"
    >
      <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z"/>
    </svg>

  )
}

export default SlashIcon
