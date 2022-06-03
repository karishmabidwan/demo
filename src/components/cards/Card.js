import React, { useState, useRef } from 'react';
import { TouchableOpacity, ImageBackground, Text, View, Animated } from 'react-native';
import { Colors } from '../../utils';
import { CommonStyle } from '../../utils';


export const Card = (props) => {
    const { title, subText, onPress, image, style } = props;
    const [isfocus, setFocus] = useState(false);
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const ANIM_DURATION = 200

    return <Animated.View style={{ transform: [{ scale: scaleAnim }] }} >
        <TouchableOpacity
            onPress={onPress}
            hasTVPreferredFocus={true}
            style={[style, CommonStyle.cardContainer, {
                borderColor: isfocus ? Colors.WHITE_HOVER_COLOR : CommonStyle.cardContainer.borderColor,
                opacity: 0.7
            }
            ]}
            activeOpacity={1}
            onFocus={() => {
                Animated.timing(scaleAnim, {
                    toValue: 1.15,
                    duration: ANIM_DURATION,
                    useNativeDriver: true
                }).start();
                setFocus(true);
            }}
            onBlur={() => {
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: ANIM_DURATION,
                    useNativeDriver: true
                }).start();
                setFocus(false);
            }}
        >
            <ImageBackground source={image} resizeMode='cover' style={CommonStyle.imageStyle} >
                {isfocus ?
                    <View style={CommonStyle.contentWrapper}>
                        <Text style={CommonStyle.cardTitleStyle}>{title}</Text>
                        <Text style={CommonStyle.subTextStyle}>{subText}</Text>
                    </View>
                    : null}
            </ImageBackground>

        </TouchableOpacity>
    </Animated.View>

}