import React from 'react';
import { View, Text, Image } from 'react-native';
import { PrimaryButton } from '../../components';
import { styles } from './Style';
import {logo} from '../../assets';
import { useNavigation } from '@react-navigation/native';
import RouterConst from '../../navigation/RouterConst';


export const Welcome = () => {
    const navigation = useNavigation();
    return <View style={styles.container}>
        <View style={styles.logoWrapper}>
            <Image source={logo}
                resizeMode='contain'
                style={styles.logoStyle}
            />
        </View>
        <Text style={styles.heading}>All your streaming services in one app.</Text>
        <Text style={styles.subHeadingStyle}>Get personal recommendations for movies and TV shows available on Netflix, Amazon Prime Video, Hotstar and many more.</Text>
        <PrimaryButton
            style={styles.buttonWrapper}
            title={'Discovers movies & TV shows'}   
            onPress={() => {
                navigation.navigate(RouterConst.HOMESCREEN)
            }}
        />
    </View>
}