import React from 'react';
import DocumentTitle from 'react-document-title';

class Container extends React.Component {
  componentDidMount(){
    document.title = "Welcome to ARJF.co.uk"
  }

  render() {
    return (
      <DocumentTitle title="Contact ARJF">
        <React.Fragment>
          <div className="jumbotron">
            <h1>Welcome to ARJF <small>Web Developer</small></h1>
          </div>
          <div className="row container">
            <p className="text-left">I have developed this website with the sole purpose to demonstrate what I can do in my
              day to duties as a web developer.</p>
            <p className="text-left">Via this portal, you will find out my skills range and examples of work I have undertaken
              in both my own time, for my employer's past & present.</p>
          </div>
        </React.Fragment>
      </DocumentTitle>
    );
  }
};

export default Container;