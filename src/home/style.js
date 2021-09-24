import {colors} from '../utils/colors';

export default {
  container: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    height: 160,
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
  cardView: {
    width: 160,
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 4,
  },
  dashboardCard: {
    justifyContent: 'center',
    marginTop: 60,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: colors.color_primary,
  },
  viewAll: {
    textDecorationLine: 'underline',
    color: colors.blue,
    marginRight: 10,
  },
  latestOrderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  latestOrderText: {
    fontSize: 18,
    marginLeft: 10,
  },
  latestClientTxt: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  countTxt: {
    alignSelf: 'center',
    fontSize: 24,
  },
  totalOrderTxt: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  noOrdersTxt: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  noOrdersView: {
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: '30%',
  },
};
