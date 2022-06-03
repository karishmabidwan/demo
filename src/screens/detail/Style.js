import {StyleSheet} from 'react-native';
import {Colors} from '../../utils/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container:{
        flex : 1,
    },
    contentWrapper :{
        padding : wp('2%'),
        backgroundColor : Colors.BALCK_LIGHT_HOVER_COLOR
    },
    titleStyle :{
        fontSize : wp('2%'),
        fontWeight : '500',
        marginBottom : hp('1.5%'),
        color : Colors.WHITE_COLOR
    },
    subTextStyle :{
        fontSize : wp('1.2%'),
        lineHeight : wp('1.8%'),
        color : Colors.WHITE_COLOR

    }
})