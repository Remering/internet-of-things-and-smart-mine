import Taro from '@tarojs/taro'
import {ClSearchBar} from 'mp-colorui';
import {View} from "@tarojs/components";

import './search-bar.css'

const SearchBar: Taro.FC = () => {
  return (
      <View className='search-bar'>
        <ClSearchBar
          className='search-bar'
          shape='round'
          bgColor='white'
          rightButtonColor='green'
        />
      </View>
  )
}

export default SearchBar;
