import React, {Component} from 'react';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import styles from './style';
import Icon from '../utils/Icon';
import {moderateScale} from 'react-native-size-matters';
import {connect} from 'react-redux';
import Orders from '../orders';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Card style={styles.cardView}>
              <Pressable
                onPress={() => this.props.navigation.navigate('Orders')}>
                <View style={styles.dashboardCard}>
                  <Icon
                    type={'FontAwesome'}
                    name={'list'}
                    size={24}
                    style={{alignSelf: 'center'}}
                  />
                  <Text style={styles.totalOrderTxt}>Orders</Text>
                  <Text style={styles.countTxt}>3</Text>
                </View>
              </Pressable>
            </Card>
            <Card style={styles.cardView}>
              <Pressable
                onPress={() => this.props.navigation.navigate('Clients')}>
                <View style={styles.dashboardCard}>
                  <Icon
                    type={'FontAwesome'}
                    name={'users'}
                    size={24}
                    style={{alignSelf: 'center'}}
                  />
                  <Text style={styles.latestClientTxt}>Clients</Text>
                  <Text style={styles.countTxt}>
                    {this.props.clients.length}
                  </Text>
                </View>
              </Pressable>
            </Card>
          </View>

          <View style={styles.latestOrderView}>
            <View>
              <Text style={styles.latestOrderText}>Latest Order</Text>
            </View>
            <View>
              <Pressable
                onPress={() => this.props.navigation.navigate('Orders')}>
                <Text style={styles.viewAll}>View all</Text>
              </Pressable>
            </View>
          </View>
          <Orders />
          <FAB
            icon="account-plus"
            label={'Add Client'}
            onPress={() => this.props.navigation.navigate('Client')}
            style={styles.fab}
          />
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    clients: state.appState.clients,
  };
}

export default connect(mapStateToProps, null)(Home);
