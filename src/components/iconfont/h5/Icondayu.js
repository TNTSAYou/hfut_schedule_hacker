/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Icondayu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M651.7 689.6c182.4 0 324-174.9 266.3-366.2-26-86.1-94.1-153.9-180.2-179.7-146-43.7-282.3 28.7-338.4 146.6-32.5-16.5-69.9-24.9-109.4-22.3-104.6 6.8-189.5 91.5-196.5 196.2-8.2 123 89.2 225.4 210.5 225.4h347.7z"
        fill={getIconColor(color, 0, '#7BBAFF')}
      />
      <path
        d="M324.8 893.2c-4.6 0-9.3-1.3-13.5-4-11.8-7.5-15.2-23.1-7.7-34.9l41.6-65.4c7.5-11.8 23.1-15.2 34.9-7.8 11.8 7.5 15.2 23.1 7.7 34.9l-41.6 65.4c-4.9 7.6-13.1 11.8-21.4 11.8zM491.2 893.2c-4.6 0-9.3-1.3-13.5-4-11.8-7.5-15.2-23.1-7.7-34.9l41.6-65.4c7.5-11.8 23.1-15.2 34.9-7.8 11.8 7.5 15.2 23.1 7.7 34.9l-41.6 65.4c-4.9 7.6-13.1 11.8-21.4 11.8zM657.6 893.2c-4.6 0-9.3-1.3-13.5-4-11.8-7.5-15.2-23.1-7.7-34.9l41.6-65.4c7.5-11.8 23.1-15.2 34.9-7.8 11.8 7.5 15.2 23.1 7.7 34.9L679 881.4c-4.9 7.6-13 11.8-21.4 11.8z"
        fill={getIconColor(color, 1, '#C7E2FF')}
      />
    </svg>
  );
};

Icondayu.defaultProps = {
  size: 18,
};

export default Icondayu;
