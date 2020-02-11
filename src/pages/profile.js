import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  AsyncStorage,
} from 'react-native';
import {Thumbnail, Right, Left, Icon} from 'native-base';
import axios, {get} from 'axios';
//import Component and Function
import HomeBar from '../../component/header-page';
import Space from '../styles/space';
import {profile} from '../config/api';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      profile: [],
    };
  }

  componentDidMount() {
    profile().then(response => this.setState({profile: response}));
  }

  render() {
    const image = this.state.profile.image;
    return (
      <View>
        <HomeBar title="Your Profile" />
        <ScrollView>
          <View>
            <Image
              source={require('../image/event.jpg')}
              style={{width: '100%', height: 200, zIndex: -20}}></Image>
          </View>
          <View style={{backgroundColor: 'lightgrey'}}>
            <View style={styles.Profile}>
              <Thumbnail style={styles.ProfileImage} source={{uri: image}} />
              <Text style={styles.ProfileName}>{this.state.profile.name}</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Icon
                  name="email"
                  type="Entypo"
                  style={{
                    color: 'white',
                    fontSize: 20,
                  }}
                />
                <Text style={styles.ProfileAddress}>
                  {' '}
                  {this.state.profile.email}
                </Text>
              </View>
            </View>
            <View style={styles.completeProfile}>
              <Text style={styles.ProfilePhone}>
                No.Telp. : {this.state.profile.phone}
              </Text>
              <Space size={50} />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  Profile: {
    backgroundColor: '#e6494c',
    // marginTop: 150,
    paddingBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  ProfileImage: {
    position: 'relative',
    top: -80,
    width: 160,
    height: 160,
    borderRadius: 160,
    borderWidth: 4,
    borderColor: 'grey',
  },
  ProfileName: {
    color: '#fff',
    fontSize: 20,
    marginTop: -50,
    marginBottom: 10,
  },
  ProfileAddress: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 7,
  },
  completeProfile: {
    backgroundColor: 'rgb(218, 96, 96)',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 100,
    borderRadius: 4,
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  ProfilePhone: {
    color: '#fff',
    fontSize: 17,
    marginBottom: 10,
  },
  ProfileEmail: {
    color: '#fff',
    fontSize: 17,
  },
});
