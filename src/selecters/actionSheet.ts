import { State } from '../stores'

const getActionSheetState = (state: State) => state.actionSheet

export const getActionSheetShow = (state: State) => getActionSheetState(state).show

export const getActionSheetHandler = (state: State) => getActionSheetState(state).handler

export const getActionSheetOptions = (state: State) => getActionSheetState(state).options