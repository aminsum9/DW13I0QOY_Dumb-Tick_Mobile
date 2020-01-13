import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
//import native base
import {Image, FlatList} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  // Icon,
  Left,
  Body,
  Right,
} from 'native-base';
//import react navigation
import {withNavigation} from 'react-navigation';

class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    const categoryId = this.props.navigation.getParam('categoryId');
    axios
      .get(`http://192.168.1.32:5000/api/eo/category/${categoryId}/events`)
      .then(res => {
        const events = res.data;
        this.setState({events});
      });
  }

  render() {
    return (
      <Container>
        <FlatList
          data={this.state.events}
          renderItem={({item}) => {
            return (
              <Content>
                <Card>
                  <CardItem>
                    <Left>
                      <Body>
                        <Text>{item.title}</Text>
                        <Text note>
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
                        <Icon name="md-heart-empty" size={30} color="#4F8EF7" />
                        <Text>4 Comments</Text>
                      </Button>
                    </Body>
                  </CardItem>
                </Card>
              </Content>
            );
          }}
          contentContainerStyle={{padding: 10}}
        />
      </Container>
    );
  }
}

export default withNavigation(CategoryPage);
