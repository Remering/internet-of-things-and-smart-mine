import {createEpicMiddleware} from 'redux-observable'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import chapterReducer from './chapter'

import * as selectors from './selectors'

export default {
  ...selectors
}

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  combineReducers({
    chapter: chapterReducer
  }),
  compose(
    applyMiddleware(
      epicMiddleware,
    )
  )
)

export type Store = typeof store;

export type State = ReturnType<typeof store.getState>

