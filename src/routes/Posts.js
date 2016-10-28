import React from 'react';
import { connect } from 'dva';
import styles from './Posts.css';
import PostsComponent from '../components/Posts';
import Nav from '../components/Nav';

function Posts(props) {
  return (
    <div className={styles.normal}>
      <Nav />
      <PostsComponent posts={props.posts} loading={props.loading} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    loading: state.loading.models.posts,
    posts: state.posts.posts.map(key => ({
      ...state.posts.postsByKey[key],
      key,
    })),
  };
}

export default connect(mapStateToProps)(Posts);
