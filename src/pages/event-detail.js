import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Image} from 'react-native';
import HomeBar from '../../component/home-bar';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';

export default function EventDetail({route, navigation}) {
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
  //get Param image
  const image = navigation.getParam('image');
  const imageEvent = JSON.stringify(image);
  const imageEventSlice = imageEvent.length - 1;
  const imageEventResult = imageEvent.slice(1, imageEventSlice);

  return (
    <Container>
      <HomeBar />
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
            <Right>
              <Button style={styles.buttonBuy}>
                <Text>Buy</Text>
              </Button>
            </Right>
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
