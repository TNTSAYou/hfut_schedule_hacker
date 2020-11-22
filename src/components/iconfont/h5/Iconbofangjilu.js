/* eslint-disable */

import React from 'react';
import { getIconColor } from './helper';

const DEFAULT_STYLE = {
  display: 'block',
};

const Iconbofangjilu = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M822.496 473.152l52.053333 29.290667C869.461333 306.56 709.098667 149.333333 512 149.333333c-200.298667 0-362.666667 162.368-362.666667 362.666667s162.368 362.666667 362.666667 362.666667c122.538667 0 234.645333-61.194667 301.578667-161.152a32 32 0 1 1 53.173333 35.616C788.064 866.634667 656.117333 938.666667 512 938.666667 276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333s426.666667 191.029333 426.666667 426.666667c0 10.954667-0.853333 26.357333-2.517334 46.528-1.930667 23.242667-27.274667 36.682667-47.594666 25.248l-97.450667-54.848a32 32 0 1 1 31.392-55.786667z m-493.12 176.213333L480 498.762667V320a32 32 0 0 1 64 0v192a32 32 0 0 1-9.376 22.624l-160 160a32 32 0 1 1-45.248-45.248z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Iconbofangjilu.defaultProps = {
  size: 18,
};

export default Iconbofangjilu;
