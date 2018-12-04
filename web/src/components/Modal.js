import React from 'react';
import BSModal from 'react-bootstrap/lib/Modal';
import { connect } from 'react-redux';
import * as actions from '../actions';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    let { modal: { show, render }, modalHide } = this.props;

    return (
      <BSModal
        show={show}
        onHide={modalHide}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        {render && render(modalHide)}
      </BSModal>
    );
  }
}

Modal.propTypes = {
  modal: PropTypes.object.isRequired,
  modalHide: PropTypes.func.isRequired,
};

function mapStateToProps({ modal }) {
  return { modal };
}

export default connect(
  mapStateToProps,
  actions
)(Modal);
