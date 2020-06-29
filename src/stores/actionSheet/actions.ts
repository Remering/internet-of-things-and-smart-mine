import { action, ActionType } from 'typesafe-actions'
import { ACTION_SHEET_SHOW, ACTION_SHEET_CLOSE, ACTION_SHEET_SET_HANDLER, ACTION_SHEET_SET_OPTIONS } from './types'
import { ActionSheetHandler, ActionSheetOption } from '../../types'

export const showActionSheet = () => action(ACTION_SHEET_SHOW)
export const closeActionSheet = () => action(ACTION_SHEET_CLOSE)
export const setActionSheetHandler = (handler: ActionSheetHandler) => action(ACTION_SHEET_SET_HANDLER, {handler})
export const setActionSheetOptions = (options: ActionSheetOption[]) => action(ACTION_SHEET_SET_OPTIONS, {options})

export type ShowActionSheetAction = ActionType<typeof showActionSheet>
export type CloseActionSheetAction = ActionType<typeof closeActionSheet>
export type SetActionSheetHandlerAction = ActionType<typeof setActionSheetHandler>
export type SetActionSheetOptionsAction = ActionType<typeof setActionSheetOptions>