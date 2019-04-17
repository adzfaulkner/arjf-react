import React from 'react';
import { connect } from 'react-redux';
import formFields from './fieldsConfig';
import FormField from './FormField';
import _ from 'lodash';
import { reduxForm, Field } from 'redux-form';
import { validate as emailValidate } from 'email-validator';
import { init, send } from 'emailjs-com';
import config from '../../../../config/vars';

class Form extends React.Component {
  renderFields = () => {
    return _.map(formFields, config => {
      let { name } = config;
      return <Field key={name} component={FormField} {...config}  />
    });
  };

  handleSubmit = values => {
    let { onSend, onSent } = this.props;
    let { email, subject, message } = values;

    if (!config.REACT_APP_EMAIL_JS_SERVICE_ID || !config.REACT_APP_EMAIL_JS_TEMPLATE_ID || !config.REACT_APP_EMAIL_JS_USER_ID) {
      console.log('email params not created');
      return;
    }

    onSend();
    send(
      config.REACT_APP_EMAIL_JS_SERVICE_ID,
      config.REACT_APP_EMAIL_JS_TEMPLATE_ID,
      {"reply_to":email,"subject":subject,"text":message},
      config.REACT_APP_EMAIL_JS_USER_ID
    ).then(function(response) {
      onSent();
    }, function(error) {
      onSent();
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
        <form onSubmit={handleSubmit(this.handleSubmit)} className="well form-horizontal" >
          {this.renderFields()}
          <button type="submit" className="btn btn-primary pull-right">Submit</button>
        </form>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  if (emailValidate(values.email) === false) {
    errors.email = 'Please enter valid email address';
  }

  return errors;
}

function mapStateToProps(state) {
  return {

  };
}

Form = connect(mapStateToProps)(Form);

export default reduxForm({
  validate,
  form: 'contactForm'
})(Form);