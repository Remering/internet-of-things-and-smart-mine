import Taro from "@tarojs/taro";
import {ScrollView} from "@tarojs/components";
import ChapterListItem from "./ChapterListItem";
import chapterStore from "../../store/chapter";

import './chaper-list.css'

const ChapterList: Taro.FC = () => {
  return (
    <ScrollView
      className='chapter-list'
      scrollTop={360}
    >
      {
        chapterStore.chapters
          .map((chapter, index) => {
            return <ChapterListItem {...{chapter, index}} key={index} />
          })
      }
    </ScrollView>
  )
}



export default ChapterList;
