import React from 'react';

const Textarea = ({ input }) => {
  return (<textarea {...input} key={input.name} className="form-control"/>);
};

export default Textarea;