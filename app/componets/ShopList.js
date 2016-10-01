import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableHighlight,
  ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import ShopListView from '../componets/ShopListView';

class ShopList extends Component{

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ShopListView />
        </ScrollView>
        <View style={styles.icon}>
          <TouchableHighlight
            onPress={() => Actions.add()}
          >
            <View>
              <Icon name="plus-circle" size={60} color="#FF4081" />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 64,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
  icon: {
    position: 'absolute',
    bottom: 80,
    right: 20
  }
});

export default ShopList;
