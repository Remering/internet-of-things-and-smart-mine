import Taro from '@tarojs/taro'
import {ClLoading, ClNavBar} from 'mp-colorui';
import {View} from "@tarojs/components";
import {connect} from "@tarojs/redux";


import './navbar.css'
import {State} from "../../stores";
import {isNavigating as isNavigatingSelector} from "../../selecters/book";

interface IndexNavBarProps {
  isNavigating: boolean
}

class IndexNavBar extends Taro.Component<IndexNavBarProps> {
  render() {
    const {isNavigating} = this.props;

    return (
      <ClLoading
        content
        type='bar'
        show={isNavigating}
      >
        <View className='navbar'>
          <ClNavBar
            leftIcon={[]}
            title='物联网与智能矿山手册查询'
          >

          </ClNavBar>
        </View>
      </ClLoading>
    )
  }
}

const mapStateToProps = (state: State) => ({
  isNavigating: isNavigatingSelector(state)
})

export default connect(mapStateToProps)(IndexNavBar) as Taro.ComponentClass;
