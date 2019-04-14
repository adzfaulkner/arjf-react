import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import _ from 'lodash';
import * as actions from '../../../Redux/actions';
import PropTypes from 'prop-types';

class Categories extends React.Component {
  onClick = id => {
    let { fetchPosts } = this.props;
    fetchPosts({
      categoryId: id
    });
  };

  componentDidMount() {
    let { fetchCategories } = this.props;
    fetchCategories();
  }

  renderListItem = category => {
    let { id, name, count, slug } = category;

    if (count < 1) {
      return null;
    }

    return (
      <li key={`blog-category-${id}`} className={`cat-item cat-item-${id}`}>
        <Link to={`/blog/category/${slug}`} onClick={() => this.onClick(id)}>{name}</Link> ({count})
      </li>
    );
  };

  renderCategories = categories => {
    return _.map(categories, category => this.renderListItem(category));
  };

  render() {
    let { categories } = this.props;

    return (
      <div>
        <h2>Categories</h2>
        <ul>
          {this.renderCategories(categories)}
        </ul>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired
};

function mapStateToProps({ categories: { categories } }) {
  return { categories  };
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(Categories));