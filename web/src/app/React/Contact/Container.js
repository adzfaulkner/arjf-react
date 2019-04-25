import React from 'react';
import ContactForm from './components/Form';
import connect from 'react-redux/es/connect/connect';
import * as actions from '../../Redux/actions';
import FormModal from './components/FormModal';
import formFields from './fieldsConfig';
import _ from 'lodash'
import { Field } from 'redux-form'
import Handler from './components/fields/Handler'

class Container extends React.Component {
  state = {
    sending: false,
    sent: false
  };

  componentDidMount(){
    document.title = "Contact ARJF"
  }

  renderFields = () => {
    return _.map(formFields, config => {
      let { name } = config;
      return <Field
        key={name}
        component={this.renderField}
        {...config}
      />
    });
  };

  renderField = props => {
    const { input, label, meta: {error, touched} } = props;

    const errorClass = error && touched ? ' has-error' : '';
    const className = 'form-group' + errorClass;

    return <div className={className}>
      <label htmlFor={input.id} className="col-sm-2 control-label">{label}</label>
      <div className="col-sm-10">
        <Handler {...props} inputKey={input.name} />
        {this.renderError(error, touched)}
      </div>
    </div>;
  };

  renderError = (error, touched) => {
    if (error && touched) {
      return <span className="help-block">{error}</span>;
    }

    return null;
  };

  render() {
    const  { modalShow, modalHide } = this.props;
    const {sent, sending} = this.state;

    if (sent === true) {
      window.scrollTo(0, 0);
      return (
        <div className="alert alert-dismissable alert-success">
          Thank you for your email. If required, I will do my best to respond within 48 hours.
        </div>
      );
    }

    return (
      <div className="jumbotron">
        <h1>Contact Me</h1>
        <div className="well">
          <p>I only accept communications via email for the time being. So please, by all means complete the following
            form and I will endeavour to respond ASAP.</p>
        </div>
        <ContactForm
          onSend={() => modalShow(() => <FormModal/>)}
          onSent={() => {modalHide(); this.setState({ sending: false, sent: true })}}
          renderForm={handleSubmit => {
            return <form onSubmit={handleSubmit} className="well form-horizontal" >
              {this.renderFields()}
              <button type="submit" className="btn btn-primary pull-right">Submit</button>
            </form>;
          }}
        />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Container);