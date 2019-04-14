import React from 'react';
import Nav from './Nav';
import styled from 'styled-components';
import { getImage } from '../../../utils/image';
import { Link, withRouter } from 'react-router-dom';

const Container = styled.div`
`;

class Header extends React.Component {
  render() {
    return (
      <Container className="header">
        <Nav extraClasses="nav-pills pull-right hidden-xs"/>
        <h3 className="text-muted">
          <Link to="/">
            <img alt='ARJF.co.uk' src={getImage('logo.png')} width="200" heigh="40" />
          </Link>
        </h3>
      </Container>
    );
  }
}

export default withRouter(Header);