import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import _ from 'lodash';
import * as actions from '../../actions/index';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  onClick = date => {
    let { fetchPosts } = this.props;
    fetchPosts({
      date
    });
  };

  renderListItem = date => {
    return (
      <li key={`blog-archive-${date.format('MM-YYYY')}`}>
        <Link to={`/blog/archive/${date.format('YYYY/MM')}`} onClick={() => this.onClick(date)}>{date.format('MMMM YYYY')}</Link>
      </li>
    );
  };

  renderArchives = archives => {
    return _.map(archives, date => this.renderListItem(date));
  };

  render() {
    let { archives } = this.props;

    if (archives.length < 1) {
      return null;
    }

    return (
      <div>
        <h2>Archives</h2>
        <ul>
          {this.renderArchives(archives)}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  archives: PropTypes.array.isRequired
};

export default withRouter(connect(
  null,
  actions
)(Categories));