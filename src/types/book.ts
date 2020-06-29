import { Entries } from './entries';
import { Content } from './content';

export interface Book {
  name: string
  contents: Entries<Chapter>
}

export interface Chapter {
  name: string
  contents: Entries<SubChapter>
}

export interface SubChapter {
  name: string
  contents: Entries<Content>
}

