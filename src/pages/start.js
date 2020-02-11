import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Container, Header, Content, Button} from 'native-base';
export default class Start extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <ImageBackground
        source={require('../image/event-opening-2.gif')}
        style={styles.view}>
        <View
          style={{
            marginBottom: 250,
            backgroundColor: '#fff',
            paddingHorizontal: 10,
            borderRadius: 20,
            //border top
            borderTopWidth: 4,
            borderTopColor: 'grey',
            //border left
            borderLeftWidth: 4,
            borderLeftColor: 'grey',
            //border Right
            borderRightWidth: 4,
            borderRightColor: 'grey',
            //border bottom
            borderBottomWidth: 4,
            borderBottomColor: 'grey',
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: 50,
              fontFamily: 'comic sans ms',
            }}>
            Dumb-Tick
          </Text>
        </View>
        <Button
          ref={c => (this._button = c)}
          onPress={this.handlePress}
          style={styles.button}>
          <Text style={{color: '#fff', fontSize: 30}}>Start</Text>
        </Button>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: '#e6494c',
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
