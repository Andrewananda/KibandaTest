import React, {Component} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {Card, FAB} from 'react-native-paper';
import styles from './style';

export default class Home extends Component {
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
                <Text style={styles.totalOrderTxt}>Total Orders</Text>
                <Text style={styles.countTxt}>0</Text>
              </View>
            </Card>
            <Card style={styles.cardView}>
              <View style={styles.dashboardCard}>
                <Text style={styles.latestClientTxt}>Total Clients</Text>
                <Text style={styles.countTxt}>0</Text>
              </View>
            </Card>
          </View>

          <View style={styles.latestOrderView}>
            <View>
              <Text style={styles.latestOrderText}>Latest Order</Text>
            </View>
            <View>
              <Text style={styles.viewAll}>View all</Text>
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
