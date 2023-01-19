import { applyMiddleware, createStore } from 'redux';
import { CounterReducer } from './features/counter/counterReducer';
import LoggerMiddleware from './middleware/loggerMiddleware';

export const store = createStore(CounterReducer,applyMiddleware(LoggerMiddleware));

