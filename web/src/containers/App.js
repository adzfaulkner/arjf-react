import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from '../layout/Header';
import NavBar from '../layout/NavBar';
import Footer from '../layout/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from '../components/About';
import Examples from '../components/Examples';
import Contact from '../components/Contact';
import Blog from '../components/Blog/Blog';
import Post from '../components/Blog/Post';
import HomePage from '../components/HomePage';

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <NavBar/>
          <Header />
            <div>
              <Route path="/about" exact component={About} />
              <Route path="/examples" exact component={Examples} />
              <Route path="/contact" exact component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/post/:slug" exact component={Post} />
              <Route path="/" exact component={HomePage} />
            </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default connect(null, actions)(App);
