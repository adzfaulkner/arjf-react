import React from 'react';
import PropTypes from 'prop-types';

const Textarea = ({ inputKey, input }) => {
  return (<textarea {...input} key={inputKey} className="form-control"/>);
};

Textarea.propTypes = {
  inputKey: PropTypes.string.isRequired,
};

export default Textarea;