import React, {Component} from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Thumbnail,
  Card,
  CardItem,
  ListItem,
  Switch,
  Item,
  Form,
  Input,
} from 'native-base';
//Import Cmponent
import HeaderSearchEvent from '../../component/header-search-event';

export default function EventDetail({route, navigation}) {
  const title = navigation.getParam('title');
  const data = navigation.getParam('data');
  if (title != '') {
    return (
      <View>
        <HeaderSearchEvent title={title} />
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <Content>
                <Card>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>{item.title}</Text>
                        <Text note style={{color: 'grey'}}>
                          {item.category ? item.category.name : ''}
                        </Text>
                      </Body>
                    </Left>
                  </CardItem>
                  <CardItem cardBody>
                    <Image
                      source={{uri: item.image}}
                      style={{height: 200, width: null, flex: 1}}
                    />
                  </CardItem>
                  <CardItem>
                    <Body>
                      <Button transparent>
                        <Icon name="md-heart-empty" size={30} color="#000" />
                        <Text>Rp. {item.price}</Text>
                      </Button>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            );
          }}
          contentContainerStyle={{padding: 10}}
        />
      </View>
    );
  } else {
    return (
      <View>
        <HeaderSearchEvent title={title} />
        <View
          style={{
            width: '100%',
            height: '80%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>No Result</Text>
        </View>
      </View>
    );
  }
}
