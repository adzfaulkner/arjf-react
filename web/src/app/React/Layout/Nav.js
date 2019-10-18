import React from 'react';
import { withRouter } from 'react-router-dom';
import { Nav as BSNav } from 'react-bootstrap';
import NavItem from './NavItem';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Nav extends React.Component {
  render() {
    let { extraClasses = '', location: { pathname }, config } = this.props;

    const classes = "nav " + extraClasses;

    return (
      <BSNav bsClass={classes}>
        {_.map(config, ({to, icon, label}) => (<NavItem key={label} to={to} icon={icon} label={label} pathname={pathname} />))}
      </BSNav>
    );
  }
}

Nav.propTypes = {
  extraClasses: PropTypes.string,
  location: PropTypes.object.isRequired,
  config: PropTypes.array.isRequired
};

export default withRouter(Nav);