import React, {Component} from 'react';
import {StyleSheet, TextInput} from 'react-native';
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
  Form,
  Input,
  Item,
} from 'native-base';
import {NavigationActions, withNavigation} from 'react-navigation';

class HeaderSearchEvent extends Component {
  constructor() {
    super();
    this.state = {
      value: 'tes',
    };
  }

  onChange = e => {
    this.setState({value: e.target.value});
  };

  componentDidMount() {
    const title = this.props.title;
    this.setState({value: title});
  }
  render() {
    return (
      <Header
        style={{
          backgroundColor: '#e6494c',
          display: 'flex',
          alignItems: 'center',
        }}>
        <Icon
          name="arrow-back"
          type="MaterialIcons"
          style={{
            color: '#fff',
            marginRight: 10,
          }}
          onPress={() => {
            this.props.navigation.goBack();
          }}
        />
        <Body style={styles.headerBody}>
          <Item rounded style={{marginVertical: 5}}>
            <TextInput
              style={{
                height: 40,
                width: '97%',
                borderColor: 'transparent',
                borderWidth: 1,
                color: '#fff',
                marginLeft: 10,
                fontSize: 15,
              }}
              placeholder="search event"
              onChangeText={this.onChange}
              value={this.state.value}
            />
          </Item>
        </Body>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  headerBody: {
    // marginLeft: -40,
  },
  headerTitle: {
    fontSize: 25,
    color: '#fff',
  },
});

export default withNavigation(HeaderSearchEvent);
