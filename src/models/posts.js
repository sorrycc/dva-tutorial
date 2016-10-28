import {
  fetchPosts,
  fetchPost
} from '../services/posts';
import pathToRegexp from 'path-to-regexp';

export default {
  namespace: 'posts',
  state: {
    posts: [],
    postsByKey: {},
  },
  reducers: {
    save(state, { payload: postsByKey }) {
      return {
        ...state,
        postsByKey,
        posts: Object.keys(postsByKey),
      }
    },
    update(state, { payload: post }) {
      const postsByKey = { ...state.postsByKey, [post.key]: post };
      return {
        ...state,
        postsByKey,
      }
    },
  },
  effects: {
    *fetchPosts(action, { call, put }) {
      const result = yield call(fetchPosts);
      yield put({ type: 'save', payload: result });
    },
    *fetchPost({ payload: key }, { call, put }) {
      const result = yield call(fetchPost, key);
      yield put({ type: 'update', payload: { ...result, key }})
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        // /posts
        if (pathname === '/posts') {
          dispatch({ type: 'fetchPosts' });
        }
        // /posts/:key
        const match = pathToRegexp('/posts/:key').exec(pathname);
        if (match) {
          dispatch({ type: 'fetchPost', payload: match[1] });
        }
      });
    },
  },
}
