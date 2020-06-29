import { createReducer } from 'typesafe-actions'


import { ActionSheetOption, ActionSheetHandler } from '../../types'
import { ACTION_SHEET_SHOW, ACTION_SHEET_CLOSE, ACTION_SHEET_SET_HANDLER, ACTION_SHEET_SET_OPTIONS } from './types'
import { SetActionSheetHandlerAction, SetActionSheetOptionsAction } from './actions'

export interface State {
    show: boolean
    options: ActionSheetOption[]
    handler?: ActionSheetHandler
}

const initialState: State = {
    show: false,
    options: [],
}


export const reducer = createReducer(initialState, {
    [ACTION_SHEET_SHOW]: (state: State) => ({
        ...state,
        show: true
    }),
    [ACTION_SHEET_CLOSE]: (state: State) => ({
        ...state,
        show: false
    }),
    [ACTION_SHEET_SET_HANDLER]: (state: State, {payload: {handler}}: SetActionSheetHandlerAction) => ({
        ...state,
        handler
    }),
    [ACTION_SHEET_SET_OPTIONS]: (state: State, {payload:{options}}: SetActionSheetOptionsAction) => ({
        ...state,
        options
    })
})