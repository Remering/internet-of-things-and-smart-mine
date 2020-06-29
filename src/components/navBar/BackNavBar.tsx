import Taro from '@tarojs/taro'
import { ClNavBar } from 'mp-colorui';
import { View } from '@tarojs/components';


import './navbar.css'

interface BackNavBarProps {
  title: string
}

const BackNavBar: Taro.FC<BackNavBarProps> = ({title}) => {
  const handleLeftButtonClick = () => Taro.navigateBack();
  return (
    <View className='navbar'>
      <ClNavBar
        leftIcon={[
          {
            icon: 'back',
            color: 'green'
          }
        ]}
        title={title}
        onClickLeftIcon={handleLeftButtonClick}
      />
    </View>
  )
}

export default BackNavBar;
