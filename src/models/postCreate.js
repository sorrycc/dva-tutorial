import { routerRedux } from 'dva/router';
import {
  createPost
} from '../services/posts';

export default {
  namespace: 'postCreate',
  state: {},
  reducers: {},
  effects: {
    *submit({ payload: fields }, { call, put }) {
      const key = yield call(createPost, fields);
      yield put({ type: 'posts/update', payload: { ...fields, key } });
      yield put(routerRedux.push('/posts'));
    },
  },
  subscriptions: {},
}
