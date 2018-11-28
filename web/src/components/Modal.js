import React from 'react';
import BSModal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { getImage } from '../utils/image';
import PropTypes from 'prop-types';

const renderHTML = rawHTML => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

class Modal extends React.Component {
  render() {
    let { modal: { show, url, description, img }, modalHide } = this.props;

    return (
      <BSModal
        show={show}
        onHide={modalHide}
        container={this}
        aria-labelledby="contained-modal-title"
      >
        <BSModal.Header closeButton>
          <BSModal.Title id="contained-modal-title">
            {url}
          </BSModal.Title>
        </BSModal.Header>
        <BSModal.Body>
          <img alt={url} className="exampleImg img-responsive" src={getImage(`examples/cropped/${img}`)} />
          <div style={{ marginTop: '10px'}}>
            {renderHTML(description)}
          </div>
        </BSModal.Body>
        <BSModal.Footer>
          <Button onClick={modalHide}>Close</Button>
          <a className="btn btn-primary visitWebsite" href={`http://${url}`} target="_blank"><i className="glyphicon glyphicon-globe"></i> Visit Website</a>
        </BSModal.Footer>
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
