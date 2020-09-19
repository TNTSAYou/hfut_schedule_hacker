/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Icongift = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 960a128 128 0 0 1-128-128V466.645333A85.376 85.376 0 0 1 64 384v-106.666667a85.333333 85.333333 0 0 1 85.333333-85.333333h290.901334l-68.629334-68.629333a8.533333 8.533333 0 0 1 0-12.074667l33.194667-33.173333a8.533333 8.533333 0 0 1 12.053333 0l84.48 84.48 84.48-84.48a8.533333 8.533333 0 0 1 12.053334 0l33.194666 33.173333a8.533333 8.533333 0 0 1 0 12.074667l-68.650666 68.608L874.666667 192a85.333333 85.333333 0 0 1 85.333333 85.333333v106.666667a85.376 85.376 0 0 1-64 82.645333V832a128 128 0 0 1-128 128H256z m213.333333-490.666667H192v362.666667a64 64 0 0 0 60.245333 63.893333L256 896h213.333333V469.333333z m362.666667 0H533.333333v426.666667h234.666667a64 64 0 0 0 63.893333-60.245333L832 832V469.333333zM469.333333 256H149.333333a21.333333 21.333333 0 0 0-21.184 18.837333L128 277.333333v106.666667a21.333333 21.333333 0 0 0 18.837333 21.184L149.333333 405.333333h320v-149.333333z m405.333334 0H533.333333v149.333333h341.333334a21.333333 21.333333 0 0 0 21.184-18.837333L896 384v-106.666667a21.333333 21.333333 0 0 0-18.837333-21.184L874.666667 256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Icongift.defaultProps = {
  size: 18,
};

export default Icongift;