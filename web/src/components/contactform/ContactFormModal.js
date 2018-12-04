import React from 'react';
import Loading from '../Loading';
import BSModal from 'react-bootstrap/lib/Modal';

class ContactFormModal extends React.Component {
  render() {
    return (
      <BSModal.Body>
        <Loading loading={true} />
      </BSModal.Body>
    );
  }
}

export default ContactFormModal;