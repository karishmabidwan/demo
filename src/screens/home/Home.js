import React from 'react';
import { FlatList, View, Dimensions } from 'react-native';
import { Card } from '../../components';
import RouterConst from '../../navigation/RouterConst';
import { styles } from './Style';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components';
import { observer } from 'mobx-react'
import { CommonStyle } from '../../utils';


export const Home = observer(({ globalStore }) => {
    const navigation = useNavigation();
    return <View style={styles.container}>
        <Header style={CommonStyle.headerStyle} />
        <View style={styles.cardListWrapper}>
            <FlatList
                data={globalStore.data}
                contentContainerStyle={styles.cardWrapper}
                renderItem={({ item }) => {
                    return <Card
                        title={item.title}
                        image={item.image}
                        subText={item.subText}
                        onPress={() => {
                            navigation.navigate(RouterConst.DETAIALSCREEN, { id: item.id })
                        }}
                    />
                }}
                horizontal
                keyExtractor={(item) => item.id}
            />
        </View>
    </View>
})