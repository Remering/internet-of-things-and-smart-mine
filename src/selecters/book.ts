import { State } from "../stores"


export const getChapterState = (state: State) => state.chapter;

export const getChapters = (state: State) => getChapterState(state).chapters
