import React from 'react';

const Default = ({ input, type, placeholder }) => {
  return (<input {...input} key={input.name} type={type} placeholder={placeholder} className="form-control"/>);
};

export default Default;