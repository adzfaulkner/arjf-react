import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import * as actions from '../../actions/index';
import Sidebar from './Sidebar';
import Loading from './Loading';

const renderHTML = rawHTML => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

class Post extends React.Component {
  componentDidMount() {
    let { fetchPost, match: { params: { slug } } } = this.props;
    fetchPost(slug);
  }

  renderBreadcrumbs = (title) => {
    return (<ol className="breadcrumb">
      <li><Link to={"/blog"}>Home</Link></li>
      <li>{title}</li>
    </ol>);
  };

  render() {
    let { post, loading, archives } = this.props;

    if (loading) {
      return <Loading loading={true} />;
    }

    if (post === null) {
      return null;
    }

    document.title = `${post.getTitle()} post`;

    return (
      <div>
        {this.renderBreadcrumbs(post.getTitle())}
        <div id="main">
          <div id="content" className="content--post">
            <h1>{post.getTitle()}</h1>
            <h4>Posted on {post.getPublishedDate().format('MMMM Do, YYYY')}</h4>
            {renderHTML(post.getContent())}
            <hr/>
          </div>
          <Sidebar archives={archives} />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ post: { post, loading }, archives: { archives } }) {
  return {
    post,
    loading,
    archives
  };
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(Post));