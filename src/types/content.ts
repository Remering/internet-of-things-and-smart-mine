import { iconType } from "mp-colorui/@types/baseType"


type ContentType =
    | 'file'
    | 'video'


export interface Content {
    name: string
    type: ContentType
    url: string
}

type ContentIcons = {
    [type in ContentType]: iconType
}

export const contentIcons: ContentIcons = {
    'file': 'file',
    'video': 'video',
}

