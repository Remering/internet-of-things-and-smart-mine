import { State } from '../stores';

const getMessageState = (state: State) => state.message

export const getMessageShow = (state: State) => getMessageState(state).show

export const getMessage = (state: State) => getMessageState(state).message

export const getMessageType = (state: State) => getMessageState(state).type
