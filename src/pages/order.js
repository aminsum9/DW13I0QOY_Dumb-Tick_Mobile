import React, {useEffect, useState} from 'react';
import {View, Text, Image, AsyncStorage, ScrollView} from 'react-native';
import axios from 'axios';
import {FlatList, withNavigation} from 'react-navigation';
import Space from '../styles/space';
import {Colors} from '../styles/colors';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
//Import Cmponent
import HomeBar from '../../component/header-page';
import {order} from '../config/api';

function payment() {
  const [data, setOrder] = useState([]);

  useEffect(() => {
    order().then(response => {
      setOrder(response);
    });
  }, []);

  return (
    <View>
      <HomeBar title="Buyer's Orders" />
      <ScrollView>
        <Space size={20} />
        <FlatList
          style={{marginHorizontal: 10}}
          data={data}
          renderItem={({item}) => (
            <Content>
              <Card>
                <CardItem>
                  <Left>
                    <Body>
                      <Text>{item.event.title ? item.event.title : ''}</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button
                      style={{
                        display: 'flex',
                        paddingRight: 16,
                        backgroundColor: Colors.primary,
                      }}>
                      <View style={{backgroundCoor: 'red'}}>
                        {item.status == 'pending' && (
                          <Icon active name="md-refresh" />
                        )}
                      </View>
                      <Text style={{color: Colors.white}}>{item.status}</Text>
                    </Button>
                  </Left>
                </CardItem>
              </Card>
            </Content>
          )}
          keyExtractor={item => item.id}
        />
        <Space size={60} />
      </ScrollView>
    </View>
  );
}

export default withNavigation(payment);
