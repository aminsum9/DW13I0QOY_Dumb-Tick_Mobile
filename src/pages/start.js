import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Container, Header, Content, Button} from 'native-base';
export default class Start extends Component {
  handlePress = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <ImageBackground
        source={require('../../image/officer.jpg')}
        style={styles.view}>
        <Button
          ref={c => (this._button = c)}
          onPress={this.handlePress}
          style={styles.button}>
          <Text>Start</Text>
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
