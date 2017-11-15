import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import epic from './epic';
import reducer from './reducer';

// redux devtools store enhancer
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function() {
  const epicMiddleware = createEpicMiddleware(epic);
  return createStore(reducer, enhancer(applyMiddleware(epicMiddleware)));
}