import React from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import {createAppContainer, FlatList, withNavigation} from 'react-navigation';
import {Item} from 'native-base';
import axios from 'axios';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  // handlePress = () => {
  //   this.props.navigation.navigate('CategoryPage');
  // };

  componentDidMount() {
    axios
      .get(`http://192.168.1.32:5000/api/eo/categories`)
      .then(res => {
        const data = res.data;
        this.setState({categories: data});
      })
      .catch(error => {
        console.log('Api call error');
        alert(error.message);
      });
  }

  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        style={styles.view}>
        <FlatList
          horizontal
          data={this.state.categories}
          renderItem={({item}) => {
            return (
              <Item style={styles.item}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.props.navigation.navigate('CategoryPage', {
                      categoryId: item.id,
                    });
                  }}>
                  <Text style={styles.itemText}>{item.name}</Text>
                </TouchableWithoutFeedback>
              </Item>
            );
          }}
          contentContainerStyle={{padding: 10}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    height: 100,
  },
  item: {
    backgroundColor: '#e6494c',
    height: 50,
    width: 200,
    display: 'flex',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
  },
});

export default withNavigation(Category);
