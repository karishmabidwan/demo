import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: wp('1%'),
        backgroundColor: Colors.BLACK_COLOR,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoWrapper: {
        marginBottom: hp('2%'),
    },
    logoStyle: {
        width: wp('20%'),
        height : hp('10%')
   },
    heading: {
        color: Colors.WHITE_COLOR,
        fontSize:  wp('3%'),
        fontWeight: '500',
        marginBottom: hp('2%'),

    },
    subHeadingStyle: {
        color: Colors.WHITE_COLOR,
        fontSize:  wp('1.5%'),
    },
    buttonWrapper: {
        marginTop: hp('4%')
    }


})