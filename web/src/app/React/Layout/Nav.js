import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Nav as BSNav, Glyphicon } from 'react-bootstrap';

const marginRight = {
  marginRight: 5
};

const NavigationItem = ({to, icon, label, pathname}) => {
  const iconClassName = 'glyphicon ' + icon;

  let liClassName = '';
  if (
    to === pathname
    || to === '/blog' && (pathname.substring(0, 6) === '/post/' || pathname.substring(0, 6) === '/blog/')) {
    liClassName = 'active';
  }

  return (
    <li className={liClassName}>
      <Link to={to}><Glyphicon glyph={iconClassName} style={marginRight}></Glyphicon>{label}</Link>
    </li>
  );
};

const Nav = props => {
  let { extraClasses = '', location: { pathname } } = props;

  const classes = "nav " + extraClasses;

  return (
    <BSNav bsClass={classes}>
      <NavigationItem to="/" icon="glyphicon-home" label="Home" pathname={pathname} />
      <NavigationItem to="/about" icon="glyphicon-info-sign" label="About" pathname={pathname} />
      <NavigationItem to="/examples" icon="glyphicon-globe" label="Examples" pathname={pathname} />
      <NavigationItem to="/contact" icon="glyphicon-envelope" label="Contact" pathname={pathname} />
      <NavigationItem to="/blog" icon="glyphicon-pencil" label="Blog" pathname={pathname} />
    </BSNav>
  );
};

export default withRouter(Nav);