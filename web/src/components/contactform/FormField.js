import React from 'react';
import Select from './Select';
import Textarea from './Textarea';
import Default from './Default';

class FormField extends React.Component {
  renderSelect = ({ input, options, placeholder }) => (<Select input={input} options={options} placeholder={placeholder} />);

  renderTextarea = ({input}) => (<Textarea input={input} />);

  renderField = props => {
    let { type, input, placeholder } = props;

    if (type === 'textarea') {
      return this.renderTextarea(props);
    }

    if (type === 'select') {
      return this.renderSelect(props);
    }

    return (<Default input={input} key={input.name} type={type} placeholder={placeholder} className="form-control"/>);
  };

  renderError = (error, touched) => {
    if (error && touched) {
      return <span className="help-block">{error}</span>;
    }

    return null;
  };

  render() {
    const { input, label, meta: {error, touched} } = this.props;

    const errorClass = error && touched ? ' has-error' : '';
    const className = 'form-group' + errorClass;

    return (
      <div className={className}>
        <label htmlFor={input.id} className="col-sm-2 control-label">{label}</label>
        <div className="col-sm-10">
          {this.renderField(this.props)}
          {this.renderError(error, touched)}
        </div>
      </div>
    );
  }
}

export default FormField;