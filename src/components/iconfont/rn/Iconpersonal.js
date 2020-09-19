/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

const Iconpersonal = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 960c-102.464 0-196.906667-34.410667-272.384-92.288l-2.730667-2.133333-0.469333-0.341334a450.133333 450.133333 0 0 1-9.749333-7.829333l10.218666 8.192a450.154667 450.154667 0 0 1-51.2-46.634667l-2.517333-2.709333A446.4 446.4 0 0 1 64 512C64 264.576 264.576 64 512 64s448 200.576 448 448c0 117.461333-45.226667 224.362667-119.168 304.256l-2.517333 2.709333-0.426667 0.448c-2.602667 2.773333-5.248 5.504-7.936 8.192l8.362667-8.64a450.816 450.816 0 0 1-51.2 46.634667l-2.730667 2.133333A446.037333 446.037333 0 0 1 512 960z m6.72-682.666667h-12.949333l-4.842667 0.064a139.050667 139.050667 0 0 0-134.613333 133.994667l-0.085334 4.992v95.872l0.085334 5.909333a145.770667 145.770667 0 0 0 38.976 93.994667l4.586666 4.693333 43.904 43.178667 3.456 3.84c9.088 10.88 14.506667 24.384 15.488 38.485333l0.170667 4.736-0.042667 7.552-0.256 4.693334a65.024 65.024 0 0 1-33.194666 50.645333l-3.818667 1.962667-132.394667 62.378666A382.208 382.208 0 0 0 512 896c77.013333 0 148.693333-22.656 208.810667-61.674667l-132.394667-62.378666a65.024 65.024 0 0 1-37.162667-54.656l-0.149333-4.181334v-6.016c0-16.64 6.122667-32.597333 17.109333-44.949333l3.114667-3.264 42.794667-42.026667a145.770667 145.770667 0 0 0 43.52-97.493333l0.128-6.506667v-96.469333a139.050667 139.050667 0 0 0-134.058667-138.965333L518.72 277.333333zM512 128C299.925333 128 128 299.925333 128 512c0 109.376 45.738667 208.085333 119.125333 278.016l161.557334-76.117333c0.064 0.021333 0.106667 0.128 0.106666 0.341333l-0.021333 0.405333 0.128-1.536v-6.016c0-0.64-0.170667-1.237333-0.021333-1.28l0.256 0.213334-1.301334-1.493334-42.794666-42.005333a209.984 209.984 0 0 1-62.314667-135.552l-0.384-7.04-0.106667-7.082667v-96.469333c0-107.861333 84.224-196.437333 191.466667-202.709333l5.76-0.256 5.824-0.085334h13.44a203.050667 203.050667 0 0 1 202.986667 197.269334l0.064 5.781333v96.469333c0 53.952-20.778667 105.749333-57.877334 144.682667l-4.906666 4.992-42.816 42.026667a3.562667 3.562667 0 0 0-0.938667 1.6l-0.128 0.938666v6.016c0 0.277333 0.106667 0.512 0.277333 0.704l0.32 0.213334 161.194667 75.968A382.912 382.912 0 0 0 896 512c0-212.074667-171.925333-384-384-384z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

Iconpersonal.defaultProps = {
  size: 18,
};

export default Iconpersonal;