import React from 'react';
import Nav from './Nav.js';
import { Navbar as BSNavBar } from 'react-bootstrap';

class NavBar extends React.Component
{
  state = {expanded: false};

  handleClick = ({ target }) => {
    if (String(target).substr(0,4) === 'http') {
      this.setState({expanded: false});
    }
  };

  handleToggle = () => {
    const expanded = this.state.expanded;
    this.setState({expanded: expanded === false});
  };

  render() {
    return <div className="hidden-lg hidden-md hidden-sm">
      <BSNavBar inverse collapseOnSelect={true} fixedTop={true} expanded={this.state.expanded} onToggle={this.handleToggle} onClick={this.handleClick}>
        <BSNavBar.Toggle />
        <BSNavBar.Collapse>
          <Nav/>
        </BSNavBar.Collapse>
      </BSNavBar>
    </div>;
  }
}

export default NavBar;