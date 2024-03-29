import React from 'react';
import * as actions from '../../Redux/actions';
import connect from 'react-redux/es/connect/connect';
import { getImage } from '../../../utils/image';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Modal from './components/Modal';

const ExamplesContainer = styled.div`
  margin-top:15px;
`;

class Container extends React.Component {
  componentDidMount(){
    document.title = "ARJF Portfolio";
    this.props.fetchExamples();
  }

  handleOnClick = ({url, description, img }) => {
    let { modalShow } = this.props;
    modalShow(
      modalHide => <Modal url={url} description={description} img={img} modalHide={modalHide}/>
    );
  };

  renderExample = example => {
    let { url, img } = example;

    return (
      <div className="col-xs-12 col-sm-6 text-center exampleRow" key={url}>
        <a className="exampleThumbnail" onClick={() => this.handleOnClick(example)}>
          <img alt={url} src={getImage(`examples/cropped/${img}`)} width="250" />
        </a>
      </div>
    );
  }

  renderExamples() {
    const { examples } = this.props;

    return (
      <ExamplesContainer className="container">
        {examples.map(example => this.renderExample(example))}
      </ExamplesContainer>
    );
  }

  render() {
      return (
          <div>
            <div className="jumbotron">
              <h1>Examples</h1>
            </div>
            <div className="row container">
              <p>A lot of my most recent work has been the developing of private portals for my current employer hence I am not able to provide links to them. However, I have some links that demonstrates some of my skills described in the ABOUT ME page. They are as following:</p>
            </div>
            {this.renderExamples()}
        </div>
      );
  }
}

Container.propTypes = {
  examples: PropTypes.array.isRequired,
  fetchExamples: PropTypes.func.isRequired,
};

function mapStateToProps({ examples: { examples }, }) {
  return {
    examples
  };
}

export default connect(
  mapStateToProps,
  actions
)(Container);