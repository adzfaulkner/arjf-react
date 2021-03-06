import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../Redux/actions';
import Header from './Layout/Header';
import NavXs from './Layout/NavXs';
import Footer from './Layout/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutContainer from './About/Container';
import ExamplesContainer from './Examples/Container';
import ContactContainer from './Contact/Container';
import BlogContainer from './Blog/Container';
import PostContainer from './Post/Container';
import HomeContainer from './Home/Container';
import navConfig from '../../config/nav';

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavXs config={navConfig} />
          <Header navConfig={navConfig} />
            <React.Fragment>
              <Route path="/about" exact component={AboutContainer} />
              <Route path="/examples" exact component={ExamplesContainer} />
              <Route path="/contact" exact component={ContactContainer} />
              <Route path="/blog/category/:category" exact component={BlogContainer} />
              <Route path="/blog/archive/:year/:month" exact component={BlogContainer} />
              <Route path="/blog" exact component={BlogContainer} />
              <Route path="/post/:slug" exact component={PostContainer} />
              <Route path="/" exact component={HomeContainer} />
            </React.Fragment>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
