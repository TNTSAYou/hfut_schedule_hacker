/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconUnlike = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M885.9 490.3c3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-28.3-9.3-55.5-26.1-77.7 3.6-12 5.4-24.4 5.4-37 0-51.6-30.7-98.1-78.3-118.4-8.3-3.6-17.2-5.4-26.5-5.4H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h129.3l85.8 310.8C372.9 889 418.9 924 470.9 924c29.7 0 57.4-11.8 77.9-33.4 20.5-21.5 31-49.7 29.5-79.4l-6-122.9h239.9c12.1 0 23.9-3.2 34.3-9.3 40.4-23.5 65.5-66.1 65.5-111 0-28.3-9.3-55.5-26.1-77.7zM184 456V172h81v284h-81z m627.2 160.4H496.8l9.6 198.4c0.6 11.9-4.7 23.1-14.6 30.5-6.1 4.5-13.6 6.8-21.1 6.7-19.6-0.1-36.9-13.4-42.2-32.3L329 459.2V172h415.4c20.4 9.2 33.6 29.4 33.6 51.8 0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 9.7-2.3 18.9-6.9 27.3l-13.9 25.4 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 9.7-2.3 18.9-6.9 27.3l-14 25.5 21.9 19c12.5 10.8 19.6 26.5 19.6 43 0 19.1-11 37.5-28.8 48.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconUnlike.defaultProps = {
  size: 18,
};

export default IconUnlike;
