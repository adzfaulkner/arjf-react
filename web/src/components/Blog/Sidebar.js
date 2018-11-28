import React from 'react';
import Categories from './Categories';
import Archives from './Archives';

class Sidebar extends React.Component {
  render() {
    let { archives } = this.props;

    return (
      <div id="sidebar">
        <Categories/>
        <Archives archives={archives} />
      </div>
    );
  }
}

export default Sidebar;