import React, {Component} from 'react';
import {Image} from 'react-native';
import HomeBar from '../../component/home-bar';
import {
  Container,
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
  Card,
  CardItem,
} from 'native-base';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <HomeBar />
        <Content>
          <Card>
            <CardItem>
              <Left>
                {/* <Thumbnail source={{uri: 'Image URL'}} /> */}
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri:
                    'https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20191202125057.JPG',
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        {/* -------- */}
        <Footer>
          <FooterTab style={{backgroundColor: '#e6494c'}}>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
