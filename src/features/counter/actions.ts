//import { Counter }from 'MyModels';
import { createAction } from '@reduxjs/toolkit'

export const increment = createAction('INCREMENT')
export const multiple = createAction<number>('COUNTER_MULTIPLE');
export const double = createAction('COUNTER_DOUBLE')();
export const triple = createAction('COUNTER_TRIPLE')();

export const pingPong = createAction('PING_PONG');


