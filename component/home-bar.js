import React, {Component} from 'react';
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
} from 'native-base';

export default class HomeBar extends Component {
  render() {
    return (
      <Header style={{backgroundColor: '#fff'}}>
        <Body>
          <Title style={{color: '#000'}}>
            <Text>DumbTick App</Text>
          </Title>
        </Body>
        <Right></Right>
      </Header>
    );
  }
}
