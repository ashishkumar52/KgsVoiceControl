import React from 'react'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'

const CustomHeaderButton = props => {
     return <HeaderButton {...props} IconComponent={Ionicons} 
            iconSize={30} color={'#69bfce'} />
}
export default CustomHeaderButton