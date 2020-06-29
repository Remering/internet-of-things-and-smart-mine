import { action, ActionType } from 'typesafe-actions'
import { MESSAGE_SHOW, MESSAGE_CLOSE } from './types'
import { MessageType } from '../../types/message'

export const showMessage = (type: MessageType, message: string) => action(MESSAGE_SHOW, {type, message}) 

export type ShowMessageAction = ActionType<typeof showMessage>

export const closeMessage = () => action(MESSAGE_CLOSE)

export type CloseMessageAction = ActionType<typeof closeMessage>
