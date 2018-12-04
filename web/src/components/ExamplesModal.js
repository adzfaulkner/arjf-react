import React from 'react';
import { getImage } from '../utils/image';
import PropTypes from 'prop-types';
import BSModal from 'react-bootstrap/lib/Modal';
import Button from 'react-bootstrap/lib/Button';

const renderHTML = rawHTML => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

class ExamplesModal extends React.Component {
  render() {
    const { url, img, description, modalHide } = this.props;

    const validUrl = url.indexOf('.') >= 0;

    return (
      <div>
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
          { validUrl && <a className="btn btn-primary visitWebsite" href={`http://${url}`} target="_blank"><i className="glyphicon glyphicon-globe"></i> Visit Website</a> }
        </BSModal.Footer>
      </div>
    );
  }
}

ExamplesModal.propTypes = {
  url: PropTypes.string,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  modalHide: PropTypes.func.isRequired,
};

export default ExamplesModal;