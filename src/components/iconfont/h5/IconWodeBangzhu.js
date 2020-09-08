/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconWodeBangzhu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M350.2 716.1H214.7c-17.6 0-32-14.4-32-32V482.6c0-17.6 14.4-32 32-32h135.5c17.6 0 32 14.4 32 32v201.5c0 17.6-14.4 32-32 32z"
        fill={getIconColor(color, 0, '#C0DEFF')}
      />
      <path
        d="M350.2 756.1H214.7c-39.7 0-72-32.3-72-72V482.6c0-39.7 32.3-72 72-72h135.5c39.7 0 72 32.3 72 72v201.5c0 39.7-32.3 72-72 72z m-127.5-80h119.5V490.6H222.7v185.5z"
        fill={getIconColor(color, 1, '#0089FF')}
      />
      <path
        d="M827.7 716.1H692.2c-17.6 0-32-14.4-32-32V482.6c0-17.6 14.4-32 32-32h135.5c17.6 0 32 14.4 32 32v201.5c0 17.6-14.4 32-32 32z"
        fill={getIconColor(color, 2, '#C0DEFF')}
      />
      <path
        d="M827.7 756.1H692.2c-39.7 0-72-32.3-72-72V482.6c0-39.7 32.3-72 72-72h135.5c39.7 0 72 32.3 72 72v201.5c0 39.7-32.3 72-72 72z m-127.5-80h119.5V490.6H700.2v185.5z"
        fill={getIconColor(color, 3, '#0089FF')}
      />
      <path
        d="M899.7 506.3h-80c0-41.9-1.7-48.1-6.6-66.5-0.7-2.7-1.5-5.7-2.4-8.9-34.2-131.7-153.3-223.7-289.6-223.7s-255.3 92-289.6 223.6c-1 3.8-1.9 7.1-2.7 10.1-4.6 16.7-6.1 22.4-6.1 65.4h-80c0-51.7 2.6-63.2 8.9-86.5 0.8-2.8 1.6-5.8 2.5-9.2 10.5-40.3 27.4-78.3 50.5-113.2 22.6-34.2 50.5-64.4 82.8-89.8 32.7-25.6 69-45.5 108-59.2 40.3-14.2 82.7-21.4 125.8-21.4 43.1 0 85.5 7.2 125.8 21.4 39 13.7 75.3 33.7 108 59.3 32.3 25.3 60.2 55.6 82.8 89.8 23 34.8 40 72.9 50.4 113.2 0.8 3 1.5 5.7 2.2 8.3 6.4 24.1 9.3 36.9 9.3 87.3zM611.1 877.9l-5.8-79.8c49.2-3.6 93.6-20.5 132-50.3 27.3-21.2 41.2-41.3 41.3-41.5l66.8 44.1c-3.2 4.7-78.5 116.2-234.3 127.5z"
        fill={getIconColor(color, 4, '#0089FF')}
      />
      <path
        d="M565.4 841m-60.1 0a60.1 60.1 0 1 0 120.2 0 60.1 60.1 0 1 0-120.2 0Z"
        fill={getIconColor(color, 5, '#0089FF')}
      />
    </svg>
  );
};

IconWodeBangzhu.defaultProps = {
  size: 18,
};

export default IconWodeBangzhu;
