/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconpaihangbang = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M544 661.333333a32 32 0 0 1-64 0V362.666667a32 32 0 0 1 64 0v298.666666z m160 0a32 32 0 0 1-64 0V490.666667a32 32 0 0 1 64 0v170.666666z m-320 0a32 32 0 0 1-64 0V448a32 32 0 0 1 64 0v213.333333zM202.666667 138.666667h618.666666c64.8 0 117.333333 52.533333 117.333334 117.333333v512c0 64.8-52.533333 117.333333-117.333334 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V256c0-64.8 52.533333-117.333333 117.333334-117.333333z m0 64a53.333333 53.333333 0 0 0-53.333334 53.333333v512a53.333333 53.333333 0 0 0 53.333334 53.333333h618.666666a53.333333 53.333333 0 0 0 53.333334-53.333333V256a53.333333 53.333333 0 0 0-53.333334-53.333333H202.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconpaihangbang.defaultProps = {
  size: 18,
};

export default Iconpaihangbang;
