import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';
import PropTypes from 'prop-types';

const marginRight = {
  marginRight: 5
};

class NavItem extends React.Component {
  determineClassName(to, pathname) {
    if (
      to === pathname
      || to === '/blog' && (pathname.substring(0, 6) === '/post/' || pathname.substring(0, 6) === '/blog/')) {
      return 'active';
    }

    return '';
  }

  render() {
    const {to, pathname, label, icon} = this.props;

    const iconClassName = 'glyphicon ' + icon;

    return (
      <li className={this.determineClassName(to, pathname)}>
        <Link to={to}><Glyphicon glyph={iconClassName} style={marginRight}></Glyphicon>{label}</Link>
      </li>
    );
  }
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default NavItem;