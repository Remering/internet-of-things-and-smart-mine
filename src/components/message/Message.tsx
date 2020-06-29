import Taro, { ComponentClass } from '@tarojs/taro'
import { ClMessage } from 'mp-colorui'
import { connect } from '@tarojs/redux';
import { View } from '@tarojs/components';


import { MessageType } from '../../types';
import { State } from '../../stores';
import { getMessageType, getMessage, getMessageShow } from '../../selecters';
import { closeMessage } from '../../stores/message';

import './message.css'

interface MessageProps {
    type: MessageType
    message: string
    show: boolean
    handleClose()
}

const mapStateToProps = (state: State) => ({
    type: getMessageType(state),
    message: getMessage(state),
    show: getMessageShow(state),
})

const mapDispatchToProps = {
    handleClose: closeMessage
}

class Message extends Taro.Component<MessageProps> {
    
    render() {
        const {type, message, show, handleClose} = this.props;
        console.log('refesh message')
        return (
            <View className='message'>
                <ClMessage   
                  type={type} 
                  message={message} 
                  show={show}
                  onClose={handleClose}
                  duration={3}
                />
            </View>
            
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Message) as ComponentClass;

