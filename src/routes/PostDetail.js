import React from 'react';
import { connect } from 'dva';
import styles from './PostDetail.css';
import PostDetailComponent from '../components/PostDetail';
import Nav from '../components/Nav';

function PostDetail(props) {
  return (
    <div className={styles.normal}>
      <Nav />
      <PostDetailComponent {...props} />
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  const key = ownProps.params.key;
  return {
    loading: state.loading.models.posts,
    post: {
      ...state.posts.postsByKey[key],
      key,
    }
  };
}

export default connect(mapStateToProps)(PostDetail);
