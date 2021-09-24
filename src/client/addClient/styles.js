import {colors} from '../../utils/colors';
import {moderateScale} from 'react-native-size-matters';

export default {
  container: {
    flex: 1,
  },
  countryPicker: {
    flexDirection: 'row',
    marginTop: moderateScale(10),
    justifyContent: 'space-evenly',
  },
  btnSubmitView: {
    backgroundColor: colors.color_primary,
    marginTop: moderateScale(10),
    borderRadius: moderateScale(10),
    height: moderateScale(40),
    justifyContent: 'center',
  },
  submitTxt: {
    alignSelf: 'center',
    fontSize: moderateScale(16),
    color: colors.white,
  },
  marginTop: {
    marginTop: moderateScale(10),
  },
  margin: {
    margin: moderateScale(10),
  },
};
