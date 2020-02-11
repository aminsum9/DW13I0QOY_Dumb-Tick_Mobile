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

function payment() {
  const [data, setOrder] = useState([]);

  const changeStatus = async id => {
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        const body = {
          status: 'pending',
        };
        axios
          .put(`http://192.168.1.28:5001/api/eo/order/${id}`, body, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(response => {
            const res = response.data.message;
            alert('permintaan pembayaran anda telah terkirim');
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const retrieveData = async () => {
    // alert('tes');
    try {
      const token = await AsyncStorage.getItem('token');
      if (token !== null) {
        const req = 'check out';
        axios
          .get(`http://192.168.1.9:5000/api/eo/order?status=${req}`, {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          })
          .then(response => {
            const data = response.data;
            setOrder(data);
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
      <HomeBar title="Payment" />
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
                      onPress={() => changeStatus(item.id)}
                      style={{
                        display: 'flex',
                        paddingRight: 16,
                        backgroundColor: Colors.primary,
                      }}>
                      <View style={{backgroundCoor: 'red'}}>
                        {item.status == 'check out' && (
                          <Icon active name="md-arrow-dropdown-circle" />
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
