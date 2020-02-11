import React, {useEffect, useState} from 'react';
import {AsyncStorage, View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import {FlatList, createAppContainer} from 'react-navigation';
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
//import Component and Function
import HomeBar from '../../component/header-page';
import Space from '../styles/space';

export default function Tickets() {
  const [data, setTickets] = useState();

  const retrieveData = async () => {
    // alert('tes');
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        axios
          .get('http://192.168.1.9:5000/api/eo/order?status=confirmed', {
            headers: {
              Authorization: 'Bearer ' + value,
            },
          })
          .then(res => {
            const tickets = res.data;
            setTickets(tickets);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <View>
      <HomeBar title="Your Tickets" />
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
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: Colors.primary,
                        paddingHorizontal: 10,
                        paddingVertical: 3,
                      }}>
                      {item.status == 'confirmed' && (
                        <Icon
                          active
                          name="md-checkmark-circle-outline"
                          style={{color: Colors.white, marginRight: 10}}
                        />
                      )}
                      <Text style={{color: Colors.white}}>{item.status}</Text>
                    </View>
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
