import Taro from '@tarojs/taro'
import {ScrollView, View} from '@tarojs/components'


import './book-list.css'
import {Entries} from '../../../types/entries';
import {Book} from '../../../types/book';
import BookListItem from "./BookListItem";

interface BookListProps {
  entries: Entries<Book>
}

const BookList: Taro.FC<BookListProps> = ({entries}) => {

  if (!entries) return (
    <View />
  )

  return (

    <ScrollView className='scroll-view' >
      {
        Object.entries<Book>(entries).map(
          (entry) => {
            const [uuid, book] = entry;
            return (
              <BookListItem book={book} uuid={uuid} key={uuid} />
            )
          })
      }
    </ScrollView>
  )
}

export default BookList
