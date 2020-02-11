import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
// import Icon from 'react-native-vector-icons/Ionicons';
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
  Title,
  Left,
  Icon,
  Body,
  Right,
} from 'native-base';
//import react navigation
import {withNavigation} from 'react-navigation';
// import Component
import CategoryPageBar from '../../component/category-page-bar';
import {categoryPage} from '../config/api';
import {Colors} from '../styles/colors';

class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      name: '',
    };
  }

  componentDidMount() {
    const categoryId = this.props.navigation.getParam('categoryId');
    const categoryName = this.props.navigation.getParam('categoryName');
    this.setState({name: categoryName});

    categoryPage(categoryId).then(response => {
      const events = response;
      this.setState({events});
    });
  }

  render() {
    return (
      <Container style={{backgroundColor: 'fff'}}>
        <Header
          style={{
            backgroundColor: Colors.primary,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}>
            <Icon
              name="md-arrow-back"
              type="Ionicons"
              style={{
                color: '#fff',
                fontSize: 25,
                marginHorizontal: 15,
              }}
              onPress={() => {
                this.props.navigation.goBack();
              }}
            />
          </View>
          <Body>
            <Title style={{color: Colors.white, marginLeft: 10}}>
              Category {this.state.name}
            </Title>
          </Body>
        </Header>
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
                        <Text>Rp. 100.000</Text>
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
