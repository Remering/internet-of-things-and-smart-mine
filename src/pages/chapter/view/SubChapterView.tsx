import Taro, {DownloadTask} from '@tarojs/taro'
import {View} from '@tarojs/components'
import {connect} from '@tarojs/redux'
import {ClAccordion, ClMenuList} from 'mp-colorui'


import {ActionSheetHandler, ActionSheetOption, contentIcons, MessageType, SubChapter} from '../../../types'
import {showMessage as showMessageAction} from '../../../stores/message'
import {State} from '../../../stores'
import {
  setActionSheetHandler as setActionSheetHandlerAction,
  setActionSheetOptions as setActionSheetOptionsAction,
  showActionSheet as showActionSheetAction
} from '../../../stores/actionSheet/actions'


interface InjectedSubChapterViewProps {
    showMessage(type: MessageType, message: string)
    showActionSheet()
    setActionSheetOptions(options: ActionSheetOption[])
    setActionSheetHandler(handler: ActionSheetHandler)
}

interface SubChapterViewProps {
    chapterIndex: number
    subChapterIndex: number
    subChapter: SubChapter
}


const SubChapterView: Taro.FC<SubChapterViewProps & InjectedSubChapterViewProps> =
  ({
     chapterIndex,
     subChapterIndex,
     subChapter,
     showMessage,
     showActionSheet,
     setActionSheetHandler,
     setActionSheetOptions
   }) => {

  if (!subChapter || !subChapter.contents) {
    return (
      <View />
    )
  }

  const prefix = `${chapterIndex + 1}.${subChapterIndex + 1}`

  const itemList =
    Object.entries(subChapter.contents)
      .map((entry, contentIndex) => {
        const [contentUUID, content] = entry;
        const {url, type} = content;
        return {
          title: `${prefix}.${contentIndex + 1} ${content.name}`,
          uuid: contentUUID,
          icon: {
            iconName: contentIcons[content.type]
          },
          url,
          type,
          downloadTask: null as DownloadTask | null
        }
      })

  const handleClick = (itemIndex: number) => {
    const content = itemList[itemIndex]
    const {url, title, type} = content
    if (type === 'video') {
      return
    }

    const fileName = `${title}.pdf`

    const filePath = `${Taro.env.USER_DATA_PATH}/${fileName}`


    if (content.downloadTask) {
      setActionSheetOptions([
        {
          text: '取消下载',
          bgColor: 'red',
        }
      ])
      setActionSheetHandler(() => {
        if (content.downloadTask) {
          content.downloadTask.abort()
          content.downloadTask = null
        }
      })
      showActionSheet()
      return
    }

    const options = [
      {
        text: '下载',
        bgColor: 'green',
        handler() {
          content.downloadTask = Taro.downloadFile({
            url,
            filePath,
            success() {
              showMessage('success', `${fileName}下载完成`)
              handleClick(itemIndex)
            },
            fail() {
              showMessage('error', `${fileName}下载失败`)
            },
            complete() {
              content.downloadTask = null
            }
          })
        }
      },
      {
        text: '打开',
        bgColor: 'yellow',
        handler: () => Taro.openDocument({
          filePath,
          fail() {
            showMessage('error', `打开${fileName}失败，请尝试重新下载`)
          }
        })

      },
      {
        text: '校验',
        bgColor: 'green',
        handler() {
          console.log('校验')
        }
      }
    ]

    setActionSheetOptions(options)

    setActionSheetHandler((optionIndex) => options[optionIndex].handler())

    showActionSheet()

  };


  return (
    <ClAccordion title={`${prefix} ${subChapter.name}`}>
      <ClMenuList
        shortBorder
        list={itemList}
        onClick={handleClick}
      />
    </ClAccordion>

  )
}

const mapStateToProps = (_state: State, props) => props

const mapDispatchToProps: InjectedSubChapterViewProps = {
    showMessage: showMessageAction,
    showActionSheet: showActionSheetAction,
    setActionSheetHandler: setActionSheetHandlerAction,
    setActionSheetOptions: setActionSheetOptionsAction

}

export default connect(mapStateToProps, mapDispatchToProps)(SubChapterView) as unknown as Taro.ComponentClass<SubChapterViewProps>;
