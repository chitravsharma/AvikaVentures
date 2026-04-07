import React from 'react';

const Logo = ({ height = 40 }) => (
  <img
    src="/AvikaV.jpg"
    alt="Avika Ventures"
    height={height}
    style={{ borderRadius: 6, objectFit: 'contain', display: 'block' }}
  />
);

export default Logo;
