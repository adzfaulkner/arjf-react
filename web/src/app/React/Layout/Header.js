import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import { getImage } from '../../../utils/image';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

const Container = styled.div`
`;

class Header extends React.Component {
  render() {
    const { navConfig } = this.props;

    return (
      <Container className="header">
        <Nav extraClasses="nav-pills pull-right hidden-xs" config={navConfig} />
        <h3 className="text-muted">
          <Link to="/">
            <img alt='ARJF.co.uk' src={getImage('logo.png')} width="200" heigh="40" />
          </Link>
        </h3>
      </Container>
    );
  }
}

Header.propTypes = {
  navConfig: PropTypes.array.isRequired
};

export default withRouter(Header);