import React from 'react';
import { View, Image } from 'react-native';
import { CommonStyle } from '../../utils';
import { logo } from '../../assets';


export const Header = (props) => {
    const { style } = props;
    return <View style={[CommonStyle.headerWrapper,style]}>
        <Image source={logo} style={CommonStyle.headerimageStyle} resizeMode='contain' />
    </View>
}