import React from 'react';
import { Text, TouchableOpacity } from 'react-native'
import { CommonStyle } from '../../utils';

export const PrimaryButton = (props) => {
    const { title, onPress, style} = props;
    return <TouchableOpacity
        onPress={onPress}
        hasTVPreferredFocus={true}
        style={[CommonStyle.primaryButton,style]}
        activeOpacity={1}
    >
        <Text style={CommonStyle.buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
}