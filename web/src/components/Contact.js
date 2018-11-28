import React from 'react';
import ContactForm from './contactform/ContactForm';
import connect from 'react-redux/es/connect/connect';
import * as actions from '../actions';

class Contact extends React.Component {
  state = { sent: false};

  componentDidMount(){
    document.title = "Contact ARJF"
  }

  render() {
    if (this.state.sent === true) {
      window.scrollTo(0, 0);
      return (
        <div className="alert alert-dismissable alert-success">
          Thank you for your email. If required, I will do my best to respond within 48 hours.
        </div>
      );
    }

    return (
      <div>
        <div className="jumbotron">
          <h1>Contact Me</h1>
          <div className="well">
            <p>I only accept communications via email for the time being. So please, by all means complete the following
              form and I will endeavour to respond ASAP.</p>
          </div>
          <ContactForm onSent={() => this.setState({ sent: true })} />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Contact);