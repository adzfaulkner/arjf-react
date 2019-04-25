import PropTypes from 'prop-types';

import React from 'react';
import Select from './Select';
import Textarea from './Textarea';
import Default from './Default';

class Handler extends React.Component {
  renderSelect(input, inputKey, options, placeholder) {
    return <Select input={input} inputKey={inputKey} options={options} placeholder={placeholder} />
  }

  renderTextarea(input, inputKey) {
    return <Textarea input={input} inputKey={inputKey} />
  }

  render() {
    let { inputKey, type, input, placeholder, options } = this.props;

    if (type === 'textarea') {
      return this.renderTextarea(input, inputKey);
    }

    if (type === 'select') {
      return this.renderSelect(input, inputKey, options, placeholder);
    }

    return (<Default input={input} inputKey={inputKey} type={type} placeholder={placeholder} className="form-control"/>);
  }
}

Handler.propTypes = {
  inputKey: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.array,
  placeHolder: PropTypes.string,
};

export default Handler;