import Taro, {Component} from '@tarojs/taro'
import { connect } from '@tarojs/redux';
import {ClLoading} from 'mp-colorui';

import './index.css'
import { Book } from '../../types/book';
import { getBooks } from '../../selecters';
import { State } from '../../stores';
import BookList from './bookList/BookList';
import { Entries } from '../../types/entries';
import IndexNavBar from "../../components/navBar/IndexNavBar";
import { isNavigating as isNavigatingSelector } from "../../selecters/book";
import {Page, SearchBar} from "../../components";
import {View} from "@tarojs/components";

interface IndexProps {
  books: Entries<Book>
  isNavigating: boolean
}

const mapStateToProps = (state: State) => ({
  books: getBooks(state),
  isNavigating: isNavigatingSelector(state)
})


@connect(mapStateToProps)
class Index extends Component<IndexProps> {
  render() {
    const {books, isNavigating} = this.props;
    return (
      <View>
        <IndexNavBar />
        <SearchBar />
        <Page>
          <BookList entries={books} />
        </Page>
        <ClLoading
          type='common'
          commonText='正在跳转至章节'
          show={isNavigating}
        />
      </View>
    )
  }
}


// @ts-ignore
export default connect(mapStateToProps)(Index)
