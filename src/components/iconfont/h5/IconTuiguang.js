/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const IconTuiguang = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 512m-448 0a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z"
        fill={getIconColor(color, 0, '#FEAA0C')}
      />
      <path
        d="M280.9 441.5c0-8.4 3-15.5 9-21.4 6-5.8 13.2-8.7 21.6-8.7h30.6v136.5h-30.6c-8.4 0-15.6-2.9-21.6-8.7-6-5.8-9-13-9-21.4v-76.3z m340-125.3c13.9-13.3 26.6-20.6 37.9-21.9 11.3-1.3 21.4 1.7 30.1 9 8.7 7.3 16.2 18 22.3 32.1s11.2 29.8 15.1 47.1c3.9 17.3 6.8 35.5 8.7 54.4 1.9 18.9 2.9 37 2.9 54.2 0 17.2-1.2 34.3-3.6 51.5-2.4 17.2-6 33.3-10.7 48.3-4.7 15.1-10.2 28.3-16.5 39.6-6.3 11.3-13.4 19.8-21.1 25.3s-16.1 7.4-25 5.8c-8.9-1.6-18.2-7.9-27.9-18.9-9.4-11-22.1-20.2-38.1-27.4s-33.5-13.4-52.5-18.5c-18.9-5-38.1-9.1-57.6-12.1-19.4-3.1-37.2-5.8-53.4-8.3-16.2-2.4-29.7-4.8-40.6-7-10.8-2.3-16.9-5-18.2-8.3v-152c1.3-4.5 6.4-8.3 15.3-11.2 8.9-2.9 20.2-5.7 34-8.3 13.8-2.6 29.3-5.4 46.6-8.5s35-7.3 52.9-12.6c18-5.3 35.5-12.1 52.7-20.4s32.8-19 46.7-31.9zM446.1 613.9c1.6 3.9 3.6 8.1 5.8 12.6 1.9 4.2 4.5 9.1 7.8 14.6s7.1 11.5 11.7 18c5.5 7.8 11.1 15.9 16.8 24.5 5.7 8.6 10 16.4 12.9 23.3 2.9 7 3.8 12.7 2.7 17.2-1.1 4.5-5.7 6.8-13.8 6.8h-27.7c-6.5 0-12.5-1.2-18-3.6-5.5-2.4-10.8-6.2-15.8-11.2-5-5-10.2-11.4-15.5-19.2-5.3-7.8-11.1-17-17.2-27.7-7.4-12.3-12.6-23.1-15.5-32.3-2.9-9.2-4.9-16.9-5.8-23.1-1.3-7.1-1.3-13.3 0-18.5 2.6 0.3 5.7 1 9.2 1.9 2.9 0.6 6.5 1.5 10.7 2.4 4.2 1 9.1 1.9 14.6 2.9 5.5 1.3 10.4 2.5 14.8 3.6s8.3 2.3 11.9 3.6c3.6 1.6 7.1 2.9 10.4 4.2z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </svg>
  );
};

IconTuiguang.defaultProps = {
  size: 18,
};

export default IconTuiguang;
