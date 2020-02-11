import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
import {Icon} from 'react-native-elements';
import {withNavigation, navigation} from 'react-navigation';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  Title,
  // Icon,
} from 'native-base';
import {Colors} from '../styles/colors';
import Tickets from './tickets';

function EventDetail({route, navigation}) {
  const [tickets, setTickets] = useState({count: 0});
  const [totalPrice, setPrices] = useState(0);

  //get Param title
  const title = navigation.getParam('title');
  const titleEvent = JSON.stringify(title);
  const titleEventSlice = titleEvent.length - 1;
  const titleEventResult = titleEvent.slice(1, titleEventSlice);
  //get Param category
  const category = navigation.getParam('category');
  const categoryEvent = JSON.stringify(category);
  const categoryEventSlice = categoryEvent.length - 1;
  const categoryEventResult = categoryEvent.slice(1, categoryEventSlice);
  //get Param description
  const description = navigation.getParam('description');
  const descriptionEvent = JSON.stringify(description);
  const descriptionEventSlice = descriptionEvent.length - 1;
  const descriptionEventResult = descriptionEvent.slice(
    1,
    descriptionEventSlice,
  );
  //get Param Price
  const price = navigation.getParam('price');
  //get Param Address
  const address = navigation.getParam('address');
  //get Param startTime and endTime
  const startTime = navigation.getParam('startTime');
  const endTime = navigation.getParam('endTime');
  //get Param image
  const image = navigation.getParam('image');
  const imageEvent = JSON.stringify(image);
  const imageEventSlice = imageEvent.length - 1;
  const imageEventResult = imageEvent.slice(1, imageEventSlice);

  function reduceTickets() {
    if (tickets.count >= 1) {
      setTickets({count: tickets.count - 1});
      setPrices(totalPrice - price);
    }
  }
  function addTickets() {
    setTickets({count: tickets.count + 1});
    setPrices(totalPrice + price);
  }

  return (
    <Container>
      <Header style={{backgroundColor: Colors.primary}}>
        <View
          style={{
            height: '100%',
            width: 50,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 20,
          }}>
          <Icon
            name="arrow-back"
            type="MaterialIcons"
            color="white"
            onPress={() => navigation.goBack()}
          />
        </View>
        <Body>
          <Title style={{color: '#000'}}>
            <Text
              style={{
                fontSize: 20,
                color: '#fff',
              }}>
              Event Detail
            </Text>
          </Title>
        </Body>
      </Header>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>{titleEventResult}</Text>
                <Text note>{categoryEventResult}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            {/* <Text></Text> */}
            <Image
              source={{
                uri: imageEventResult,
              }}
              style={{height: 200, width: null, flex: 1}}
            />
          </CardItem>
          <CardItem>
            <Left
              style={{display: 'flex', flexDirection: 'row', margin: 'auto'}}>
              <Button
                style={{backgroundColor: Colors.primary}}
                onPress={() => reduceTickets()}>
                <Text>-</Text>
              </Button>
              <View
                style={{
                  height: 45,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingRight: 10,
                }}>
                <Text>{tickets.count}</Text>
              </View>
              <Button
                style={{marginRight: 10, backgroundColor: Colors.primary}}
                onPress={() => addTickets()}>
                <Text>+</Text>
              </Button>
              <Button style={styles.buttonBuy}>
                <Text>Buy</Text>
              </Button>
            </Left>
            <Right>
              <Text style={{marginRight: 10, fontSize: 17}}>
                Rp. {totalPrice}
              </Text>
            </Right>
          </CardItem>
          <CardItem style={{height: 30}}>
            <Icon name="price-tag" type="entypo" color="#517fa4" />
            <Text> Rp 200.000,00</Text>
          </CardItem>
          <CardItem style={{height: 30}}>
            <Icon name="location-pin" type="entypo" color="#517fa4" />
            <Text>{address}</Text>
          </CardItem>
          <CardItem style={{height: 30}}>
            <Icon name="date-range" type="MaterialIcons" color="#517fa4" />
            <Text>
              {' '}
              {startTime.slice(0, 10)} - {endTime.slice(0, 10)}
            </Text>
          </CardItem>
          <CardItem style={{height: 30}}>
            <Icon name="clock" type="entypo" color="#517fa4" />
            <Text>
              {' '}
              {startTime.slice(11, 19)} - {endTime.slice(11, 19)}
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>{descriptionEventResult}</Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  buttonBuy: {
    backgroundColor: '#e6494c',
  },
});

export default withNavigation(EventDetail);
