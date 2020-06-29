import { createReducer } from 'typesafe-actions';
import {Entries} from '../../types/entries';
import {Book} from '../../types/book';
import {NAVIGATED, NAVIGATING} from "./types";


export interface State {
  navigating: boolean
  books: Entries<Book>
}

const initialState: State = {
  navigating: false,
  books: {
    'fd9e1d558f714dfb98d1d3d85e7deea7': {
      name: '物联网与智能矿山',
      contents: {
        '0cb0721034a44ac38730182344ab0047': {
            name: '绪论',
            contents: {
              '90e6436b848d49379d11be1a21b6f5e8': {
                name: '物联网技术是互联网与应用结合的必然',
                contents: {
                  '70ff0961d04b4cf1911b1d8e40cd5627': {
                    name: '物联网是互联网发展的必然趋势',
                    type: 'file',
                    url: 'http://39.100.227.26:8888/fd9e1d558f714dfb98d1d3d85e7deea7/0cb0721034a44ac38730182344ab0047/90e6436b848d49379d11be1a21b6f5e8/70ff0961d04b4cf1911b1d8e40cd5627.pdf',
                  },
                  '3fbd423a47e14177abc0077d1b0d30f4': {
                    name: '第四次工业革命与物联网',
                    type: 'file',
                    url: 'http://39.100.227.26:8888/fd9e1d558f714dfb98d1d3d85e7deea7/0cb0721034a44ac38730182344ab0047/90e6436b848d49379d11be1a21b6f5e8/3fbd423a47e14177abc0077d1b0d30f4.pdf',
                  },
                }
              }
            }
        },
      }
    }
  }
}

export const reducer = createReducer(initialState, {
  [NAVIGATING]: (state: State) => ({
    ...state,
    navigating: true
  }),
  [NAVIGATED]: (state: State) => ({
    ...state,
    navigating: false
  })
})

