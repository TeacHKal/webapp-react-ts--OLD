import { combineEpics } from 'redux-observable';
import * as todosEpics from '../features/todos/epics';
import * as counterEpics from '../features/counter/epics';

export default combineEpics(
    ...Object.values(todosEpics),
    ...Object.values(counterEpics),
);
