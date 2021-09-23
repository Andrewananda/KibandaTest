import {colors} from '../utils/colors';

export default {
  container: {
    flex: 1,
  },
  mainView: {
    flex: 1,
    marginTop: '55%',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: '10%',
    marginRight: '10%',
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  margin: {
    marginTop: 10,
  },
  btnView: {
    backgroundColor: colors.color_primary,
    elevation: 4,
    borderRadius: 10,
    height: 40,
    width: 150,
    justifyContent: 'center',
  },
  btnText: {
    alignSelf: 'center',
    color: colors.white,
  },
  btnContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
};
