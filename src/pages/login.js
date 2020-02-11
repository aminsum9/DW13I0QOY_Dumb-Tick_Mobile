import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Button,
} from 'native-base';
import {
  Text,
  AsyncStorage,
  ImageBackground,
  View,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
//Import Component & Function
import {Colors} from '../styles/colors';
import {login} from '../config/api';
import Space from '../styles/space';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail = text => {
    this.setState({email: text});
  };

  onChangePassword = text => {
    this.setState({password: text});
  };

  onPressLogIn = e => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    login(user).then(response => {
      if (response.message == 'success') {
        this.props.navigation.navigate('Home');
      } else {
        alert(response.message);
      }
    });
  };

  render() {
    return (
      <Container>
        <Content style={styles.content}>
          <View>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingTop: 100,
                paddingBottom: 60,
              }}>
              <Image
                source={require(`../image/logo.png`)}
                style={styles.logo}
              />
              <Space size={20} />
              <Text>DumbTick App</Text>
            </View>
            <Form style={styles.form}>
              <Item
                rounded
                style={{
                  marginTop: 20,
                  width: '95%',
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                <TextInput
                  placeholder="Email"
                  onChangeText={this.onChangeEmail}
                  style={{
                    width: '95%',
                    fontSize: 18,
                  }}
                />
              </Item>
              <Item
                rounded
                style={{
                  marginTop: 20,
                  width: '95%',
                  display: 'flex',
                  justifyContent: 'center',
                }}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={true}
                  style={{
                    width: '95%',
                    fontSize: 18,
                  }}
                  onChangeText={this.onChangePassword}
                />
              </Item>
              <Button style={styles.buttonLogin} onPress={this.onPressLogIn}>
                <Text style={{color: '#fff', fontSize: 20}}>SIGN IN</Text>
              </Button>
            </Form>
          </View>
          <View style></View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: Colors.white,
  },
  logo: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    marginBottom: 80,
    marginHorizontal: 10,
    borderRadius: 3,
    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8.3,

    elevation: 5,
  },
  buttonLogin: {
    backgroundColor: '#e6494c',
    display: 'flex',
    justifyContent: 'center',
    width: 100,
    marginTop: 20,
    marginBottom: 20,
  },
});
