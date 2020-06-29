import Taro from '@tarojs/taro'
import {ClAccordion, ClMenuList, ClText} from 'mp-colorui'
import {View} from "@tarojs/components";

import {ChapterType} from "../../store/chapter";


interface ChapterListItemProps {
  chapter: ChapterType
  index: number
}

const ChapterListItem: Taro.FC<ChapterListItemProps> = ({chapter, index}) => {
  if (chapter == undefined) return (
    <View />
  )
  const {name} = chapter;
  const [open, setOpen] = Taro.useState(false);
  if (!chapter.children) return (
    <ClText text={chapter.name} />
  )

  const menuList = chapter.children.map((child, subIndex) => ({
    title: `${index + 1}.${subIndex + 1} ${typeof child === 'string' ? child : child.name}`
  }))

  return (
    <ClAccordion title={`${index + 1} ${name}`} open={open} onClick={setOpen}>
      <ClMenuList list={menuList} card />
    </ClAccordion>
  )
}

export default ChapterListItem;
