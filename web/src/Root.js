import React from 'react';
import App from './containers/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance to
// other React components.
// IndexRoute maps HomePage component to the default route
const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;