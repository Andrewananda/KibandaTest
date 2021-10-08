import React, {Component} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Card} from 'react-native-paper';
import Icon from '../utils/Icon';
import {colors} from '../utils/colors';

export default class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: 'Andrew Ananda',
          location: 'Nairobi',
          date: '2021/10/10',
          amount: 'Kes 200.00',
          status: 'pending',
          color: '#de2828',
        },
        {
          name: 'Marvin Keroge',
          location: "Mutang'a",
          date: '2021/10/05',
          amount: 'Kes 400.00',
          status: 'onTransit',
          color: '#e38233',
        },
        {
          name: 'Wanyonyi Muhambe',
          location: 'Kaname',
          date: '2021/10/01',
          amount: 'Kes 1,000.00',
          status: 'pending',
          color: '#de2828',
        },
      ],
    };
  }

  renderItem = ({item}) => {
    return (
      <Card
        style={{
          marginLeft: moderateScale(10),
          marginRight: moderateScale(10),
          marginTop: moderateScale(5),
          backgroundColor: '#fff',
        }}>
        <View style={{borderWidth: 1, borderColor: '#e7e7e7', width: '100%'}} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: moderateScale(10),
          }}>
          <View style={{flexDirection: 'column'}}>
            <View>
              <Text style={{fontSize: moderateScale(18), fontWeight: 'bold'}}>
                {item.name}
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: moderateScale(4)}}>
              <Icon type={'EvilIcons'} name={'location'} size={16} />
              <Text style={{marginLeft: moderateScale(4)}}>
                {item.location}
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: moderateScale(4)}}>
              <Icon type={'EvilIcons'} name={'calendar'} size={16} />
              <Text style={{marginLeft: moderateScale(4)}}>{item.date}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: moderateScale(18), fontWeight: 'bold'}}>
              {item.amount}
            </Text>
            <Text
              style={[
                {
                  fontSize: moderateScale(12),
                  alignSelf: 'flex-end',
                  fontWeight: 'normal',
                  color: item.color,
                },
              ]}>
              {item.status}
            </Text>
          </View>
        </View>
      </Card>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1}}>
          <FlatList data={this.state.data} renderItem={this.renderItem} />
        </View>
      </SafeAreaView>
    );
  }
}
