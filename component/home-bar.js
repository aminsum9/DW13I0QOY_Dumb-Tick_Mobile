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
      <Header style={{backgroundColor: '#e6494c'}}>
        <Left>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>DUMBTICK</Title>
        </Body>
        <Right>
          <Thumbnail
            source={{
              uri:
                'https://i1.wp.com/metro.co.uk/wp-content/uploads/2020/01/PRI_115666813.jpg?quality=90&strip=all&zoom=1&resize=644%2C454&ssl=1',
            }}
          />
        </Right>
      </Header>
    );
  }
}
