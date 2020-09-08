/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const IconScheduleFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M872.800369 958.708971H151.199631c-37.902238 0-68.724221-30.821983-68.724221-68.724221V202.738447c0-37.894052 30.821983-68.724221 68.724221-68.724221h721.600738c37.902238 0 68.724221 30.830169 68.724221 68.724221v687.247327c0 37.902238-30.821983 68.723198-68.724221 68.723197zM151.199631 202.738447v687.247327h721.65088l-0.050142-687.247327H151.199631z"
        fill={getIconColor(color, 0, '#444444')}
      />
      <Path
        d="M907.161968 430.830329H116.837009c-18.97619 0-34.361599-15.385409-34.361599-34.361599s15.385409-34.361599 34.361599-34.361599h790.324959c18.97619 0 34.361599 15.385409 34.361599 34.361599s-15.385409 34.361599-34.361599 34.361599zM323.008648 271.461645c-18.97619 0-34.361599-15.385409-34.361599-34.361599V99.652628c0-18.97619 15.385409-34.361599 34.361599-34.361599s34.361599 15.385409 34.361599 34.361599v137.447418c0.001023 18.97619-15.384385 34.361599-34.361599 34.361599zM700.990329 271.461645c-18.97619 0-34.361599-15.385409-34.361599-34.361599V99.652628c0-18.97619 15.385409-34.361599 34.361599-34.361599S735.351927 80.676437 735.351927 99.652628v137.447418c0 18.97619-15.385409 34.361599-34.361598 34.361599z"
        fill={getIconColor(color, 1, '#444444')}
      />
      <Path
        d="M554.957371 804.075125h-85.904509V511.998977h51.54291c18.977213 0 34.361599 15.384385 34.361599 34.361599v257.714549z"
        fill={getIconColor(color, 2, '#0089ff')}
      />
    </Svg>
  );
};

IconScheduleFill.defaultProps = {
  size: 18,
};

export default IconScheduleFill;
