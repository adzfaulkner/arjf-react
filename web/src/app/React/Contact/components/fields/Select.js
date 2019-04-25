import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const Select = ({ inputKey, input, options, placeholder }) => {
    const opts = _.map(options, ({ value, label }) => {
      return (<option key={`${inputKey}-${value}`} value={value}>{label}</option>);
    });

    opts.unshift(<option key="placeholder">{placeholder}</option>);

    return (<select {...input} key={inputKey} className="form-control">{opts}</select>);
};

Select.propTypes = {
  inputKey: PropTypes.string.isRequired,
};

export default Select;