import Taro, { useRouter } from '@tarojs/taro'
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';


import { Book } from '../../types/book';
import { State } from '../../stores';
import { getBook as getBookSelector } from '../../selecters/book'
import BackNavBar from '../../components/navBar/BackNavBar'
import ChapterView from './view/ChapterView'
import { Message, ActionSheet } from '../../components';


interface IndexProps {
  getBook(uuid: string): Book
}

const Index: Taro.FC<IndexProps> = ({getBook}) => {

  const router = useRouter()

  const {book, chapter, chapterIndex} = router.params

  if (!(book && chapter)) return (
    <View />
  )

  const bookInstance = getBook(book);

  const chapterInstance = bookInstance.contents[chapter];

  return (
    <View>
      <BackNavBar title={`${bookInstance.name} ${chapterInstance.name}`} />
      <ChapterView chapter={chapterInstance} chapterIndex={parseInt(chapterIndex)} />
      <Message />
      <ActionSheet />
    </View>
  )
}

const mapStateToProps = (state: State) => ({
  getBook: getBookSelector(state)
});


// @ts-ignore
export default connect(mapStateToProps)(Index);
