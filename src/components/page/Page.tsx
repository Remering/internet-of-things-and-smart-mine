import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './page.css'

const Page: Taro.FC = ({children}) => {
    return (
        <View className='page'>
            {children}
        </View>
    )
}

export default Page;