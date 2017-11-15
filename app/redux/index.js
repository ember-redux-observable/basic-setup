import {createStore} from 'redux';

const reducer = (state = {}, action) => {
  if(action.type === 'HELLO') {
    return Object.assign({}, state, { hello: true });
  }
  if(action.type === 'BYE') {
    return Object.assign({}, state, { hello: false });
  }
  return state;
};

export default function() {
  return createStore(reducer);
};