import { State } from '../stores'
import { BookStore } from '../stores/book';

const getBookState = (state: State) => state.book as BookStore;

export const getBooks = (state: State) => getBookState(state).books

export const getBook = (state: State) => (uuid: string) => getBooks(state)[uuid];

export const isNavigating = (state: State) => getBookState(state).navigating




