import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import * as actions from '../../Redux/actions';
import Sidebar from '../Blog/components/Sidebar';
import Loading from '../Loading';
import DocumentTitle from 'react-document-title';

const renderHTML = rawHTML => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

class Container extends React.Component {
  componentWillUpdate = () => {
    window.scrollTo(0, 0);
  }

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

    return (
      <DocumentTitle title={`${post.getTitle()} post`}>
        <React.Fragment>
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
        </React.Fragment>
      </DocumentTitle>
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
)(Container));