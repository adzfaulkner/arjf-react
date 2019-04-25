import React from 'react';
import PropTypes from 'prop-types';

const Default = ({ inputKey, input, type, placeholder }) => {
  return (<input {...input} key={inputKey} type={inputKey} placeholder={placeholder} className="form-control"/>);
};

Default.propTypes = {
  inputKey: PropTypes.string.isRequired,
};

export default Default;