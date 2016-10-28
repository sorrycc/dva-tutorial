import React from 'react';
import styles from './PostCreate.css';
import { Form, Input, Button, Spin } from 'antd';

function PostCreate(props) {
  const { getFieldDecorator, validateFields, getFieldsValue } = props.form;

  function handleSubmit(e) {
    e.preventDefault();
    validateFields((errors, values) => {
      if (errors) {
        return;
      }
      props.onSubmit(values);
    });
  }

  return (
    <div className={styles.normal}>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Title</div>
          <div>{ getFieldDecorator('title')(<Input />) }</div>
        </div>
        <div>
          <div>Category</div>
          <div>{ getFieldDecorator('category')(<Input />) }</div>
        </div>
        <div>
          <div>Content</div>
          <div>{ getFieldDecorator('content')(<Input type="textarea" />) }</div>
        </div>
        <div>
          <Button type="primary" onClick={handleSubmit}>Submit</Button>
          { ' ' }
          <Button type="ghost">Cancel</Button>
        </div>
      </form>
    </div>
  );
}

export default Form.create()(PostCreate);
