import React, {Component} from 'react';
import {View, Text, TouchableOpacity, AsyncStorage} from 'react-native';

export default class Test extends Component {
  createData() {
    let user = 'Amin Subagiyo';
    // console.log(user);
    AsyncStorage.setItem('user', user);
  }

  displayData = async () => {
    try {
      let user = AsyncStorage.getItem('user').then(data => {
        if (data == null) {
          alert(data);
        } else {
          console.log('failed');
        }
      });
    } catch (error) {
      alert('error');
    }
  };

  render() {
    return (
      <View style={{height: '100%'}}>
        <TouchableOpacity
          style={{
            position: 'relative',
            top: '50%',
            left: '50%',
          }}
          onPress={this.createData}>
          <Text>Create Data</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'relative',
            top: '60%',
            left: '50%',
          }}
          onPress={this.displayData}>
          <Text>Display Data</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
