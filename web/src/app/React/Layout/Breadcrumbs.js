import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';

class Breadcrumbs extends React.Component {
  render() {
    let { items = [] } = this.props;

    const def = [{
      label: 'Home'
    }];

    items = [...def, ...items];

    if (items.length > 1) {
      items[0].to = '/';
    }

    return (
      <ol className="breadcrumb">
        {_.map(items, ({to = null, label}) => {
          if (to === null) {
            return <li key={label}>{label}</li>;
          }

          return <li key={label}><Link to={to}>{label}</Link></li>;
        })}
      </ol>
    );
  }
}

Breadcrumbs.propTypes = {
  items: PropTypes.array
};

export default withRouter(Breadcrumbs);