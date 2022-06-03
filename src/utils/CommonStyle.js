import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from './Colors';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const CommonStyle = StyleSheet.create({

  // Button common style

  primaryButton: {
    backgroundColor: Colors.PRIMARY_COLOR,
    padding: wp('1.5%'),
    borderRadius: 10,
    alignItems: 'center',

  },
  buttonTextStyle: {
    fontSize: wp('1.2%'),
    color: Colors.BLACK_COLOR,
    fontWeight: '500',
    backgroundColor: 'transparent',
  },

  // Header Common style
  headerWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: wp('1.5%'),
  },
  headerStyle: {
    top: 0,
    left: 0,
    backgroundColor: 'rgba(50,50,50,0.4)',
    position: 'absolute',
    width: Dimensions.get('window').width, 
    zIndex: 999
  },
  headerimageStyle :{
    width : wp('8%'),
    height : hp('2%')
  },


  // Card common style

  cardContainer: {
    width: hp('30%'),
    height: hp('40%'),
    borderRadius: 6,
    borderWidth: 6,
    marginRight: wp('1.5%'),
    borderColor: 'transparent',
  },
  imageStyle :{
     width :'100%',
     height :'100%',
     flex: 1,
    justifyContent :'flex-end',
  },
  cardTitleStyle: {
    fontSize: wp('1.4%'),
    color: Colors.WHITE_COLOR,
    fontWeight: '500',
    marginBottom: hp('1%')
  },
  subTextStyle: {
    fontSize: wp('0.85%'),
    color: Colors.WHITE_COLOR,
  },
  contentWrapper: {
    backgroundColor: Colors.BALCK_HOVER_COLOR,
    padding: wp('1%'),
    justifyContent: 'flex-end',
  },

})