import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import { styles } from './Style';
import { Header } from '../../components';
import { observer } from 'mobx-react'
import { CommonStyle } from '../../utils';


export const Detail = observer(({ route, globalStore }) => {
    const itemId = route.params.id;
    const detailItem = globalStore.getById(itemId);
    return <View style={styles.container}>
        <Header style={[CommonStyle.headerStyle, { backgroundColor: 'rgba(0,0,0,0.7)' }]} />
        <ImageBackground source={detailItem.bgSizeImage} resizeMode='cover' style={CommonStyle.imageStyle}>
            <View style={styles.contentWrapper}>
                <Text style={styles.titleStyle}>{detailItem.title}</Text>
                <Text style={styles.subTextStyle}>{detailItem.shortDescription}</Text>
            </View>
        </ImageBackground>
    </View>
})