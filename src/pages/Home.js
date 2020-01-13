import React, {Component} from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import HomeBar from '../../component/home-bar';
import Category from './category';
//Import React-Navigation
import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/Ionicons';
import {FlatList} from 'react-navigation';
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
  Icon,
  Text,
  Thumbnail,
  Card,
  CardItem,
  ListItem,
  Switch,
} from 'native-base';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      allevents: [],
    };
  }

  handlePress = data => {
    // console.log(data);
    this.props.navigation.navigate('EventDetail');
  };

  componentDidMount() {
    axios
      .get(`http://192.168.1.32:5000/api/eo/allevents`)
      .then(res => {
        const data = res.data;
        this.setState({allevents: data});
      })
      .catch(error => {
        console.log('Api call error');
        alert(error.message);
      });
  }

  render() {
    return (
      <Container>
        <ScrollView>
          <HomeBar style={{width: '100%'}} />

          <Category />
          <Text style={styles.allevents}>All Events</Text>

          <FlatList
            horizontal
            data={this.state.allevents}
            renderItem={({item}) => (
              <View style={styles.event}>
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
                    <Left>
                      <Button
                        style={styles.buttondetail}
                        onPress={() => {
                          this.props.navigation.navigate('EventDetail', {
                            title: item.title,
                            category: item.category ? item.category.name : '',
                            image: item.image,
                            description: item.description,
                          });
                          // this.props.navigation.navigate('EventDetail');
                        }}>
                        <Text>Get Detail</Text>
                      </Button>
                    </Left>
                  </CardItem>
                </Card>
              </View>
            )}
            contentContainerStyle={{padding: 10}}
          />
        </ScrollView>
      </Container>
    );
  }
}

export class Settings extends Component {
  render() {
    return (
      <Container>
        <HomeBar />
        <Content>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor: '#FF9501'}}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{backgroundColor: '#007AFF'}}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttondetail: {
    backgroundColor: '#e6494c',
  },
  allevents: {
    fontSize: 30,
    marginLeft: 12,
  },
  event: {
    width: 300,
  },
  title: {
    fontSize: 32,
  },
});

export default createBottomTabNavigator(
  {
    Home: Home,
    Settings: Settings,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Settings') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
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
