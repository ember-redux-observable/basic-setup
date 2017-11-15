import 'rxjs/Rx';
import { combineEpics } from 'redux-observable';

const helloThanByeEpic = action$ => {
  return action$
    .ofType('HELLO')
    .delay(1000)
    .mapTo({ type: 'BYE' });
};

export default combineEpics(helloThanByeEpic);