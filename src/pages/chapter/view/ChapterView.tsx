import Taro from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import { Chapter } from '../../../types'
import SubChapterView from './SubChapterView'


interface ChapterViewProps {
    chapterIndex: number
    chapter: Chapter
}

const ChapterView: Taro.FC<ChapterViewProps> = ({chapterIndex, chapter}) => {

  if (!chapter) {
    return (
      <View />
    )
  }

  return (
    <ScrollView>
      {
        Object.entries(chapter.contents).map((entry, subChapterIndex) => {
          const [subChapterUUID, subChapter] = entry;
          return (
            <SubChapterView
              key={subChapterUUID}
              chapterIndex={chapterIndex}
              subChapterIndex={subChapterIndex}
              subChapter={subChapter}
            />
          )
        })
      }
    </ScrollView>
  )
}

export default ChapterView
