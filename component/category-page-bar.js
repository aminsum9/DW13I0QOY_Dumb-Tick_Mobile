import React from 'react';
import {StyleSheet} from 'react-native';
import {
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
} from 'native-base';

export default function(props) {
  console.log(props.name);
  return (
    <Header style={styles.ProfileHeader}>
      <Body>
        <Title style={{color: '#000'}}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
            }}>
            Category
          </Text>
        </Title>
      </Body>
    </Header>
  );
}

const styles = StyleSheet.create({
  ProfileHeader: {
    backgroundColor: '#e6494c',
    // shadowOffset: {width: 10, height: 10},
    shadowColor: 'grey',
    // shadowOpacity: 1.0,
  },
});
