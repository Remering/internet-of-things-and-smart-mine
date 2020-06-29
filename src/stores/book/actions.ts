import { action } from 'typesafe-actions';
import Taro from '@tarojs/taro';
import { NAVIGATED, NAVIGATING } from './types';

export const makeNavigating = () => action(NAVIGATING)

export const makeNavigated = () => action(NAVIGATED)

export const navigateToSubChapter = (bookUUID: string) => async (chapterUUID: string, chapterIndex: number) => {
  await Taro.navigateTo({
    url: `/pages/chapter/index?book=${bookUUID}&chapter=${chapterUUID}&chapterIndex=${chapterIndex}`,
  })
}
