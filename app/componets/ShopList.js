import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import ShopListView from '../componets/ShopListView';

class ShopList extends Component{

  render() {
    return (
      <View style={styles.container}>
        <ShopListView />
      </View>
    );
  }

};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default ShopList;
