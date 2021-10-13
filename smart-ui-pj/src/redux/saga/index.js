import {  all  } from 'redux-saga/effects'
import { allPostsWatcher } from './fetchSaga'


export function* rootWatcher(){
  yield all([allPostsWatcher])
}