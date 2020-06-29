import Taro, { ComponentClass } from '@tarojs/taro'
import { ClActionSheet } from 'mp-colorui'
import { connect } from '@tarojs/redux'

import { ActionSheetOption, ActionSheetHandler } from '../../types'
import { State } from '../../stores'
import { getActionSheetOptions, getActionSheetHandler, getActionSheetShow } from '../../selecters'

interface ActionSheetProps {
    options: ActionSheetOption[]
    handler?: ActionSheetHandler
    show: boolean
}

class ActionSheet extends Taro.Component<ActionSheetProps> {
    render() {
        const props = this.props
        return (
            <ClActionSheet {...props}></ClActionSheet>
        )
    }
}

const mapStateToProps = (state: State): ActionSheetProps => ({
    options: getActionSheetOptions(state),
    handler: getActionSheetHandler(state),
    show: getActionSheetShow(state),
})

export default connect(mapStateToProps)(ActionSheet) as ComponentClass