import store from '../store';
import { fetchPostsAsync } from '../actions';

export function onPostsEnter() {
  store.dispatch(fetchPostsAsync());
}
