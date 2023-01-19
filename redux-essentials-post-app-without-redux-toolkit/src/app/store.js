import { createStore } from 'redux';
import PostsReducer from '../features/posts/postsSlice'

export const store = createStore(PostsReducer);
