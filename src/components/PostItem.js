import React from 'react';
import styles from './PostItem.css';
import { Link } from 'dva/router';

function PostItem(props) {
  const { title, category, key } = props.post;
  return (
    <div className={styles.normal}>
      <div><Link to={`/posts/${key}`}>{title}</Link></div>
      <div>Category: {category}</div>
    </div>
  );
}

export default PostItem;
