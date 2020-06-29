import Taro from '@tarojs/taro'
import { ScrollView } from '@tarojs/components'
import { ClMenuList } from 'mp-colorui';

import './book-list.css'
import {Entries} from '../../../types/entries';
import {BookType} from '../../../types/book';

interface BookListProps {
  entry: Entries<BookType>
}

const BookList: Taro.FC<BookListProps> = ({entry}) => {

  const itemLists = Object.entries<BookType>(entry)
    .map(
      ([uuid, book] ) => ({
        title: book.name,
        async onClick() {
          await Taro.navigateTo({
            url: `pages/chapter/index?uuid=${uuid}`

          })
        }
      })
    )


  return (

    <ScrollView className='bookList'>
      <ClMenuList list={itemLists} />
    </ScrollView>
  )
}

export default BookList
