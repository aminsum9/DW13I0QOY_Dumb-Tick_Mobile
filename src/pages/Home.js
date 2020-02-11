import React, {Component} from 'react';
import {
  TextField,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import Category from './category';
//Import React-Navigation
import Ionicons from 'react-native-vector-icons/Ionicons';
//Import Page
import Profile from './profile';
import Payment from './Payment';
import Tickets from './tickets';
import Order from './order';
// import Tickets from './tickets';
import {FlatList, createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import axios from 'axios';
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
  Text,
  Thumbnail,
  Card,
  CardItem,
  ListItem,
  Switch,
  Item,
  Form,
  Input,
  Icon,
} from 'native-base';
//import function
import {allevent, eventByTitle} from '../config/api';

// const Drawer = createDrawerNavigator();

class Home extends Component {
  constructor() {
    super();
    this.state = {
      allevents: [],
      title: '',
      result: [],
    };
  }

  handlePress = data => {
    this.props.navigation.navigate('EventDetail');
  };

  componentDidMount() {
    allevent().then(response => this.setState({allevents: response}));
  }

  onChange = text => {
    this.setState({title: text});
  };

  onClick = () => {
    const title = this.state.title;
    eventByTitle(title).then(response => {
      this.setState({result: response});
      window.setTimeout(this.movingPage, 100);
    });
  };

  movingPage = () => {
    return this.props.navigation.navigate('SearchEvent', {
      data: this.state.result,
      title: this.state.title,
    });
    // alert('tes');
  };

  render() {
    // if (this.state.result.length == 0) {
    return (
      <Container style={styles.home}>
        <Header style={{backgroundColor: '#e6494c'}}>
          <View style={{display: 'flex', width: '80%'}}>
            <Form style={{marginTop: 5}}>
              <Item rounded>
                <TextInput
                  style={{
                    height: 40,
                    width: '80%',
                    borderColor: 'transparent',
                    borderWidth: 1,
                    color: '#fff',
                    marginLeft: 10,
                    fontSize: 15,
                  }}
                  placeholder="search event"
                  onChangeText={this.onChange}
                />
                <Icon
                  name="search"
                  type="FontAwesome"
                  color="white"
                  style={{color: '#fff', width: 50}}
                  onPress={this.onClick}
                />
              </Item>
            </Form>
          </View>
          <View
            style={{
              marginLeft: 10,
              width: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon name="md-paper" style={{color: 'white', fontSize: 40}} />
          </View>
        </Header>
        <Content>
          <ScrollView>
            <Text style={styles.category}>Category</Text>
            <Category />
            <Text style={styles.allevents}>Today</Text>

            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={this.state.allevents}
              renderItem={({item}) => (
                <TouchableWithoutFeedback
                  onPress={() => {
                    // console.log(item.address);
                    this.props.navigation.navigate('EventDetail', {
                      title: item.title,
                      category: item.category ? item.category.name : '',
                      image: item.image,
                      price: item.price,
                      address: item.address,
                      startTime: item.startTime,
                      endTime: item.endTime,
                      description: item.description,
                    });
                    // this.props.navigation.navigate('EventDetail');
                  }}>
                  <View style={styles.event}>
                    <Card style={styles.eventCard}>
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
                        <Left>
                          <Icon
                            name="md-heart-empty"
                            size={30}
                            color="#4F8EF7"
                          />
                        </Left>
                      </CardItem>
                    </Card>
                  </View>
                </TouchableWithoutFeedback>
              )}
              contentContainerStyle={{padding: 10}}
            />
            <Text style={styles.allevents}>Upcomming</Text>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#fff',
  },
  buttondetail: {
    backgroundColor: '#e6494c',
  },
  category: {
    fontSize: 20,
    marginLeft: 12,
  },
  allevents: {
    fontSize: 20,
    marginLeft: 12,
  },
  event: {
    width: 300,
  },
  eventCard: {
    marginLeft: 10,
  },
  title: {
    fontSize: 32,
  },
});

export default createBottomTabNavigator(
  {
    Home: Home,
    Tickets: Tickets,
    Payment: Payment,
    Order: Order,
    Profile: Profile,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused ? 'md-home' : 'md-home';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Profile') {
          iconName = focused ? 'md-person' : 'md-person';
        } else if (routeName === 'Payment') {
          iconName = focused ? 'md-wallet' : 'md-wallet';
        } else if (routeName === 'Order') {
          iconName = focused ? 'md-paper-plane' : 'md-paper-plane';
        } else if (routeName == 'Tickets') {
          iconName = focused ? 'md-albums' : 'md-albums';
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      backgroundColor: 'red',
    },
  },
);
