import React from 'react';
import { connect } from 'dva';
import styles from './PostCreate.css';
import Nav from '../components/Nav';
import PostCreateComponent from '../components/PostCreate';

function PostCreate(props) {

  function handleSubmit(fields) {
    props.dispatch({
      type: 'postCreate/submit',
      payload: fields,
    });
  }

  return (
    <div className={styles.normal}>
      <Nav />
      <PostCreateComponent loading={props.loading} onSubmit={handleSubmit} />
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state.loading.models);
  return {
    loading: state.loading.models.postCreate,
  };
}

export default connect(mapStateToProps)(PostCreate);
