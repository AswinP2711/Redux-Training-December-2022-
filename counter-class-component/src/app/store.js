import { createStore } from 'redux';
import { CounterReducer } from './features/counter/counterReducer';

export const store = createStore(CounterReducer);

