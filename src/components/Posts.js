import React from 'react';
import styles from './Posts.css';
import PostItem from './PostItem';
import { Spin } from 'antd';

function Posts(props) {
  return (
    <div className={styles.normal}>
      <h2 className={styles.title}>Posts</h2>
      <Spin spinning={props.loading}>
        <div className={styles.list}>
          {
            props.posts.map(post => {
              return <PostItem key={post.key} post={post} />
            })
          }
        </div>
      </Spin>
    </div>
  );
}

export default Posts;
