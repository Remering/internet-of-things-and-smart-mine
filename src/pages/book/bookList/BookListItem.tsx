import Taro from '@tarojs/taro'
import { ClAccordion, ClMenuList } from 'mp-colorui';
import { View } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import { Book, Chapter } from '../../../types/book';
import { makeNavigated, makeNavigating, navigateToSubChapter } from '../../../stores/book';

interface BookListItemProps {
  book: Book
  uuid: string

}

interface BookListItemInjectedProps {
  generateNavigateToSubChapter(uuid: string): ((chapter: string, chapterIndex: number) => Promise<void>)
  dispatchNavigating(): void
  dispatchNavigated(): void
}


interface BookListItemState {
  open: boolean
}


class BookListItem extends Taro.Component<BookListItemProps & BookListItemInjectedProps, BookListItemState> {

  state = {
    open: false
  }

  private setOpen(open: boolean) {
    this.setState({
      open: open
    })
  }

  render() {
    const {book, uuid, dispatchNavigating, dispatchNavigated, generateNavigateToSubChapter} = this.props;
    const {open} = this.state;
    if (!book) {
      return (
        <View />
      )
    }
    const itemLists = Object.entries<Chapter>(book.contents)
      .map(
        ([chapterUUID, chapter], index) => ({
          chapterUUID,
          title: `${index + 1} ${chapter.name}`,
          arrow: true,
        })
      )

    const handleNavigateToSubChapter = generateNavigateToSubChapter(uuid)

    const handleClick = async (i: number) => {
      const {chapterUUID} = itemLists[i];
      dispatchNavigating()
      await handleNavigateToSubChapter(chapterUUID, i)
      dispatchNavigated()
    }


    return (
      <ClAccordion
        title={`${book.name}`}
        open={open}
        onClick={this.setOpen.bind(this)}
      >
        <ClMenuList list={itemLists} onClick={handleClick} />
      </ClAccordion>
    )
  }
}


const mapStateToProps = (_state, props) => ({
  ...props,
  generateNavigateToSubChapter: navigateToSubChapter,
});

const mapDispatchToProps = {
  dispatchNavigating: makeNavigating,
  dispatchNavigated: makeNavigated,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookListItem) as Taro.ComponentClass<BookListItemProps>;
