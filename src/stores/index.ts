import { createEpicMiddleware } from 'redux-observable'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { bookReducer } from './book'
import { messageReducer } from './message';
import { actionSheetReducer } from './actionSheet';

const epicMiddleware = createEpicMiddleware();

export const store = createStore(
  combineReducers({
    book: bookReducer,
    message: messageReducer,
    actionSheet: actionSheetReducer,
  }),
  compose(
    applyMiddleware(
      epicMiddleware,
      createLogger(),
    )
  )
)

export type Store = typeof store;

export type State = ReturnType<typeof store.getState>

