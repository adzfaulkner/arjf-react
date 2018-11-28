import Loader from 'react-loader';
import React from 'react';

const options = {
  length: 20,
  width: 10,
  radius: 30,
  scale: 1.00,
  corners: 1,
  color: '#fff',
  opacity: 0.25,
  rotate: 0,
  direction: 1,
  speed: 1,
  position: 'relative',
  display: 'block',
  zIndex: 0,
};

export default function ({loading}) {
  if (loading === true) {
    return <div id="main"><Loader options={options} className="spinner" /></div>;
  }

  return null;
}
