import React from 'react';
import examples from '../json/examples.json';
import Modal from './Modal';
import * as actions from '../actions';
import connect from 'react-redux/es/connect/connect';
import { getImage } from '../utils/image';
import styled from 'styled-components';

const ExamplesContainer = styled.div`
  margin-top:15px;
`;

class Examples extends React.Component {
  componentDidMount(){
    document.title = "ARJF Portfolio"
  }

  handleOnClick = example => {
    let { modalShow } = this.props;
    modalShow(example);
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
    return (
      <ExamplesContainer className="container">
        {examples.map(example => this.renderExample(example))}
      </ExamplesContainer>
    );
  }

  render() {
      return (
          <div>
            <Modal />
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



export default connect(
  null,
  actions
)(Examples);