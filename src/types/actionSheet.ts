import { bgColorType, bgColorMoreType, lightBgColorType } from "mp-colorui/@types/baseType";

export type ActionSheetBgColor = bgColorType | bgColorMoreType | lightBgColorType | string

export interface ActionSheetOption {
    text: string
    bgColor?: ActionSheetBgColor
}

export type ActionSheetHandler = (index: number) => void