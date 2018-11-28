import React from 'react';
import _ from 'lodash';

const Select = ({ input, options, placeholder }) => {
    const opts = _.map(options, ({ value, label }) => {
      return (<option key={value} value={value}>{label}</option>);
    });

    opts.unshift(<option key="placeholder">{placeholder}</option>);

    return (<select {...input} key={input.name} className="form-control">{opts}</select>);
};

export default Select;