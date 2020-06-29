import { createReducer } from 'typesafe-actions';
import { MessageType } from '../../types';
import { MESSAGE_SHOW, MESSAGE_CLOSE } from './types';
import { ShowMessageAction } from './actions';

export interface State {
    show: boolean
    type: MessageType
    message: string
}

const intialState: State = {
    show: false,
    message: '',
    type: 'info'
}

export const reducer = createReducer(intialState, {
    [MESSAGE_SHOW]: (state: State, { payload: {type, message} }: ShowMessageAction) => ({
        ...state,
        type,
        message,
        show: true,
    }),
    [MESSAGE_CLOSE]: (state: State) => ({
        ...state,
        show: false
    })
})
