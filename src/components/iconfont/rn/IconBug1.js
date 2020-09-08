/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconBug1 = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M285.92128 53.95456a40.96 40.96 0 0 0-59.84256 55.93088l9.1136 9.75872c149.76 160.23552 403.8656 160.23552 553.61536 0l9.1136-9.75872a40.96 40.96 0 0 0-59.84256-55.93088l-9.1136 9.75872c-117.38112 125.58336-316.54912 125.58336-433.92 0l-9.1136-9.75872zM81.67424 333.02528a40.96 40.96 0 0 0-40.46848 71.22944l15.5136 8.8064a920.84224 920.84224 0 0 0 271.104 101.74464 675.81952 675.81952 0 0 0-66.82624 22.76352l-225.01376 90.0096a40.96 40.96 0 0 0 30.43328 76.05248l225.00352-90.0096a593.92 593.92 0 0 1 441.15968 0l225.01376 90.0096a40.96 40.96 0 1 0 30.4128-76.06272l-225.00352-90.0096a676.16768 676.16768 0 0 0-66.82624-22.75328 920.832 920.832 0 0 0 271.104-101.7344l15.5136-8.81664a40.96 40.96 0 0 0-40.46848-71.22944l-15.5136 8.81664a839.68 839.68 0 0 1-829.62432 0l-15.5136-8.8064z m441.7024 426.3424a40.96 40.96 0 0 0-22.75328 0l-368.64 106.5984a40.96 40.96 0 1 0 22.75328 78.6944L512 841.35936l357.26336 103.30112a40.96 40.96 0 1 0 22.75328-78.6944l-368.64-106.5984z"
        fill={getIconColor(color, 0, '#08979C')}
      />
      <Path
        d="M122.88 563.2a450.56 389.12 90 1 0 778.24 0 450.56 389.12 90 1 0-778.24 0Z"
        fill={getIconColor(color, 1, '#36CFC9')}
      />
      <Path
        d="M471.04 1011.3024V399.36h81.92v611.9424a340.30592 340.30592 0 0 1-81.92 0z"
        fill={getIconColor(color, 2, '#B5F5EC')}
      />
      <Path
        d="M166.11328 362.12736C230.79936 213.93408 361.41056 112.64 512 112.64c152.20736 0 284.0064 103.49568 347.9552 254.30016C769.71008 418.85696 649.3184 450.56 517.12 450.56c-136.2432 0-259.92192-33.65888-351.00672-88.43264z"
        fill={getIconColor(color, 3, '#08979C')}
      />
      <Path
        d="M389.12 276.48m-71.68 0a71.68 71.68 0 1 0 143.36 0 71.68 71.68 0 1 0-143.36 0Z"
        fill={getIconColor(color, 4, '#B5F5EC')}
      />
      <Path
        d="M624.64 266.24m-71.68 0a71.68 71.68 0 1 0 143.36 0 71.68 71.68 0 1 0-143.36 0Z"
        fill={getIconColor(color, 5, '#B5F5EC')}
      />
    </Svg>
  );
};

IconBug1.defaultProps = {
  size: 18,
};

export default IconBug1;
