import React from 'react';
import { connect } from 'react-redux';
import formFields from '../fieldsConfig';
import _ from 'lodash';
import { reduxForm } from 'redux-form';
import { validate as emailValidate } from 'email-validator';
import { send } from 'emailjs-com';
import getEnv from '../../../../config/env';

class Form extends React.Component {
  handleSubmit = async values => {
    let { onSend, onSent } = this.props;
    let { email, subject, message } = values;

    const serviceId = getEnv('EMAIL_JS_SERVICE_ID');
    const templateId = getEnv('EMAIL_JS_TEMPLATE_ID');
    const userId = getEnv('EMAIL_JS_USER_ID');

    try {
      onSend();
      const response = await send(serviceId, templateId,{"reply_to":email,"subject":subject,"text":message}, userId)
      onSent(response);
    } catch (e) {
      onSent(e);
    }
  }

  render() {
    const { handleSubmit, renderForm } = this.props;
    return renderForm(handleSubmit(this.handleSubmit));
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