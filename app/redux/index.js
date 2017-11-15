import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import epic from './epic';
import reducer from './reducer';

export default function() {
  const epicMiddleware = createEpicMiddleware(epic);
  return createStore(reducer, applyMiddleware(epicMiddleware));
}