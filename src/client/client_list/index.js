import React, {Component} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {Card} from 'react-native-paper';
import {connect} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import Icon from '../../utils/Icon';

class Client_list extends Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({item}) => {
    return (
      <Card style={{backgroundColor: '#fff'}}>
        <View style={{borderWidth: 1, borderColor: '#e7e7e7', width: '100%'}} />
        <View style={{flexDirection: 'row', margin: moderateScale(10)}}>
          <View>
            <Icon type={'EvilIcons'} name={'user'} size={60} />
          </View>
          <View
            style={{flexDirection: 'column', marginLeft: moderateScale(20)}}>
            <View>
              <Text style={{fontSize: moderateScale(20)}}>{item.name}</Text>
            </View>
            <View style={{flexDirection: 'row', margin: moderateScale(4)}}>
              <Icon type={'FontAwesome'} name={'phone'} size={16} />
              <Text
                style={{
                  fontSize: moderateScale(12),
                  marginLeft: moderateScale(6),
                }}>
                {item.phone}
              </Text>
            </View>
            <View style={{flexDirection: 'row', margin: moderateScale(4)}}>
              <Icon type={'EvilIcons'} name={'location'} size={16} />
              <Text
                style={{
                  fontSize: moderateScale(12),
                  marginLeft: moderateScale(4),
                }}>
                {item.location}
              </Text>
            </View>
          </View>
        </View>
      </Card>
    );
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <FlatList data={this.props.clients} renderItem={this.renderItem} />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    clients: state.appState.clients,
  };
}

export default connect(mapStateToProps, null)(Client_list);
