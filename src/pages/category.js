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
import {category} from '../config/api';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }
  componentDidMount() {
    category().then(response => {
      const data = response;
      this.setState({categories: data});
    });
  }

  render() {
    return (
      <View
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        style={styles.view}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={this.state.categories}
          renderItem={({item}) => {
            return (
              <Item style={styles.item}>
                <TouchableWithoutFeedback
                  onPress={() => {
                    this.props.navigation.navigate('CategoryPage', {
                      categoryId: item.id,
                      categoryName: item.name,
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
    height: 55,
  },
  item: {
    borderRadius: 10,
    //border top
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    //border left
    borderLeftWidth: 1,
    borderLeftColor: '#e6494c',
    //border right
    borderRightWidth: 1,
    borderRightColor: '#e6494c',
    //border bottom
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    height: 35,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 15,
    // color: '#e6494c',
    textTransform: 'uppercase',
  },
});

export default withNavigation(Category);
