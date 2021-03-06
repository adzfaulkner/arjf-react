import React from 'react';
import * as actions from '../../Redux/actions';
import connect from 'react-redux/es/connect/connect';
import _ from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Loading from '../Loading';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

const renderHTML = rawHTML => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

class Container extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    let { match: { params } } = this.props;
    this.renderPosts(params);
  }

  componentWillUpdate = () => {
    window.scrollTo(0, 0);
  }

  renderPosts = filters => {
    this.props.fetchPosts(filters);
  };

  renderSample = post => {
    return (
      <div key={post.getId()}>
        <h2>
          <Link to={`/post/${post.getSlug()}`}>{post.getTitle()}</Link>
        </h2>
        <h4>Posted on {post.getPublishedDate().format('MMMM Do, YYYY')}</h4>
        {renderHTML(post.getExcerpt())}
        <hr/>
      </div>
    );
  }

  renderSamples = posts => {
    return _.map(posts, post => this.renderSample(post));
  }

  render() {
    let { posts, archives, loading } = this.props;

    return (
      <DocumentTitle title="ARJF Blog">
        <div id="main">
          <Loading loading={loading} />
          {this.renderSamples(posts)}
          <a className="rss" href="/static/rss.xml"></a>
          {loading === false && <Sidebar archives={archives} />}
        </div>
      </DocumentTitle>
    );
  }
}

Container.propTypes = {
  posts: PropTypes.array.isRequired,
  archives: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps({ posts: { posts, loading }, archives: { archives } }) {
  return {
    posts,
    archives,
    loading
  };
}

export default withRouter(connect(
    mapStateToProps,
    actions
)(Container));
