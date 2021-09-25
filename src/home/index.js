import React, {Component} from 'react';
import {FlatList, Pressable, SafeAreaView, Text, View} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import styles from './style';
import Icon from '../utils/Icon';
import {moderateScale} from 'react-native-size-matters';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <View style={styles.content}>
            <Card style={styles.cardView}>
              <View style={styles.dashboardCard}>
                <Icon
                  type={'FontAwesome'}
                  name={'list'}
                  size={24}
                  style={{alignSelf: 'center'}}
                />
                <Text style={styles.totalOrderTxt}>Total Orders</Text>
                <Text style={styles.countTxt}>0</Text>
              </View>
            </Card>
            <Card style={styles.cardView}>
              <View style={styles.dashboardCard}>
                <Icon
                  type={'FontAwesome'}
                  name={'users'}
                  size={24}
                  style={{alignSelf: 'center'}}
                />
                <Text style={styles.latestClientTxt}>Total Clients</Text>
                <Text style={styles.countTxt}>{this.props.clients.length}</Text>
              </View>
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
          <FlatList
            data={this.state.data}
            renderItem={item => <View />}
            ListEmptyComponent={() => (
              <View style={styles.noOrdersView}>
                <Text style={styles.noOrdersTxt}>No Orders Available</Text>
              </View>
            )}
          />
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
