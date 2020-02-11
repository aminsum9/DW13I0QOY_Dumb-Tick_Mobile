import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Thumbnail,
  Form,
  Input,
  Item,
} from 'native-base';

export default class HomeBar extends Component {
  render() {
    return (
      <Header style={{backgroundColor: '#e6494c'}}>
        <Body style={styles.headerBody}>
          <Text style={styles.headerTitle}>{this.props.title}</Text>
        </Body>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  headerBody: {
    display: 'flex',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 25,
    color: '#fff',
  },
});
